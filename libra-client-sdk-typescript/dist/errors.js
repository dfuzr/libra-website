export class LibraError extends Error {
}
export class AccountTransactionNotFound extends LibraError {
    constructor(address, sequenceNumber) {
        super(`couldn't find transaction by sequence number ${sequenceNumber} for account ${address}`);
        this.address = address;
        this.sequenceNumber = sequenceNumber;
    }
}
export class TransactionExecutionFailure extends LibraError {
    constructor(vmStatusType) {
        super(`transaction execution failed with status: ${vmStatusType}`);
        this.vmStatusType = vmStatusType;
    }
}
export class TransactionExpiredError extends LibraError {
    constructor(txTimestamp, currentTimestamp) {
        super(`transaction expired. tx timestamp ${txTimestamp}, current timestamp ${currentTimestamp}`);
    }
}
export class TransactionSequenceNumberConflictError extends LibraError {
    constructor(txn, expectedSequenceNumber) {
        super(`transaction sequence number conflict. expected ${expectedSequenceNumber}`);
        this.txn = txn;
        this.expectedSequenceNumber = expectedSequenceNumber;
    }
}
export class FaucetTransportError extends LibraError {
    constructor(message) {
        super(`Faucet transport error caused by: ${message}`);
    }
}
export class FaucetNetworkError extends LibraError {
    constructor(message) {
        super(`Faucet network error caused by: ${message}`);
    }
}
export class LibraChainIDMismatchError extends LibraError {
    constructor(expected, current) {
        super(`Chain ID mismatch. expected ${expected}, got ${current}`);
    }
}
export class LibraNetworkStaleError extends LibraError {
    constructor(lastSeen, current) {
        super(`Current ledger state stale:\\n current version: ${current.version} last seen version: ${lastSeen.version} current timestamp usecs: ${current.timestampUsecs} last seen timestamp usecs: ${lastSeen.timestampUsecs}`);
    }
}
export class LibraClientError extends LibraError {
    constructor(error) {
        super(`Request to Libra failed with error code: ${error.code}`);
        this.error = error;
    }
}
/// Custom JSON RPC server error codes
/// Ranges from -32000 to -32099 - see `https://www.jsonrpc.org/specification#error_object` for details
export class UnknownServerError extends LibraClientError {
}
UnknownServerError.code = -32000;
// VM errors - see `vm_status.rs` for specs
export class VmValidationError extends LibraClientError {
}
VmValidationError.code = -32001;
export class VmVerificationError extends LibraClientError {
}
VmVerificationError.code = -32002;
export class VmInvariantViolationError extends LibraClientError {
}
VmInvariantViolationError.code = -32003;
export class VmDeserializationError extends LibraClientError {
}
VmDeserializationError.code = -32004;
export class VmExecutionError extends LibraClientError {
}
VmExecutionError.code = -32005;
export class VmUnknownError extends LibraClientError {
}
VmUnknownError.code = -32006;
// Mempool errors - see `MempoolStatusCode` for specs
export class MempoolInvalidSeqNumber extends LibraClientError {
}
MempoolInvalidSeqNumber.code = -32007;
export class MempoolIsFull extends LibraClientError {
}
MempoolIsFull.code = -32008;
export class MempoolTooManyTransactions extends LibraClientError {
}
MempoolTooManyTransactions.code = -32009;
export class MempoolInvalidUpdate extends LibraClientError {
}
MempoolInvalidUpdate.code = -32010;
export class MempoolVmError extends LibraClientError {
}
MempoolVmError.code = -32011;
export class MempoolUnknownError extends LibraClientError {
}
MempoolUnknownError.code = -32012;
/// JSON RPC server error codes for invalid request
export class InvalidRequestError extends LibraClientError {
}
InvalidRequestError.code = -32600;
export class MethodNotFoundError extends LibraClientError {
}
MethodNotFoundError.code = -32601;
export class InvalidParamsError extends LibraClientError {
}
InvalidParamsError.code = -32602;
export class InvalidFormatError extends LibraClientError {
}
InvalidFormatError.code = -32604;
export class ParseError extends LibraClientError {
}
ParseError.code = -32700;
export const LibraClientErrorsMap = {
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
export function getErrorFromErrorPayload(error) {
    if (error.code in LibraClientErrorsMap) {
        return new LibraClientErrorsMap[error.code](error);
    }
    return new UnknownServerError(error);
}
