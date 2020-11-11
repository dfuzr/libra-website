import axios, { AxiosInstance } from 'axios';
import LibraClient from './libraClient';
import { FaucetNetworkError, FaucetTransportError } from './errors';
import { JSONParse, JSONStringify } from './jsonRpc/client';
import { Currency } from './interfaces/types';

export default class TestnetClient extends LibraClient {
  public static readonly TESTNET_JSONRPC_URL = 'https://testnet.libra.org/v1';
  public static readonly TESTNET_FAUCET_URL = 'https://testnet.libra.org/mint';
  public static readonly TESTNET_DESIGNATED_DEALER =
    '000000000000000000000000000000dd';
  public static readonly TESTNET_CHAIN_ID = 2;

  private readonly faucetCaller: AxiosInstance;

  constructor(
    faucetUrl = TestnetClient.TESTNET_FAUCET_URL,
    jsonRpcUrl: string = TestnetClient.TESTNET_JSONRPC_URL,
    chainID: number = TestnetClient.TESTNET_CHAIN_ID
  ) {
    super(jsonRpcUrl, chainID);
    this.faucetCaller = axios.create({
      url: faucetUrl,
      headers: { 'Content-Type': 'application/json' },
      transformRequest: JSONStringify,
      transformResponse: JSONParse,
    });
  }

  public async mint(
    authKeyHex: string,
    amount: BigInt,
    currency: Currency
  ): Promise<bigint> {
    try {
      const response = await this.faucetCaller.request<number>({
        method: 'post',
        params: {
          auth_key: authKeyHex,
          amount: amount,
          currency_code: currency,
        },
      });

      return BigInt(response.data);
    } catch (e) {
      if (e.isAxiosError) {
        if (e.response) {
          throw new FaucetTransportError(e.message);
        }
        throw new FaucetNetworkError(e.message);
      }
      throw e;
    }
  }
}
