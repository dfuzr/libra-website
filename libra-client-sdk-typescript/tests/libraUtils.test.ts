import { testAccount, testAccount2 } from './helpers';
import { testnetChainID } from '../src/constants';
import AccountKeys from '../src/account/accountKeys';
import { KeyPair } from '../src/utils/signer';
import LibraUtils from '../src/libraUtils';
import {
  RawTransaction,
  SignedTransaction,
  TransactionPayloadVariantScript,
} from '../src/lcs/libraTypes';
import Intent from '../src/utils/intent';
import { Stdlib } from '../src/lcs/libraStdlib';

describe('Libra Utils', () => {
  describe('Creates AccountKeys', () => {
    it('generates keys without seed', () => {
      const result = LibraUtils.generateAccountKeys();

      expect(result).toBeInstanceOf(AccountKeys);
      expect(result.privateKey).toBeInstanceOf(Uint8Array);
      expect(result.privateKey).toHaveLength(32);
      expect(result.publicKey).toBeInstanceOf(Uint8Array);
      expect(result.publicKey).toHaveLength(32);
      expect(result.authKey).toBeInstanceOf(Uint8Array);
      expect(result.authKey).toHaveLength(32);
      expect(result.accountAddress).toBeInstanceOf(Uint8Array);
      expect(result.accountAddress).toHaveLength(16);
    });

    it('generates keys with seed', () => {
      const privateKey = Buffer.from(
        '76e3de861d516283dc285e12ddadc95245a9e98f351c910b0ad722f790bac273',
        'hex'
      );
      const publicKey = Buffer.from(
        'f549a91fb9989883fb4d38b463308f3ea82074fb39ea74dae61f62e11bf55d25',
        'hex'
      );

      const expectedAuthKey = Buffer.from(
        'd939b0214b484bf4d71d08d0247b755a1668f6be25668c1a17cd8caf6b8d2f25',
        'hex'
      );
      const expectedAccountAddress = Buffer.from(
        '1668f6be25668c1a17cd8caf6b8d2f25',
        'hex'
      );

      const result = LibraUtils.generateAccountKeys(privateKey);

      expect(result.privateKey).toStrictEqual(privateKey);
      expect(result.publicKey).toStrictEqual(publicKey);
      expect(result.authKey).toStrictEqual(expectedAuthKey);
      expect(result.accountAddress).toStrictEqual(expectedAccountAddress);
    });
  });

  describe('Creates RawTransaction', () => {
    it('P2P', () => {
      const [metadata, metadataSignature] = LibraUtils.createGeneralMetadata();

      const p2pTransaction = LibraUtils.createP2PTransaction(
        testAccount.libraAccountAddress,
        BigInt(0),
        'LBR',
        testAccount2.libraAccountAddress,
        BigInt(555000000),
        'LBR',
        BigInt(0),
        BigInt(1000000),
        BigInt(Math.trunc(new Date().getTime() / 1000 + 60 * 10)),
        testnetChainID,
        metadata,
        metadataSignature
      );

      expect(p2pTransaction).toBeInstanceOf(RawTransaction);
      expect(p2pTransaction.payload).toBeInstanceOf(
        TransactionPayloadVariantScript
      );
    });
  });

  describe('Signs RawTransaction', () => {
    it('P2P', () => {
      const [metadata, metadataSignature] = LibraUtils.createGeneralMetadata();

      const p2pTransaction = LibraUtils.createP2PTransaction(
        testAccount.libraAccountAddress,
        BigInt(0),
        'LBR',
        testAccount2.libraAccountAddress,
        BigInt(555000000),
        'LBR',
        BigInt(0),
        BigInt(1000000),
        BigInt(Math.trunc(new Date().getTime() / 1000 + 60 * 10)),
        testnetChainID,
        metadata,
        metadataSignature
      );

      const accountKeys = new AccountKeys(<KeyPair>{
        privateKey: Buffer.from(testAccount.privateKey, 'hex'),
        publicKey: Buffer.from(testAccount.publicKey, 'hex'),
      });

      const signedTransaction = LibraUtils.signTransaction(
        p2pTransaction,
        accountKeys
      );

      expect(signedTransaction).toBeInstanceOf(SignedTransaction);
      expect(signedTransaction.raw_txn).toStrictEqual(p2pTransaction);
    });
  });

  describe('Hashes SignedTransaction', () => {
    it('P2P', () => {
      expect(LibraUtils.hashTransaction(Buffer.from('signed tx bytes'))).toBe(
        'caf993c8b8483fb1e1f94952bf22a1ff5fc8cf4df8932ce5c859eec817f1ddfa'
      );
    });
  });

  describe('Bech32 Account Address', () => {
    const accountAddress = 'cbdb294078d276fa9189399714282b5d';
    const subAddress = 'f3704755d1100cd2';

    const bech32Address = 'tlb1pe0djjsrc6fm04yvf8xt3g2ptthehq3646ygqe5spqpw3v';
    const bech32AddressWithoutSubAddress =
      'tlb1pe0djjsrc6fm04yvf8xt3g2ptt5qqqqqqqqqqqqqv86hq8';

    describe('encodeAddress', () => {
      it('encodes Libra address to Bech32', () => {
        expect(LibraUtils.encodeAddress(accountAddress, subAddress)).toBe(
          bech32Address
        );
      });

      it('encodes Libra address to Bech32 without sub address', () => {
        expect(LibraUtils.encodeAddress(accountAddress)).toBe(
          bech32AddressWithoutSubAddress
        );
      });

      it('validates address length', () => {
        expect(() => LibraUtils.encodeAddress('9a51b3afc3aec76f')).toThrow(
          new TypeError('Address size should be 16 bytes, got: 8')
        );
      });

      it('validates sub address length', () => {
        expect(() =>
          LibraUtils.encodeAddress(accountAddress, '12345678')
        ).toThrow(new TypeError('Subaddress size should be 8 bytes, got: 4'));
      });
    });

    describe('decodeAddress', () => {
      it('decodes Bech32 address to Libra address and sub address', () => {
        expect(LibraUtils.decodeAddress('tlb', bech32Address)).toStrictEqual([
          accountAddress,
          subAddress,
        ]);
      });

      it('decodes Bech32 address to Libra address and default sub address', () => {
        expect(
          LibraUtils.decodeAddress('tlb', bech32AddressWithoutSubAddress)
        ).toStrictEqual([accountAddress, '0000000000000000']);
      });

      it('validates Bech32 address length', () => {
        expect(() =>
          LibraUtils.decodeAddress('tlb', 'tlb1qyy62xe6lsawcahh2vpm2')
        ).toThrow(new TypeError('Bech32 address size should be 50, got: 25'));
      });

      it('validates HRP in Bech32 address', () => {
        expect(() => LibraUtils.decodeAddress('lbr', bech32Address)).toThrow(
          new TypeError(
            'Wrong Libra address Bech32 human readable part (prefix): requested lbr, got tlb'
          )
        );
      });

      it('validates version in Bech32 address', () => {
        expect(() =>
          LibraUtils.decodeAddress(
            'tlb',
            'tlb1qgy62xe6lsawcahh2vpm26x6kpgpydzk0qfrg4ncv0cf4a'
          )
        ).toThrow(new TypeError(`Version mismatch. Expected 1, got 0`));
      });
    });
  });

  describe('Intents', () => {
    const accountAddress = 'cbdb294078d276fa9189399714282b5d';
    const subAddress = 'f3704755d1100cd2';

    const bech32Address = 'tlb1pe0djjsrc6fm04yvf8xt3g2ptthehq3646ygqe5spqpw3v';
    const bech32AddressWithoutSubAddress =
      'tlb1pe0djjsrc6fm04yvf8xt3g2ptt5qqqqqqqqqqqqqv86hq8';

    describe('encodeIntents', () => {
      it('encodes Intent object to string properly', () => {
        const intent = new Intent(
          'tlb',
          accountAddress,
          subAddress,
          'LBR',
          123
        );

        expect(LibraUtils.encodeIntent(intent)).toStrictEqual(
          new URL(`libra://${bech32Address}?c=LBR&am=123`)
        );
      });

      it('encodes Intent object to string properly without sub address', () => {
        expect(
          LibraUtils.encodeIntent(
            new Intent('tlb', accountAddress, undefined, 'LBR', 123)
          )
        ).toStrictEqual(
          new URL(`libra://${bech32AddressWithoutSubAddress}?c=LBR&am=123`)
        );
      });
    });

    describe('decodeIntent', () => {
      it('decodes intent string to Intent object properly', () => {
        expect(
          LibraUtils.decodeIntent(
            'tlb',
            new URL(`libra://${bech32Address}?c=LBR&am=123`)
          )
        ).toStrictEqual(
          new Intent('tlb', accountAddress, subAddress, 'LBR', 123)
        );
      });

      it('decodes intent string to Intent object properly without sub address', () => {
        expect(
          LibraUtils.decodeIntent(
            'tlb',
            new URL(`libra://${bech32AddressWithoutSubAddress}?c=LBR&am=123`)
          )
        ).toStrictEqual(
          new Intent('tlb', accountAddress, '0000000000000000', 'LBR', 123)
        );
      });

      it('validates intents protocol', () => {
        expect(() =>
          LibraUtils.decodeIntent(
            'tlb',
            new URL(`http://${bech32Address}?c=LBR&am=123`)
          )
        ).toThrow(new TypeError(`invalid intent scheme: http`));
      });

      it('validates HRP in Bech32 address', () => {
        expect(() =>
          LibraUtils.decodeIntent(
            'lbr',
            new URL(`libra://${bech32Address}?c=LBR&am=123`)
          )
        ).toThrow(
          new TypeError(
            'Wrong Libra address Bech32 human readable part (prefix): requested lbr, got tlb'
          )
        );
      });
    });
  });

  describe('Metadata', () => {
    describe('GeneralMetadata', () => {
      it('serializes empty GeneralMetadata', () => {
        const [metadata] = LibraUtils.createGeneralMetadata();
        expect(Buffer.from(metadata).toString('hex')).toStrictEqual(
          '0100000000'
        );
      });
      it('serializes GeneralMetadata for receiver sub address', () => {
        const [metadata] = LibraUtils.createGeneralMetadata('8f8b82153010a1bd');
        expect(Buffer.from(metadata).toString('hex')).toStrictEqual(
          '010001088f8b82153010a1bd0000'
        );
      });
      it('serializes GeneralMetadata for sender sub address', () => {
        const [metadata] = LibraUtils.createGeneralMetadata(
          undefined,
          '8f8b82153010a1bd'
        );
        expect(Buffer.from(metadata).toString('hex')).toStrictEqual(
          '01000001088f8b82153010a1bd00'
        );
      });
      it('serializes GeneralMetadata for sender & receiver sub addresses', () => {
        const [metadata] = LibraUtils.createGeneralMetadata(
          '111111153010a111',
          '8f8b82153010a1bd'
        );
        expect(Buffer.from(metadata).toString('hex')).toStrictEqual(
          '01000108111111153010a11101088f8b82153010a1bd00'
        );
      });
      it('serializes GeneralMetadata for sender & receiver sub addresses with reference event for refunds', () => {
        const [metadata] = LibraUtils.createGeneralMetadata(
          '111111153010a111',
          '8f8b82153010a1bd',
          BigInt(123)
        );
        expect(Buffer.from(metadata).toString('hex')).toStrictEqual(
          '01000108111111153010a11101088f8b82153010a1bd017b00000000000000'
        );
      });
    });

    describe('TravelRuleMetadata', () => {
      it('serializes TravelRuleMetadata with signature', () => {
        const metadata = LibraUtils.createTravelRuleMetadata('abcd1234');
        const payeeComplaincePrivateKey = Buffer.from(
          'e4e16ffcc59bc81a609e34c4ad7e8cf0a35fc9646f3ec1f75e9cf96c0b1be128',
          'hex'
        );
        const metadataSignature = LibraUtils.signTravelRuleMetadata(
          metadata,
          'f72589b71ff4f8d139674a3f7369c69b',
          BigInt(123000000),
          payeeComplaincePrivateKey
        );

        expect(Buffer.from(metadata).toString('hex')).toBe(
          '020001086162636431323334'
        );
        expect(Buffer.from(metadataSignature).toString('hex')).toBe(
          '9b885ae6d9aeb074b3227eac469852fc941a61161fe943c9e44641aa9f4085e15835e2be28ff2ecffd6e04400da866cfb897f2218750605ba7f0ee8dfa149a03'
        );
      });
    });
  });

  describe('Script matcher', () => {
    it('match simple script code', () => {
      const code = Stdlib.ADD_CURRENCY_TO_ACCOUNT_CODE;
      expect(LibraUtils.matchScriptByCode(code)!.codeName).toBe(
        'ADD_CURRENCY_TO_ACCOUNT'
      );
    });
  });
});
