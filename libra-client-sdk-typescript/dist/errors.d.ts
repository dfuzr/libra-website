import { JsonRpcErrorPayload } from './jsonRpc/types';
import { Bytes } from './utils/bytes';
import { Transaction } from './interfaces/libra-jsonrpc-types';
import { LibraLedger } from './interfaces/libraLedger';
export declare class LibraError extends Error {
}
export declare class AccountTransactionNotFound extends LibraError {
    readonly address: Bytes;
    readonly sequenceNumber: BigInt;
    constructor(address: Bytes, sequenceNumber: BigInt);
}
export declare class TransactionExecutionFailure extends LibraError {
    readonly vmStatusType: string;
    constructor(vmStatusType: string);
}
export declare class TransactionExpiredError extends LibraError {
    constructor(txTimestamp: BigInt, currentTimestamp: BigInt);
}
export declare class TransactionSequenceNumberConflictError extends LibraError {
    readonly txn: Transaction;
    readonly expectedSequenceNumber: BigInt;
    constructor(txn: Transaction, expectedSequenceNumber: BigInt);
}
export declare class FaucetTransportError extends LibraError {
    constructor(message: string);
}
export declare class FaucetNetworkError extends LibraError {
    constructor(message: string);
}
export declare class LibraChainIDMismatchError extends LibraError {
    constructor(expected: number, current: number);
}
export declare class LibraNetworkStaleError extends LibraError {
    constructor(lastSeen: LibraLedger, current: LibraLedger);
}
export declare class LibraClientError extends LibraError {
    error: JsonRpcErrorPayload;
    constructor(error: JsonRpcErrorPayload);
}
export declare class UnknownServerError extends LibraClientError {
    static code: number;
}
export declare class VmValidationError extends LibraClientError {
    static code: number;
}
export declare class VmVerificationError extends LibraClientError {
    static code: number;
}
export declare class VmInvariantViolationError extends LibraClientError {
    static code: number;
}
export declare class VmDeserializationError extends LibraClientError {
    static code: number;
}
export declare class VmExecutionError extends LibraClientError {
    static code: number;
}
export declare class VmUnknownError extends LibraClientError {
    static code: number;
}
export declare class MempoolInvalidSeqNumber extends LibraClientError {
    static code: number;
}
export declare class MempoolIsFull extends LibraClientError {
    static code: number;
}
export declare class MempoolTooManyTransactions extends LibraClientError {
    static code: number;
}
export declare class MempoolInvalidUpdate extends LibraClientError {
    static code: number;
}
export declare class MempoolVmError extends LibraClientError {
    static code: number;
}
export declare class MempoolUnknownError extends LibraClientError {
    static code: number;
}
export declare class InvalidRequestError extends LibraClientError {
    static code: number;
}
export declare class MethodNotFoundError extends LibraClientError {
    static code: number;
}
export declare class InvalidParamsError extends LibraClientError {
    static code: number;
}
export declare class InvalidFormatError extends LibraClientError {
    static code: number;
}
export declare class ParseError extends LibraClientError {
    static code: number;
}
export declare const LibraClientErrorsMap: {
    [key: number]: typeof LibraClientError;
};
export declare function getErrorFromErrorPayload(error: JsonRpcErrorPayload): Error;
