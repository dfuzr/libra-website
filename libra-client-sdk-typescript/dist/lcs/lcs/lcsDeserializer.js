import { BinaryDeserializer } from '../serde/binaryDeserializer';
export class LcsDeserializer extends BinaryDeserializer {
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
LcsDeserializer.MAX_UINT_32 = Math.pow(2, 32) - 1;
