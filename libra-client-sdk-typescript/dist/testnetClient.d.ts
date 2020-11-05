import LibraClient from './libraClient';
import { Currency } from './interfaces/types';
export default class TestnetClient extends LibraClient {
    static readonly TESTNET_JSONRPC_URL = "https://testnet.libra.org/v1";
    static readonly TESTNET_FAUCET_URL = "https://testnet.libra.org/mint";
    static readonly TESTNET_DESIGNATED_DEALER = "000000000000000000000000000000dd";
    static readonly TESTNET_CHAIN_ID = 2;
    private readonly faucetCaller;
    constructor(faucetUrl?: string, jsonRpcUrl?: string, chainID?: number);
    mint(authKeyHex: string, amount: BigInt, currency: Currency): Promise<bigint>;
}
