import { KeyPair } from '../src/utils/signer';
import AccountKeys from '../src/account/accountKeys';
import { LibraUtils } from '../src';
import { LcsSerializer } from '../src/lcs/lcs/lcsSerializer';
import { bytesToBuffer, bytesToHexString } from '../src/utils/bytes';
import * as TransactionArgument from '../src/lcs/libraTypes';
import {
  GeneralMetadataV0,
  Helpers,
  SignedTransaction,
  TransactionAuthenticatorVariantEd25519,
  TransactionPayloadVariantScript,
} from '../src/lcs/libraTypes';
import { Serializer } from '../src/lcs/serde/serializer';
import {
  ScriptCallVariantPeerToPeerWithMetadata,
  Stdlib,
} from '../src/lcs/libraStdlib';
import { LcsDeserializer } from '../src/lcs/lcs/lcsDeserializer';

const expectToBeSerialized = (
  obj: { serialize: (serializer: Serializer) => void },
  serializedHex: string
) => {
  const lcs = new LcsSerializer();
  obj.serialize(lcs);
  expect(bytesToHexString(lcs.getBytes())).toStrictEqual(serializedHex);
};

describe('P2P Serializer', () => {
  it('serialize address', () => {
    const accountAddress = LibraUtils.makeAccountAddress(
      bytesToHexString('1668f6be25668c1a17cd8caf6b8d2f25')
    );
    expectToBeSerialized(accountAddress, '1668f6be25668c1a17cd8caf6b8d2f25');
  });

  it('serialize seq number (UInt64)', () => {
    const lcs = new LcsSerializer();
    lcs.serializeU64(BigInt(1));
    expect(bytesToHexString(lcs.getBytes())).toStrictEqual('0100000000000000');
  });

  describe('serialize payload', () => {
    it('serialize metadata', () => {
      const metadata = new GeneralMetadataV0(
        bytesToBuffer('1234567812345678'),
        bytesToBuffer('8765432187654321'),
        null
      );
      expectToBeSerialized(
        metadata,
        '010812345678123456780108876543218765432100'
      );
    });
    it('serialize empty metadata', () => {
      const metadata = new GeneralMetadataV0(null, null, null);
      expectToBeSerialized(metadata, '000000');
    });
    it('serialize script code', () => {
      const serializer = new LcsSerializer();
      serializer.serializeBytes(Stdlib.ADD_CURRENCY_TO_ACCOUNT_CODE);
      const codeHex = bytesToHexString(Stdlib.ADD_CURRENCY_TO_ACCOUNT_CODE);
      const codeLength = Buffer.from([codeHex.length / 2]).toString('hex');
      expect(bytesToHexString(serializer.getBytes())).toStrictEqual(
        `${codeLength}${codeHex}`
      );
    });
    it('serialize type tags', () => {
      const serializer = new LcsSerializer();
      const tyArgs = [LibraUtils.makeCurrencyTypeTag('LBR')];
      Helpers.serializeVectorTypeTag(tyArgs, serializer);
      expect(bytesToHexString(serializer.getBytes())).toStrictEqual(
        '010700000000000000000000000000000001034c4252034c425200'
      );
    });
    it('serialize transaction arguments', () => {
      const serializer = new LcsSerializer();
      const mdSerializer = new LcsSerializer();
      new GeneralMetadataV0(null, null, null).serialize(mdSerializer);
      const args = [
        new TransactionArgument.TransactionArgumentVariantAddress(
          LibraUtils.makeAccountAddress('1234567890abcdeffedcba0987654321')
        ),
        new TransactionArgument.TransactionArgumentVariantU64(BigInt(100)),
        new TransactionArgument.TransactionArgumentVariantU8Vector(
          mdSerializer.getBytes()
        ),
        new TransactionArgument.TransactionArgumentVariantU8Vector(
          new Uint8Array()
        ),
      ];
      Helpers.serializeVectorTransactionArgument(args, serializer);
      expect(bytesToHexString(serializer.getBytes())).toStrictEqual(
        '04031234567890abcdeffedcba098765432101640000000000000004030000000400'
      );
    });
    it('complete script (payload)', () => {
      const mdSerializer = new LcsSerializer();
      new GeneralMetadataV0(null, null, null).serialize(mdSerializer);
      const payload = new TransactionPayloadVariantScript(
        Stdlib.encodePeerToPeerWithMetadataScript(
          LibraUtils.makeCurrencyTypeTag('LBR'),
          LibraUtils.makeAccountAddress('0123456789abcdeffedcba9876543210'),
          BigInt(1000),
          mdSerializer.getBytes(),
          new Uint8Array() // empty metadata signature
        )
      );
      expectToBeSerialized(
        payload,
        '01e101a11ceb0b010000000701000202020403061004160205181d0735610896011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000c4c696272614163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b05110202010700000000000000000000000000000001034c4252034c42520004030123456789abcdeffedcba987654321001e80300000000000004030000000400'
      );
    });
  });

  it('p2p signed transaction', () => {
    const keyPair: KeyPair = {
      privateKey: Buffer.from(
        '76e3de861d516283dc285e12ddadc95245a9e98f351c910b0ad722f790bac273',
        'hex'
      ),
      publicKey: Buffer.from(
        'f549a91fb9989883fb4d38b463308f3ea82074fb39ea74dae61f62e11bf55d25',
        'hex'
      ),
    };
    const ak = new AccountKeys(keyPair);

    const [metadata, metadataSignature] = LibraUtils.createGeneralMetadata();

    const p2p = LibraUtils.createP2PTransaction(
      '1668f6be25668c1a17cd8caf6b8d2f25',
      BigInt(0),
      'LBR',
      '1234567890abcdeffedcba0987654321',
      BigInt(5000000),
      'LBR',
      BigInt(0),
      BigInt(100000000),
      BigInt(1000000000),
      2,
      metadata,
      metadataSignature
    );

    const signedTransaction = LibraUtils.signTransaction(p2p, ak);
    const lcs = new LcsSerializer();
    signedTransaction.serialize(lcs);

    expect(bytesToHexString(lcs.getBytes())).toStrictEqual(
      '1668f6be25668c1a17cd8caf6b8d2f25000000000000000001e101a11ceb0b010000000701000202020403061004160205181d0735610896011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000c4c696272614163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b05110202010700000000000000000000000000000001034c4252034c42520004031234567890abcdeffedcba098765432101404b4c000000000004050100000000040000e1f505000000000000000000000000034c425200ca9a3b00000000020020f549a91fb9989883fb4d38b463308f3ea82074fb39ea74dae61f62e11bf55d25407c2a07f174b78c8f9b8fc6861ac00a5358746b2110d11c89e8cda144ebf02fec77e19a2fc10a25f100c98997eac0241635d00c71912c9cd08a8dd3c3f279c104'
    );
  });
});

