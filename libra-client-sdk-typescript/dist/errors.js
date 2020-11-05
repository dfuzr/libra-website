"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorFromErrorPayload = exports.LibraClientErrorsMap = exports.ParseError = exports.InvalidFormatError = exports.InvalidParamsError = exports.MethodNotFoundError = exports.InvalidRequestError = exports.MempoolUnknownError = exports.MempoolVmError = exports.MempoolInvalidUpdate = exports.MempoolTooManyTransactions = exports.MempoolIsFull = exports.MempoolInvalidSeqNumber = exports.VmUnknownError = exports.VmExecutionError = exports.VmDeserializationError = exports.VmInvariantViolationError = exports.VmVerificationError = exports.VmValidationError = exports.UnknownServerError = exports.LibraClientError = exports.LibraNetworkStaleError = exports.LibraChainIDMismatchError = exports.FaucetNetworkError = exports.FaucetTransportError = exports.TransactionSequenceNumberConflictError = exports.TransactionExpiredError = exports.TransactionExecutionFailure = exports.AccountTransactionNotFound = exports.LibraError = void 0;
class LibraError extends Error {
}
exports.LibraError = LibraError;
class AccountTransactionNotFound extends LibraError {
    constructor(address, sequenceNumber) {
        super(`couldn't find transaction by sequence number ${sequenceNumber} for account ${address}`);
        this.address = address;
        this.sequenceNumber = sequenceNumber;
    }
}
exports.AccountTransactionNotFound = AccountTransactionNotFound;
class TransactionExecutionFailure extends LibraError {
    constructor(vmStatusType) {
        super(`transaction execution failed with status: ${vmStatusType}`);
        this.vmStatusType = vmStatusType;
    }
}
exports.TransactionExecutionFailure = TransactionExecutionFailure;
class TransactionExpiredError extends LibraError {
    constructor(txTimestamp, currentTimestamp) {
        super(`transaction expired. tx timestamp ${txTimestamp}, current timestamp ${currentTimestamp}`);
    }
}
exports.TransactionExpiredError = TransactionExpiredError;
class TransactionSequenceNumberConflictError extends LibraError {
    constructor(txn, expectedSequenceNumber) {
        super(`transaction sequence number conflict. expected ${expectedSequenceNumber}`);
        this.txn = txn;
        this.expectedSequenceNumber = expectedSequenceNumber;
    }
}
exports.TransactionSequenceNumberConflictError = TransactionSequenceNumberConflictError;
class FaucetTransportError extends LibraError {
    constructor(message) {
        super(`Faucet transport error caused by: ${message}`);
    }
}
exports.FaucetTransportError = FaucetTransportError;
class FaucetNetworkError extends LibraError {
    constructor(message) {
        super(`Faucet network error caused by: ${message}`);
    }
}
exports.FaucetNetworkError = FaucetNetworkError;
class LibraChainIDMismatchError extends LibraError {
    constructor(expected, current) {
        super(`Chain ID mismatch. expected ${expected}, got ${current}`);
    }
}
exports.LibraChainIDMismatchError = LibraChainIDMismatchError;
class LibraNetworkStaleError extends LibraError {
    constructor(lastSeen, current) {
        super(`Current ledger state stale:\\n current version: ${current.version} last seen version: ${lastSeen.version} current timestamp usecs: ${current.timestampUsecs} last seen timestamp usecs: ${lastSeen.timestampUsecs}`);
    }
}
exports.LibraNetworkStaleError = LibraNetworkStaleError;
class LibraClientError extends LibraError {
    constructor(error) {
        super(`Request to Libra failed with error code: ${error.code}`);
        this.error = error;
    }
}
exports.LibraClientError = LibraClientError;
/// Custom JSON RPC server error codes
/// Ranges from -32000 to -32099 - see `https://www.jsonrpc.org/specification#error_object` for details
class UnknownServerError extends LibraClientError {
}
exports.UnknownServerError = UnknownServerError;
UnknownServerError.code = -32000;
// VM errors - see `vm_status.rs` for specs
class VmValidationError extends LibraClientError {
}
exports.VmValidationError = VmValidationError;
VmValidationError.code = -32001;
class VmVerificationError extends LibraClientError {
}
exports.VmVerificationError = VmVerificationError;
VmVerificationError.code = -32002;
class VmInvariantViolationError extends LibraClientError {
}
exports.VmInvariantViolationError = VmInvariantViolationError;
VmInvariantViolationError.code = -32003;
class VmDeserializationError extends LibraClientError {
}
exports.VmDeserializationError = VmDeserializationError;
VmDeserializationError.code = -32004;
class VmExecutionError extends LibraClientError {
}
exports.VmExecutionError = VmExecutionError;
VmExecutionError.code = -32005;
class VmUnknownError extends LibraClientError {
}
exports.VmUnknownError = VmUnknownError;
VmUnknownError.code = -32006;
// Mempool errors - see `MempoolStatusCode` for specs
class MempoolInvalidSeqNumber extends LibraClientError {
}
exports.MempoolInvalidSeqNumber = MempoolInvalidSeqNumber;
MempoolInvalidSeqNumber.code = -32007;
class MempoolIsFull extends LibraClientError {
}
exports.MempoolIsFull = MempoolIsFull;
MempoolIsFull.code = -32008;
class MempoolTooManyTransactions extends LibraClientError {
}
exports.MempoolTooManyTransactions = MempoolTooManyTransactions;
MempoolTooManyTransactions.code = -32009;
class MempoolInvalidUpdate extends LibraClientError {
}
exports.MempoolInvalidUpdate = MempoolInvalidUpdate;
MempoolInvalidUpdate.code = -32010;
class MempoolVmError extends LibraClientError {
}
exports.MempoolVmError = MempoolVmError;
MempoolVmError.code = -32011;
class MempoolUnknownError extends LibraClientError {
}
exports.MempoolUnknownError = MempoolUnknownError;
MempoolUnknownError.code = -32012;
/// JSON RPC server error codes for invalid request
class InvalidRequestError extends LibraClientError {
}
exports.InvalidRequestError = InvalidRequestError;
InvalidRequestError.code = -32600;
class MethodNotFoundError extends LibraClientError {
}
exports.MethodNotFoundError = MethodNotFoundError;
MethodNotFoundError.code = -32601;
class InvalidParamsError extends LibraClientError {
}
exports.InvalidParamsError = InvalidParamsError;
InvalidParamsError.code = -32602;
class InvalidFormatError extends LibraClientError {
}
exports.InvalidFormatError = InvalidFormatError;
InvalidFormatError.code = -32604;
class ParseError extends LibraClientError {
}
exports.ParseError = ParseError;
ParseError.code = -32700;
exports.LibraClientErrorsMap = {
    [UnknownServerError.code]: UnknownServerError,
    [VmValidationError.code]: VmValidationError,
    [VmVerificationError.code]: VmVerificationError,
    [VmInvariantViolationError.code]: VmInvariantViolationError,
    [VmDeserializationError.code]: VmDeserializationError,
    [VmExecutionError.code]: VmExecutionError,
    [VmUnknownError.code]: VmUnknownError,
    [MempoolInvalidSeqNumber.code]: MempoolInvalidSeqNumber,
    [MempoolIsFull.code]: MempoolIsFull,
    [MempoolTooManyTransactions.code]: MempoolTooManyTransactions,
    [MempoolInvalidUpdate.code]: MempoolInvalidUpdate,
    [MempoolVmError.code]: MempoolVmError,
    [MempoolUnknownError.code]: MempoolUnknownError,
    [InvalidRequestError.code]: InvalidRequestError,
    [MethodNotFoundError.code]: MethodNotFoundError,
    [InvalidParamsError.code]: InvalidParamsError,
    [InvalidFormatError.code]: InvalidFormatError,
    [ParseError.code]: ParseError,
};
function getErrorFromErrorPayload(error) {
    if (error.code in exports.LibraClientErrorsMap) {
        return new exports.LibraClientErrorsMap[error.code](error);
    }
    return new UnknownServerError(error);
}
exports.getErrorFromErrorPayload = getErrorFromErrorPayload;
