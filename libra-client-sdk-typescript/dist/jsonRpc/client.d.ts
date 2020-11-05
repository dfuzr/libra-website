import { JsonRpcMethod } from './types';
export declare const BIG_INT_KEYS: string[];
export declare const JSONStringify: (data: any) => string;
export declare const JSONParse: (data: any) => any;
export default class JsonRpcClient {
    private readonly caller;
    constructor(serverUrl: string);
    call<M extends JsonRpcMethod>(method: M['method'], params: M['params']): Promise<M['response']>;
    private request;
}