describe('Deserializer', () => {
  it('Uleb128', () => {
    const buffer = Buffer.from([1]);
    const des = new LcsDeserializer(buffer);
    expect(des.deserializeUleb128AsU32()).toBe(1);
  });

  it('P2P transaction', () => {
    const txHexBytes =
      '000000000000000000000000000000dde30200000000000001e101a11ceb0b010000000701000202020403061004160205181d0735610896011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000c4c696272614163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b05110202010700000000000000000000000000000001034c4252034c4252000403cf08656539744ad060c8ebff42eaec470180d1f008000000000400040040420f00000000000000000000000000034c42527cc64c5f00000000020020de572643e13b5da21b48b021c36b9215ba086b4530b0fef0bc79b25541c54edf40d1bf2e7ccb02121643c818a9ed35a0f01fae87f0d450003bba4ce72849a823a07ef32ac2c94901d952dbb71d05a6c6f34db129d1a314d1767e47bf2e73293101';
    const deserializer = new LcsDeserializer(bytesToBuffer(txHexBytes));
    const signedTx = SignedTransaction.deserialize(deserializer);
    const tx = signedTx.raw_txn;
    const authenticator = signedTx.authenticator;
    const sender = bytesToHexString(LibraUtils.parseAccountAddress(tx.sender));
    expect(sender).toBe('000000000000000000000000000000dd');
    expect(tx.sequence_number).toBe(BigInt(739));
    expect(tx.gas_currency_code).toBe('LBR');
    expect(tx.gas_unit_price).toBe(BigInt(0));
    expect(tx.max_gas_amount).toBe(BigInt(1000000));
    expect(tx.expiration_timestamp_secs).toBe(BigInt(1598867068));
    expect(tx.chain_id.value).toBe(2);

    expect(tx.payload).toBeInstanceOf(TransactionPayloadVariantScript);
    const script = (tx.payload as TransactionPayloadVariantScript).value;
    expect(bytesToHexString(script.code)).toBe(
      bytesToHexString(Stdlib.PEER_TO_PEER_WITH_METADATA_CODE)
    );
    const p2pScript = Stdlib.decodePeerToPeerWithMetadataScript(
      script
    ) as ScriptCallVariantPeerToPeerWithMetadata;
    expect(
      bytesToHexString(LibraUtils.parseAccountAddress(p2pScript.payee))
    ).toBe('cf08656539744ad060c8ebff42eaec47');

    expect(authenticator).toBeInstanceOf(
      TransactionAuthenticatorVariantEd25519
    );
    const auth = authenticator as TransactionAuthenticatorVariantEd25519;
    expect(bytesToHexString(auth.signature.value)).toBe(
      'd1bf2e7ccb02121643c818a9ed35a0f01fae87f0d450003bba4ce72849a823a07ef32ac2c94901d952dbb71d05a6c6f34db129d1a314d1767e47bf2e73293101'
    );
  });
});
