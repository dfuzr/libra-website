import bech32 from 'bech32';
import { Signer } from './utils/signer';
import AccountKeys from './account/accountKeys';
import {
  addressBytesSize,
  bech32AddressLength,
  bech32AddressVersion,
  coreCodeAddressHex,
  libraScheme,
  subAddressBytesSize,
  zeroSubAddress,
} from './constants';
import { Bytes, bytesToBuffer, bytesToHexString, concat } from './utils/bytes';
import {
  AccountAddress,
  ChainId,
  Ed25519PublicKey,
  Ed25519Signature,
  GeneralMetadataV0,
  GeneralMetadataVariantGeneralMetadataVersion0,
  Identifier,
  MetadataVariantGeneralMetadata,
  MetadataVariantTravelRuleMetadata,
  RawTransaction,
  SignedTransaction,
  StructTag,
  TransactionAuthenticatorVariantEd25519,
  TransactionPayloadVariantScript,
  TravelRuleMetadataV0,
  TravelRuleMetadataVariantTravelRuleMetadataVersion0,
  TypeTag,
  TypeTagVariantStruct,
} from './lcs/libraTypes';
import { LcsSerializer } from './lcs/lcs/lcsSerializer';
import { ScriptDef, Stdlib } from './lcs/libraStdlib';
import Intent from './utils/intent';
import { SHA3 } from 'sha3';
import { LibraHRP, Currency } from './interfaces/types';
import util from 'util';

export default class LibraUtils {
  private static readonly textEncoder =
    typeof window === 'undefined' ? new util.TextEncoder() : new TextEncoder();

  public static generateAccountKeys(seed?: Bytes): AccountKeys {
    const keyPair = Signer.generateKeyPair(seed);
    return new AccountKeys(keyPair);
  }

  public static createAddCurrencyToAccountTransaction(
    sender: Bytes,
    sequenceNumber: BigInt,
    currency: Currency,
    gasCurrency: Currency,
    gasUnitPrice: BigInt,
    maxGasAmount: BigInt,
    expirationTimestampSecs: BigInt,
    network: number
  ): RawTransaction {
    const currencyTag = LibraUtils.makeCurrencyTypeTag(currency);
    const script = Stdlib.encodeAddCurrencyToAccountScript(currencyTag);

    return new RawTransaction(
      LibraUtils.makeAccountAddress(sender),
      sequenceNumber,
      new TransactionPayloadVariantScript(script),
      maxGasAmount,
      gasUnitPrice,
      gasCurrency,
      expirationTimestampSecs,
      new ChainId(network)
    );
  }

  public static createGeneralMetadata(
    receiverSubaddress?: Bytes,
    senderSubaddress?: Bytes,
    referenceEventNumber?: BigInt
  ): [Uint8Array, Uint8Array] {
    const serializer = new LcsSerializer();

    const metadata = new MetadataVariantGeneralMetadata(
      new GeneralMetadataVariantGeneralMetadataVersion0(
        new GeneralMetadataV0(
          receiverSubaddress ? bytesToBuffer(receiverSubaddress) : null,
          senderSubaddress ? bytesToBuffer(senderSubaddress) : null,
          referenceEventNumber ?? null
        )
      )
    );
    metadata.serialize(serializer);

    const signature = new Uint8Array();

    return [serializer.getBytes(), signature];
  }

  public static signTravelRuleMetadata(
    metadata: Uint8Array,
    sender: Bytes,
    amount: BigInt,
    privateKey: Uint8Array
  ): Uint8Array {
    const sigSerializer = new LcsSerializer();

    const address = LibraUtils.makeAccountAddress(sender);
    address.serialize(sigSerializer);
    sigSerializer.serializeU64(amount);

    const dualAttestationMessage = concat(
      metadata,
      concat(
        sigSerializer.getBytes(),
        this.textEncoder.encode('@@$$LIBRA_ATTEST$$@@')
      )
    );
    return Signer.sign(privateKey, dualAttestationMessage);
  }

  public static createTravelRuleMetadata(
    offChainReferenceId: string
  ): Uint8Array {
    const serializer = new LcsSerializer();
    const metadata = new MetadataVariantTravelRuleMetadata(
      new TravelRuleMetadataVariantTravelRuleMetadataVersion0(
        new TravelRuleMetadataV0(offChainReferenceId ?? null)
      )
    );
    metadata.serialize(serializer);

    return serializer.getBytes();
  }

  public static createP2PTransaction(
    sender: string,
    sequenceNumber: BigInt,
    currency: Currency,
    receiver: string,
    amount: BigInt,
    gasCurrency: Currency,
    gasUnitPrice: BigInt,
    maxGasAmount: BigInt,
    expirationTimestampSecs: BigInt,
    network: number,
    metadata: Uint8Array,
    metadataSignature: Uint8Array
  ): RawTransaction {
    const currencyTag = LibraUtils.makeCurrencyTypeTag(currency);

    const script = Stdlib.encodePeerToPeerWithMetadataScript(
      currencyTag,
      LibraUtils.makeAccountAddress(receiver),
      amount,
      metadata,
      metadataSignature
    );

    return new RawTransaction(
      LibraUtils.makeAccountAddress(sender),
      sequenceNumber,
      new TransactionPayloadVariantScript(script),
      maxGasAmount,
      gasUnitPrice,
      gasCurrency,
      expirationTimestampSecs,
      new ChainId(network)
    );
  }

