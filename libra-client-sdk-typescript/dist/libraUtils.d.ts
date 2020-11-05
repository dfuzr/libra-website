import AccountKeys from './account/accountKeys';
import { Bytes } from './utils/bytes';
import { AccountAddress, RawTransaction, SignedTransaction, TypeTag } from './lcs/libraTypes';
import { ScriptDef } from './lcs/libraStdlib';
import Intent from './utils/intent';
import { LibraHRP, Currency } from './interfaces/types';
export default class LibraUtils {
    private static readonly textEncoder;
    static generateAccountKeys(seed?: Bytes): AccountKeys;
    static createAddCurrencyToAccountTransaction(sender: Bytes, sequenceNumber: BigInt, currency: Currency, gasCurrency: Currency, gasUnitPrice: BigInt, maxGasAmount: BigInt, expirationTimestampSecs: BigInt, network: number): RawTransaction;
    static createGeneralMetadata(receiverSubaddress?: Bytes, senderSubaddress?: Bytes, referenceEventNumber?: BigInt): [Uint8Array, Uint8Array];
    static signTravelRuleMetadata(metadata: Uint8Array, sender: Bytes, amount: BigInt, privateKey: Uint8Array): Uint8Array;
    static createTravelRuleMetadata(offChainReferenceId: string): Uint8Array;
    static createP2PTransaction(sender: string, sequenceNumber: BigInt, currency: Currency, receiver: string, amount: BigInt, gasCurrency: Currency, gasUnitPrice: BigInt, maxGasAmount: BigInt, expirationTimestampSecs: BigInt, network: number, metadata: Uint8Array, metadataSignature: Uint8Array): RawTransaction;
    static signTransaction(rawTransaction: RawTransaction, accountKeys: AccountKeys): SignedTransaction;
    static hashTransaction(signedTxBytes: Uint8Array): string;
    static encodeAddress(address: Bytes, subAddress?: Bytes, hrp?: LibraHRP): string;
    static decodeAddress(hrp: LibraHRP, bech32Address: string): [string, string | undefined];
    static encodeIntent(intent: Intent): URL;
    static decodeIntent(hrp: LibraHRP, intent: URL): Intent;
    static makeCurrencyTypeTag(currency: Currency): TypeTag;
    static makeAccountAddress(address: Bytes): AccountAddress;
    static parseAccountAddress(address: AccountAddress): Uint8Array;
    static matchScriptByCode(code: Bytes): ScriptDef | undefined;
}
