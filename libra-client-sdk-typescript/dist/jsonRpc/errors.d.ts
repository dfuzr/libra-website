import { AxiosError } from 'axios';
import { JsonRpcErrorPayload } from './types';
export declare class JsonRpcTransportError extends Error {
    readonly error: AxiosError;
    constructor(error: AxiosError);
}
export declare class JsonRpcNetworkError extends Error {
    readonly error: AxiosError;
    constructor(error: AxiosError);
}
export declare class JsonRpcError extends Error {
    readonly error: JsonRpcErrorPayload;
    constructor(error: JsonRpcErrorPayload);
}
export declare class JsonRpcProtocolError extends Error {
    readonly response: string;
    constructor(response: string);
}
