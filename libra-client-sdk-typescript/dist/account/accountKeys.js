"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sha3_1 = require("sha3");
const bytes_1 = require("../utils/bytes");
class AccountKeys {
    constructor(keyPair) {
        this.privateKey = keyPair.privateKey;
        this.publicKey = keyPair.publicKey;
        const hash = new sha3_1.SHA3(256);
        hash.update(Buffer.from(bytes_1.bytesToBuffer(keyPair.publicKey)));
        hash.update(Buffer.from([0])); // single key
        this.authKey = hash.digest();
        this.accountAddress = this.authKey.subarray(this.authKey.length - 16, this.authKey.length);
    }
}
exports.default = AccountKeys;
