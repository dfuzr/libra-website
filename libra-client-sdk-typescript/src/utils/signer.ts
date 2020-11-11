import crypto from 'crypto';
import { eddsa as EdDSA } from 'elliptic';
import { Bytes, bytesToBuffer, concat } from './bytes';
import { SHA3 } from 'sha3';

export interface KeyPair {
  privateKey: Bytes;
  publicKey: Bytes;
}

export class Signer {
  private static getSeedBuffer(seed?: Bytes) {
    if (seed) {
      return bytesToBuffer(seed, 32);
    }

    return crypto.pseudoRandomBytes(32);
  }

  private static hashRawTransaction(rawTxBytes: Uint8Array): Uint8Array {
    const hash = new SHA3(256);

    hash.update(Buffer.from('LIBRA::RawTransaction', 'utf8'));
    const digest = hash.digest();

    return concat(digest, rawTxBytes);
  }

  public static generateKeyPair(seed?: Bytes): KeyPair {
    const eddsa = new EdDSA('ed25519');
    const seedBuffer = this.getSeedBuffer(seed);
    const keyPair = eddsa.keyFromSecret(Buffer.from(seedBuffer));
    const publicKey = Buffer.from(keyPair.getPublic());
    return {
      privateKey: seedBuffer,
      publicKey,
    };
  }

  public static signRawTransaction(
    privateKey: Uint8Array,
    rawTx: Uint8Array
  ): Uint8Array {
    const blobToSign = this.hashRawTransaction(rawTx);
    return this.sign(privateKey, blobToSign);
  }

  public static sign(privateKey: Uint8Array, blob: Uint8Array): Uint8Array {
    const eddsa = new EdDSA('ed25519');
    const signature = eddsa.sign(Buffer.from(blob), Buffer.from(privateKey));
    return Buffer.from(signature.toBytes());
  }
}
