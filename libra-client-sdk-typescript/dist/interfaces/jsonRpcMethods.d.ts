import { JsonRpcMethod } from '../jsonRpc/types';
import { CurrencyInfo, Metadata, Transaction, Account, Event } from './libra-jsonrpc-types';
export interface LibraJsonRPCMethod<R> extends JsonRpcMethod {
    response: {
        result: R;
        libra_chain_id: number;
        libra_ledger_timestampusec: BigInt;
        libra_ledger_version: BigInt;
    };
}
export interface GetTransactionsMethod extends LibraJsonRPCMethod<Transaction[]> {
    method: 'get_transactions';
    params: [BigInt, number, boolean];
}
export interface GetAccountStateMethod extends LibraJsonRPCMethod<Account | null> {
    method: 'get_account';
    params: [string];
}
export interface GetAccountTransactionMethod extends LibraJsonRPCMethod<Transaction> {
    method: 'get_account_transaction';
    params: [string, BigInt, boolean];
}
export interface GetAccountTransactionsMethod extends LibraJsonRPCMethod<Transaction[]> {
    method: 'get_account_transactions';
    params: [string, BigInt, number, boolean];
}
export interface GetMetadataMethod extends LibraJsonRPCMethod<Metadata> {
    method: 'get_metadata';
    params: [BigInt | undefined];
}
export interface GetCurrenciesMethod extends LibraJsonRPCMethod<CurrencyInfo[]> {
    method: 'get_currencies';
    params: [];
}
export interface GetEventsMethod extends LibraJsonRPCMethod<Event[]> {
    method: 'get_events';
    params: [string, BigInt, number];
}
export interface SubmitMethod extends LibraJsonRPCMethod<void> {
    method: 'submit';
    params: [string];
}
