"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONParse = exports.JSONStringify = exports.BIG_INT_KEYS = void 0;
const axios_1 = __importDefault(require("axios"));
const http = __importStar(require("http"));
const https = __importStar(require("https"));
const errors_1 = require("./errors");
const json_bigint_1 = __importDefault(require("json-bigint"));
const JSONbigNative = json_bigint_1.default({
    useNativeBigInt: true,
});
const NEVER_CHANGING_MSG_ID_BECAUSE_NOT_USED_FOR_ANYTHING = 2009;
exports.BIG_INT_KEYS = [
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
exports.JSONStringify = (data) => JSONbigNative.stringify(data);
exports.JSONParse = (data) => JSONbigNative.parse(data, (key, value) => {
    if (exports.BIG_INT_KEYS.includes(key)) {
        try {
            return BigInt(value);
        }
        catch (e) {
            return value;
        }
    }
    return value;
});
class JsonRpcClient {
    constructor(serverUrl) {
        this.caller = axios_1.default.create({
            url: serverUrl,
            headers: { 'Content-Type': 'application/json' },
            timeout: 5 * 1000,
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),
            transformRequest: exports.JSONStringify,
            transformResponse: exports.JSONParse,
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
                    throw new errors_1.JsonRpcProtocolError(response.data);
                }
                const body = response.data;
                if (body.error) {
                    throw new errors_1.JsonRpcError(body.error);
                }
                return body;
            }
            catch (e) {
                if (e.isAxiosError) {
                    if (e.response) {
                        throw new errors_1.JsonRpcTransportError(e);
                    }
                    throw new errors_1.JsonRpcNetworkError(e);
                }
                throw e;
            }
        });
    }
}
exports.default = JsonRpcClient;
