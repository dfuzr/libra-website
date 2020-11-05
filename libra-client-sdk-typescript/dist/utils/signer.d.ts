import { Bytes } from './bytes';
export interface KeyPair {
    privateKey: Bytes;
    publicKey: Bytes;
}
export declare class Signer {
    private static getSeedBuffer;
    private static hashRawTransaction;
    static generateKeyPair(seed?: Bytes): KeyPair;
    static signRawTransaction(privateKey: Uint8Array, rawTx: Uint8Array): Uint8Array;
    static sign(privateKey: Uint8Array, blob: Uint8Array): Uint8Array;
}
