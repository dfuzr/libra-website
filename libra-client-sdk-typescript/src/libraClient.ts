import JsonRpcClient from './jsonRpc/client';
import {
  GetAccountStateMethod,
  GetAccountTransactionMethod,
  GetAccountTransactionsMethod,
  GetCurrenciesMethod,
  GetEventsMethod,
  GetMetadataMethod,
  GetTransactionsMethod,
  LibraJsonRPCMethod,
  SubmitMethod,
} from './interfaces/jsonRpcMethods';
import {
  AccountTransactionNotFound,
  getErrorFromErrorPayload,
  LibraChainIDMismatchError,
  LibraNetworkStaleError,
  TransactionExecutionFailure,
  TransactionExpiredError,
  TransactionSequenceNumberConflictError,
} from './errors';
import { JsonRpcError } from './jsonRpc/errors';
import sleep from './utils/sleep';
import { Bytes, bytesToHexString } from './utils/bytes';
import { LibraLedger } from './interfaces/libraLedger';
import {
  Account,
  CurrencyInfo,
  Metadata,
  Transaction,
  Event,
} from './interfaces/libra-jsonrpc-types';

export default class LibraClient {
  public static readonly STALE_TIMESTAMP_VERSION_THRESHOLD: BigInt = BigInt(30);
  public static readonly STALE_TIMESTAMP_USECS_THRESHOLD: BigInt = BigInt(
    10000000
  );

  protected readonly chainID: number;
  protected lastSeenLedger: LibraLedger | undefined;
  private readonly jsonRpc: JsonRpcClient;

  constructor(jsonRpcUrl: string, chainID: number) {
    this.chainID = chainID;
    this.jsonRpc = new JsonRpcClient(jsonRpcUrl);
  }

  private async jsonRpcCall<M extends LibraJsonRPCMethod<unknown>>(
    method: M['method'],
    params: M['params']
  ): Promise<M['response']['result']> {
    try {
      const res = await this.jsonRpc.call<M>(method, params);

      this.validateChainID(res.libra_chain_id);
      this.validateLedger({
        version: BigInt(res.libra_ledger_version),
        timestampUsecs: BigInt(res.libra_ledger_timestampusec),
      });

      return res.result;
    } catch (e) {
      if (e instanceof JsonRpcError) {
        throw getErrorFromErrorPayload(e.error);
      }
      throw e;
    }
  }

  private validateChainID(chainId: number): void {
    if (chainId !== this.chainID) {
      throw new LibraChainIDMismatchError(this.chainID, chainId);
    }
  }

  private validateLedger(ledger: LibraLedger): void {
    const lastSeen = this.lastSeenLedger;
    if (
      lastSeen &&
      (BigInt(ledger.version) +
        BigInt(LibraClient.STALE_TIMESTAMP_VERSION_THRESHOLD) <
        lastSeen.version ||
        BigInt(ledger.timestampUsecs) +
          BigInt(LibraClient.STALE_TIMESTAMP_USECS_THRESHOLD) <
          lastSeen.timestampUsecs)
    ) {
      throw new LibraNetworkStaleError(lastSeen, ledger);
    }
    this.lastSeenLedger = ledger;
  }

  public async getTransactions(
    fromVersion: BigInt,
    limit: number,
    includeEvents: boolean
  ): Promise<Transaction[]> {
    return this.jsonRpcCall<GetTransactionsMethod>('get_transactions', [
      fromVersion,
      limit,
      includeEvents,
    ]);
  }

  public async getAccount(address: Bytes): Promise<Account | null> {
    return this.jsonRpcCall<GetAccountStateMethod>('get_account', [
      bytesToHexString(address),
    ]);
  }

  public async getAccountTransaction(
    address: Bytes,
    sequenceNumber: BigInt,
    includeEvents: boolean
  ): Promise<Transaction | null> {
    return this.jsonRpcCall<GetAccountTransactionMethod>(
      'get_account_transaction',
      [bytesToHexString(address), sequenceNumber, includeEvents]
    );
  }

  public async getAccountTransactions(
    address: Bytes,
    fromVersion: BigInt,
    limit: number,
    includeEvents: boolean
  ): Promise<Transaction[]> {
    return this.jsonRpcCall<GetAccountTransactionsMethod>(
      'get_account_transactions',
      [bytesToHexString(address), fromVersion, limit, includeEvents]
    );
  }

  public async getMetadata(version?: BigInt): Promise<Metadata> {
    return this.jsonRpcCall<GetMetadataMethod>('get_metadata', [version]);
  }

  public async getCurrencies(): Promise<CurrencyInfo[]> {
    return this.jsonRpcCall<GetCurrenciesMethod>('get_currencies', []);
  }

  public async getEvents(
    eventsKey: string,
    start: BigInt,
    limit: number
  ): Promise<Event[]> {
    return this.jsonRpcCall<GetEventsMethod>('get_events', [
      eventsKey,
      start,
      limit,
    ]);
  }

  public async waitForTransaction(
    senderAddress: Bytes,
    sequenceNumber: BigInt,
    includeEvents: boolean,
    transactionHash: string,
    expirationTimeSecs: BigInt,
    timeoutMillis = 10000
  ): Promise<Transaction> {
    const transaction = await this.waitForTransactionUnsafe(
      senderAddress,
      sequenceNumber,
      includeEvents,
      timeoutMillis
    );

    if (transaction.hash !== transactionHash) {
      throw new TransactionSequenceNumberConflictError(
        transaction,
        sequenceNumber
      );
    }

    if (
      BigInt(transaction.transaction?.expiration_timestamp_secs) * BigInt(1e6) <
      this.lastSeenLedger!.timestampUsecs
    ) {
      throw new TransactionExpiredError(
        BigInt(transaction.transaction?.expiration_timestamp_secs),
        this.lastSeenLedger!.timestampUsecs
      );
    }

    if (transaction.vm_status?.type !== 'executed') {
      const vmStatusType = transaction?.vm_status?.type || 'unknown';
      throw new TransactionExecutionFailure(vmStatusType);
    }

    return transaction;
  }

  public async waitForTransactionUnsafe(
    senderAddress: Bytes,
    sequenceNumber: BigInt,
    includeEvents: boolean,
    timeoutMillis = 10000
  ): Promise<Transaction> {
    const step = 100;
    for (let millis = 0; millis < timeoutMillis; millis += step) {
      const transaction = await this.getAccountTransaction(
        senderAddress,
        sequenceNumber,
        includeEvents
      );
      if (transaction) {
        return transaction;
      }
      await sleep(step);
    }
    throw new AccountTransactionNotFound(senderAddress, sequenceNumber);
  }

  public async submitRawSignedTransaction(
    signedTransactionHex: string
  ): Promise<void> {
    await this.jsonRpcCall<SubmitMethod>('submit', [
      signedTransactionHex.toUpperCase(),
    ]);
  }
}
