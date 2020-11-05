"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = exports.bytesToHexString = exports.bytesFromHexString = exports.bytesToBuffer = void 0;
function bytesToBuffer(bytes, sizeRestriction) {
    if (bytes instanceof Uint8Array) {
        if (sizeRestriction && bytes.length !== sizeRestriction) {
            throw new TypeError(`Value must be ${sizeRestriction} bytes length`);
        }
        return bytes;
    }
    // string
    if (sizeRestriction && bytes.length !== sizeRestriction * 2) {
        throw new TypeError(`Seed must be ${sizeRestriction} bytes length (${sizeRestriction * 2} hex chars)`);
    }
    return bytesFromHexString(bytes);
}
exports.bytesToBuffer = bytesToBuffer;
function bytesFromHexString(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
}
exports.bytesFromHexString = bytesFromHexString;
function bytesToHexString(bytes) {
    if (bytes instanceof Uint8Array) {
        return Array.from(bytes, function (byte) {
            return ('0' + (byte & 0xff).toString(16)).slice(-2);
        }).join('');
    }
    else if (Array.isArray(bytes)) {
        return bytesToHexString(new Uint8Array(bytes));
    }
    // string
    return bytes;
}
exports.bytesToHexString = bytesToHexString;
function concat(...element) {
    const elementBuffers = element.map((val) => bytesToBuffer(val));
    const totalSize = elementBuffers
        .map((val) => val.byteLength)
        .reduce((prev, cur) => prev + cur, 0);
    const bytes = new Uint8Array(totalSize);
    let index = 0;
    for (const buf of elementBuffers) {
        bytes.set(buf, index);
        index += buf.byteLength;
    }
    return bytes;
}
exports.concat = concat;
