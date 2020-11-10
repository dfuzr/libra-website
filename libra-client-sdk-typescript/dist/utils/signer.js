import crypto from 'crypto';
import { eddsa as EdDSA } from 'elliptic';
import { bytesToBuffer, concat } from './bytes';
import { SHA3 } from 'sha3';
export class Signer {
    static getSeedBuffer(seed) {
        if (seed) {
            return bytesToBuffer(seed, 32);
        }
        return crypto.pseudoRandomBytes(32);
    }
    static hashRawTransaction(rawTxBytes) {
        const hash = new SHA3(256);
        hash.update(Buffer.from('LIBRA::RawTransaction', 'utf8'));
        const digest = hash.digest();
        return concat(digest, rawTxBytes);
    }
    static generateKeyPair(seed) {
        const eddsa = new EdDSA('ed25519');
        const seedBuffer = this.getSeedBuffer(seed);
        const keyPair = eddsa.keyFromSecret(Buffer.from(seedBuffer));
        const publicKey = Buffer.from(keyPair.getPublic());
        return {
            privateKey: seedBuffer,
            publicKey,
        };
    }
    static signRawTransaction(privateKey, rawTx) {
        const blobToSign = this.hashRawTransaction(rawTx);
        return this.sign(privateKey, blobToSign);
    }
    static sign(privateKey, blob) {
        const eddsa = new EdDSA('ed25519');
        const signature = eddsa.sign(Buffer.from(blob), Buffer.from(privateKey));
        return Buffer.from(signature.toBytes());
    }
}
