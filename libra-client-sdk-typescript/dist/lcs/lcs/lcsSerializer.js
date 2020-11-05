"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LcsSerializer = void 0;
const binarySerializer_1 = require("../serde/binarySerializer");
class LcsSerializer extends binarySerializer_1.BinarySerializer {
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
exports.LcsSerializer = LcsSerializer;
