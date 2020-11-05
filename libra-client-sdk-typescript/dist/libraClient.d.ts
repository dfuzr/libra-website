import { Bytes } from './utils/bytes';
import { LibraLedger } from './interfaces/libraLedger';
import { Account, CurrencyInfo, Metadata, Transaction, Event } from './interfaces/libra-jsonrpc-types';
export default class LibraClient {
    static readonly STALE_TIMESTAMP_VERSION_THRESHOLD: BigInt;
    static readonly STALE_TIMESTAMP_USECS_THRESHOLD: BigInt;
    protected readonly chainID: number;
    protected lastSeenLedger: LibraLedger | undefined;
    private readonly jsonRpc;
    constructor(jsonRpcUrl: string, chainID: number);
    private jsonRpcCall;
    private validateChainID;
    private validateLedger;
    getTransactions(fromVersion: BigInt, limit: number, includeEvents: boolean): Promise<Transaction[]>;
    getAccount(address: Bytes): Promise<Account | null>;
    getAccountTransaction(address: Bytes, sequenceNumber: BigInt, includeEvents: boolean): Promise<Transaction | null>;
    getAccountTransactions(address: Bytes, fromVersion: BigInt, limit: number, includeEvents: boolean): Promise<Transaction[]>;
    getMetadata(version?: BigInt): Promise<Metadata>;
    getCurrencies(): Promise<CurrencyInfo[]>;
    getEvents(eventsKey: string, start: BigInt, limit: number): Promise<Event[]>;
    waitForTransaction(senderAddress: Bytes, sequenceNumber: BigInt, includeEvents: boolean, transactionHash: string, expirationTimeSecs: BigInt, timeoutMillis?: number): Promise<Transaction>;
    waitForTransactionUnsafe(senderAddress: Bytes, sequenceNumber: BigInt, includeEvents: boolean, timeoutMillis?: number): Promise<Transaction>;
    submitRawSignedTransaction(signedTransactionHex: string): Promise<void>;
}
