import { BinarySerializer } from '../serde/binarySerializer';
export class LcsSerializer extends BinarySerializer {
    constructor() {
        super();
    }
    serializeU32AsUleb128(value) {
        const valueArray = [];
        while (value >>> 7 != 0) {
            valueArray.push((value & 0x7f) | 0x80);
            value = value >>> 7;
        }
        valueArray.push(value);
        this.serialize(new Uint8Array(valueArray));
    }
    serializeLen(value) {
        this.serializeU32AsUleb128(value);
    }
    serializeVariantIndex(value) {
        this.serializeU32AsUleb128(value);
    }
    sortMapEntries(offsets) {
        // leaving it empty for now, should be implemented soon
    }
}
