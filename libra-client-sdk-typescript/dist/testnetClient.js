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
import LibraClient from './libraClient';
import { FaucetNetworkError, FaucetTransportError } from './errors';
import { JSONParse, JSONStringify } from './jsonRpc/client';
export default class TestnetClient extends LibraClient {
    constructor(faucetUrl = TestnetClient.TESTNET_FAUCET_URL, jsonRpcUrl = TestnetClient.TESTNET_JSONRPC_URL, chainID = TestnetClient.TESTNET_CHAIN_ID) {
        super(jsonRpcUrl, chainID);
        this.faucetCaller = axios.create({
            url: faucetUrl,
            headers: { 'Content-Type': 'application/json' },
            transformRequest: JSONStringify,
            transformResponse: JSONParse,
        });
    }
    mint(authKeyHex, amount, currency) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.faucetCaller.request({
                    method: 'post',
                    params: {
                        auth_key: authKeyHex,
                        amount: amount,
                        currency_code: currency,
                    },
                });
                return BigInt(response.data);
            }
            catch (e) {
                if (e.isAxiosError) {
                    if (e.response) {
                        throw new FaucetTransportError(e.message);
                    }
                    throw new FaucetNetworkError(e.message);
                }
                throw e;
            }
        });
    }
}
TestnetClient.TESTNET_JSONRPC_URL = 'https://testnet.libra.org/v1';
TestnetClient.TESTNET_FAUCET_URL = 'https://testnet.libra.org/mint';
TestnetClient.TESTNET_DESIGNATED_DEALER = '000000000000000000000000000000dd';
TestnetClient.TESTNET_CHAIN_ID = 2;