  public static signTransaction(
    rawTransaction: RawTransaction,
    accountKeys: AccountKeys
  ): SignedTransaction {
    const txSerializer = new LcsSerializer();
    rawTransaction.serialize(txSerializer);

    const signature = Signer.signRawTransaction(
      bytesToBuffer(accountKeys.privateKey),
      txSerializer.getBytes()
    );
    return new SignedTransaction(
      rawTransaction,
      new TransactionAuthenticatorVariantEd25519(
        new Ed25519PublicKey(bytesToBuffer(accountKeys.publicKey)),
        new Ed25519Signature(signature)
      )
    );
  }

  public static hashTransaction(signedTxBytes: Uint8Array): string {
    const prefixHash = new SHA3(256);
    prefixHash.update('LIBRA::Transaction');
    const prefix = prefixHash.digest();

    const transactionHash = new SHA3(256);
    transactionHash.update(prefix);
    transactionHash.update(Buffer.from([0]));
    transactionHash.update(Buffer.from(signedTxBytes));

    return transactionHash.digest().toString('hex');
  }

  public static encodeAddress(
    address: Bytes,
    subAddress?: Bytes,
    hrp: LibraHRP = 'tlb'
  ): string {
    const addressBytes = bytesToBuffer(address);
    const subAddressBytes = bytesToBuffer(subAddress ?? zeroSubAddress);

    if (addressBytes.length != addressBytesSize) {
      throw new TypeError(
        `Address size should be ${addressBytesSize} bytes, got: ${addressBytes.length}`
      );
    }

    if (subAddressBytes.length != subAddressBytesSize) {
      throw new TypeError(
        `Subaddress size should be ${subAddressBytesSize} bytes, got: ${subAddressBytes.length}`
      );
    }

    const mergedAddressBytes = concat(addressBytes, subAddressBytes);

    const words = bech32.toWords(mergedAddressBytes);

    words.unshift(bech32AddressVersion);

    return bech32.encode(hrp, words);
  }

  public static decodeAddress(
    hrp: LibraHRP,
    bech32Address: string
  ): [string, string | undefined] {
    if (bech32Address.length !== bech32AddressLength) {
      throw new TypeError(
        `Bech32 address size should be ${bech32AddressLength}, got: ${bech32Address.length}`
      );
    }
    const { prefix, words } = bech32.decode(bech32Address);

    if (prefix !== hrp) {
      throw new TypeError(
        `Wrong Libra address Bech32 human readable part (prefix): requested ${hrp}, got ${prefix}`
      );
    }

    const addressVersion = words[0];

    const mergedAddress = new Uint8Array(bech32.fromWords(words.slice(1)));

    if (bech32AddressVersion !== addressVersion) {
      throw new TypeError(
        `Version mismatch. Expected ${bech32AddressVersion}, got ${addressVersion}`
      );
    }

    const address = bytesToHexString(mergedAddress.slice(0, addressBytesSize));
    const subAddress = bytesToHexString(mergedAddress.slice(addressBytesSize));

    return [address, subAddress.length ? subAddress : undefined];
  }

  public static encodeIntent(intent: Intent): URL {
    const bech32Address = LibraUtils.encodeAddress(
      intent.address,
      intent.subAddress,
      intent.hrp
    );
    const url = new URL(`${libraScheme}://${bech32Address}`);

    if (intent.currency) {
      url.searchParams.set('c', intent.currency);
    }

    if (intent.amount) {
      url.searchParams.set('am', intent.amount.toString());
    }

    return url;
  }

  public static decodeIntent(hrp: LibraHRP, intent: URL): Intent {
    const protocol = intent.protocol.slice(0, -1);
    if (protocol !== libraScheme) {
      throw new TypeError(`invalid intent scheme: ${protocol}`);
    }

    const [address, subAddress] = LibraUtils.decodeAddress(
      hrp,
      intent.hostname
    );

    let currency: Currency | undefined;
    if (intent.searchParams.has('c')) {
      currency = intent.searchParams.get('c')! as Currency;
    }

    let amount: number | undefined;
    if (intent.searchParams.has('am')) {
      amount = parseInt(intent.searchParams.get('am')!);
    }

    return new Intent(hrp, address, subAddress, currency, amount);
  }

  public static makeCurrencyTypeTag(currency: Currency): TypeTag {
    const structTag = new StructTag(
      LibraUtils.makeAccountAddress(coreCodeAddressHex),
      new Identifier(currency),
      new Identifier(currency),
      []
    );

    return new TypeTagVariantStruct(structTag);
  }

  public static makeAccountAddress(address: Bytes): AccountAddress {
    const asTuple: [number][] = [];
    bytesToBuffer(address).forEach((value) => asTuple.push([value]));
    return new AccountAddress(asTuple);
  }

  public static parseAccountAddress(address: AccountAddress): Uint8Array {
    const addressBuffer = new Uint8Array(address.value.length);
    let index = 0;
    for (const value of address.value) {
      const [octet] = value;
      addressBuffer[index] = octet;
      ++index;
    }
    return addressBuffer;
  }

  public static matchScriptByCode(code: Bytes): ScriptDef | undefined {
    const codeHex = bytesToHexString(code);
    const scripts = Object.entries(Stdlib.ScriptArgs).filter(
      ([, scriptDef]) => {
        const name = `${scriptDef.codeName}_CODE` as keyof Stdlib;
        const stdCode = bytesToHexString(Stdlib[name]);
        return stdCode === codeHex;
      }
    );
    if (scripts.length < 1) {
      return undefined;
    }
    if (scripts.length > 1) {
      throw new Error(`More than one script matches ${codeHex}`);
    }
    const [, def] = scripts[0];
    return def;
  }
}
