var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import * as http from 'http';
import * as https from 'https';
import { JsonRpcError, JsonRpcNetworkError, JsonRpcProtocolError, JsonRpcTransportError, } from './errors';
import json_bigint from 'json-bigint';
const JSONbigNative = json_bigint({
    useNativeBigInt: true,
});
const NEVER_CHANGING_MSG_ID_BECAUSE_NOT_USED_FOR_ANYTHING = 2009;
export const BIG_INT_KEYS = [
    'sequence_number',
    'sequenceNumber',
    'expiration_time',
    'expirationTime',
    'num_children',
    'numChildren',
    'transaction_version',
    'transactionVersion',
    'version',
    'timestampUsecs',
    'timestamp_usecs',
    'amount',
    'libra_ledger_timestampusec',
    'libraLedgerTimestampusec',
    'libra_ledger_version',
    'libraLedgerVersion',
    'timestamp',
    'gas_unit_price',
    'gasUnitPrice',
    'max_gas_amount',
    'maxGasAmount',
    'expiration_timestamp_secs',
    'expirationTimestampSecs',
    'timestamp_usecs',
    'timestampUsecs',
    'gas_used',
    'gasUsed',
    'transaction_version',
    'transactionVersion',
];
export const JSONStringify = (data) => JSONbigNative.stringify(data);
export const JSONParse = (data) => JSONbigNative.parse(data, (key, value) => {
    if (BIG_INT_KEYS.includes(key)) {
        try {
            return BigInt(value);
        }
        catch (e) {
            return value;
        }
    }
    return value;
});
export default class JsonRpcClient {
    constructor(serverUrl) {
        this.caller = axios.create({
            url: serverUrl,
            headers: { 'Content-Type': 'application/json' },
            timeout: 5 * 1000,
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),
            transformRequest: JSONStringify,
            transformResponse: JSONParse,
        });
    }
    call(method, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                jsonrpc: '2.0',
                id: NEVER_CHANGING_MSG_ID_BECAUSE_NOT_USED_FOR_ANYTHING,
                method,
                params,
            });
        });
    }
    request(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.caller.request({
                    method: 'post',
                    data,
                });
                if (response.headers['content-type'] !== 'application/json' ||
                    typeof response.data === 'string') {
                    throw new JsonRpcProtocolError(response.data);
                }
                const body = response.data;
                if (body.error) {
                    throw new JsonRpcError(body.error);
                }
                return body;
            }
            catch (e) {
                if (e.isAxiosError) {
                    if (e.response) {
                        throw new JsonRpcTransportError(e);
                    }
                    throw new JsonRpcNetworkError(e);
                }
                throw e;
            }
        });
    }
}
