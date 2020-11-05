"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LcsDeserializer = void 0;
const binaryDeserializer_1 = require("../serde/binaryDeserializer");
class LcsDeserializer extends binaryDeserializer_1.BinaryDeserializer {
    constructor(data) {
        super(data);
    }
    deserializeUleb128AsU32() {
        let value = 0;
        for (let shift = 0; shift < 32; shift += 7) {
            const x = this.deserializeU8();
            const digit = x & 0x7f;
            value = value | (digit << shift);
            if (value < 0 || value > LcsDeserializer.MAX_UINT_32) {
                throw new Error('Overflow while parsing uleb128-encoded uint32 value');
            }
            if (digit == x) {
                if (shift > 0 && digit == 0) {
                    throw new Error('Invalid uleb128 number (unexpected zero digit)');
                }
                return value;
            }
        }
        throw new Error('Overflow while parsing uleb128-encoded uint32 value');
    }
    deserializeLen() {
        return this.deserializeUleb128AsU32();
    }
    deserializeVariantIndex() {
        return this.deserializeUleb128AsU32();
    }
    checkThatKeySlicesAreIncreasing(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key1, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key2) {
        return;
    }
}
exports.LcsDeserializer = LcsDeserializer;
LcsDeserializer.MAX_UINT_32 = Math.pow(2, 32) - 1;
