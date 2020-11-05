"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signer = void 0;
const crypto_1 = __importDefault(require("crypto"));
const elliptic_1 = require("elliptic");
const bytes_1 = require("./bytes");
const sha3_1 = require("sha3");
class Signer {
    static getSeedBuffer(seed) {
        if (seed) {
            return bytes_1.bytesToBuffer(seed, 32);
        }
        return crypto_1.default.pseudoRandomBytes(32);
    }
    static hashRawTransaction(rawTxBytes) {
        const hash = new sha3_1.SHA3(256);
        hash.update(Buffer.from('LIBRA::RawTransaction', 'utf8'));
        const digest = hash.digest();
        return bytes_1.concat(digest, rawTxBytes);
    }
    static generateKeyPair(seed) {
        const eddsa = new elliptic_1.eddsa('ed25519');
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
        const eddsa = new elliptic_1.eddsa('ed25519');
        const signature = eddsa.sign(Buffer.from(blob), Buffer.from(privateKey));
        return Buffer.from(signature.toBytes());
    }
}
exports.Signer = Signer;
