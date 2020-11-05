export declare type Bytes = string | Uint8Array;
export declare function bytesToBuffer(bytes: Bytes, sizeRestriction?: number): Uint8Array;
export declare function bytesFromHexString(hexString: string): Uint8Array;
export declare function bytesToHexString(bytes: Bytes | number[]): string;
export declare function concat(...element: Bytes[]): Uint8Array;
