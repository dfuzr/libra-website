"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryDeserializer = void 0;
class BinaryDeserializer {
    constructor(data) {
        // As we can't be sure about the origin of the data, it's better to copy it to a new buffer
        // e.g. if the data originated by: Buffer.from('16a9', 'hex'), the internal buffer would be much longer and/or different (as Buffer is some sort of a view)
        this.buffer = new ArrayBuffer(data.length);
        new Uint8Array(this.buffer).set(data, 0);
        this.offset = 0;
    }
    read(length) {
        const bytes = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return bytes;
    }
    deserializeStr() {
        const value = this.deserializeBytes();
        return BinaryDeserializer.textDecoder.decode(value);
    }
    deserializeBytes() {
        const len = this.deserializeLen();
        if (len < 0) {
            throw new Error("Length of a bytes array can't be negative");
        }
        return new Uint8Array(this.read(len));
    }
    deserializeBool() {
        const bool = new Uint8Array(this.read(1))[0];
        return bool == 1;
    }
    deserializeUnit() {
        return;
    }
    deserializeU8() {
        return new DataView(this.read(1)).getUint8(0);
    }
    deserializeU16() {
        return new DataView(this.read(2)).getUint16(0, true);
    }
    deserializeU32() {
        return new DataView(this.read(4)).getUint32(0, true);
    }
    deserializeU64() {
        const left = this.deserializeU32();
        const right = this.deserializeU32();
        // combine the two 32-bit values and return (right contain the high bits)
        return (BigInt(right) << BinaryDeserializer.BIG_32) | BigInt(left);
    }
    deserializeU128() {
        const left = this.deserializeU64();
        const right = this.deserializeU64();
        // combine the two 64-bit values and return (right contain the high bits)
        return (BigInt(right) << BinaryDeserializer.BIG_64) | BigInt(left);
    }
    deserializeI8() {
        return new DataView(this.read(1)).getInt8(0);
    }
    deserializeI16() {
        return new DataView(this.read(2)).getInt16(0, true);
    }
    deserializeI32() {
        return new DataView(this.read(4)).getInt32(0, true);
    }
    deserializeI64() {
        const left = this.deserializeI32();
        const right = this.deserializeI32();
        // combine the two 32-bit values and return (right contain the high bits)
        return (BigInt(right) << BinaryDeserializer.BIG_32) | BigInt(left);
    }
    deserializeI128() {
        const left = this.deserializeI64();
        const right = this.deserializeI64();
        // combine the two 64-bit values and return (right contain the high bits)
        return (BigInt(right) << BinaryDeserializer.BIG_64) | BigInt(left);
    }
    deserializeOptionTag() {
        return this.deserializeBool();
    }
    getBufferOffset() {
        return this.offset;
    }
    deserializeChar() {
        throw new Error('Method deserializeChar not implemented.');
    }
    deserializeF32() {
        return new DataView(this.read(4)).getFloat32(0, true);
    }
    deserializeF64() {
        return new DataView(this.read(8)).getFloat64(0, true);
    }
}
exports.BinaryDeserializer = BinaryDeserializer;
BinaryDeserializer.BIG_32 = BigInt(32);
BinaryDeserializer.BIG_64 = BigInt(64);
BinaryDeserializer.textDecoder = new TextDecoder();
