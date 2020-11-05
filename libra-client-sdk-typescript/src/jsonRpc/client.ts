import axios, { AxiosInstance } from 'axios';
import * as http from 'http';
import * as https from 'https';
import {
  JsonRpcError,
  JsonRpcNetworkError,
  JsonRpcProtocolError,
  JsonRpcTransportError,
} from './errors';
import { JsonRpcMethod, JsonRpcRequest, JsonRpcResponse } from './types';
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

export const JSONStringify = (data: any) => JSONbigNative.stringify(data);
export const JSONParse = (data: any) =>
  JSONbigNative.parse(data, (key, value) => {
    if (BIG_INT_KEYS.includes(key)) {
      try {
        return BigInt(value);
      } catch (e) {
        return value;
      }
    }
    return value;
  });

export default class JsonRpcClient {
  private readonly caller: AxiosInstance;

  constructor(serverUrl: string) {
    this.caller = axios.create({
      url: serverUrl,
      headers: { 'Content-Type': 'application/json' },
      timeout: 5 * 1000, // 5 seconds
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      transformRequest: JSONStringify,
      transformResponse: JSONParse,
    });
  }

  public async call<M extends JsonRpcMethod>(
    method: M['method'],
    params: M['params']
  ): Promise<M['response']> {
    return this.request<M['method'], M['params'], M['response']>({
      jsonrpc: '2.0',
      id: NEVER_CHANGING_MSG_ID_BECAUSE_NOT_USED_FOR_ANYTHING,
      method,
      params,
    });
  }

  private async request<
    M extends JsonRpcMethod['method'],
    P extends JsonRpcMethod['params'],
    R extends JsonRpcMethod['response']
  >(data: JsonRpcRequest<M, P>): Promise<JsonRpcResponse<R>> {
    try {
      const response = await this.caller.request<JsonRpcResponse<R>>({
        method: 'post',
        data,
      });

      if (
        response.headers['content-type'] !== 'application/json' ||
        typeof response.data === 'string'
      ) {
        throw new JsonRpcProtocolError((response.data as unknown) as string);
      }

      const body = response.data;

      if (body.error) {
        throw new JsonRpcError(body.error);
      }

      return body;
    } catch (e) {
      if (e.isAxiosError) {
        if (e.response) {
          throw new JsonRpcTransportError(e);
        }
        throw new JsonRpcNetworkError(e);
      }
      throw e;
    }
  }
}
