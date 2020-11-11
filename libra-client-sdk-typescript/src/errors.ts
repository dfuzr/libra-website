import { JsonRpcErrorPayload } from './jsonRpc/types';
import { Bytes } from './utils/bytes';
import { Transaction } from './interfaces/libra-jsonrpc-types';
import { LibraLedger } from './interfaces/libraLedger';

export class LibraError extends Error {}

export class AccountTransactionNotFound extends LibraError {
  constructor(
    public readonly address: Bytes,
    public readonly sequenceNumber: BigInt
  ) {
    super(
      `couldn't find transaction by sequence number ${sequenceNumber} for account ${address}`
    );
  }
}

export class TransactionExecutionFailure extends LibraError {
  constructor(public readonly vmStatusType: string) {
    super(`transaction execution failed with status: ${vmStatusType}`);
  }
}

export class TransactionExpiredError extends LibraError {
  constructor(txTimestamp: BigInt, currentTimestamp: BigInt) {
    super(
      `transaction expired. tx timestamp ${txTimestamp}, current timestamp ${currentTimestamp}`
    );
  }
}

export class TransactionSequenceNumberConflictError extends LibraError {
  constructor(
    public readonly txn: Transaction,
    public readonly expectedSequenceNumber: BigInt
  ) {
    super(
      `transaction sequence number conflict. expected ${expectedSequenceNumber}`
    );
  }
}

export class FaucetTransportError extends LibraError {
  constructor(message: string) {
    super(`Faucet transport error caused by: ${message}`);
  }
}

export class FaucetNetworkError extends LibraError {
  constructor(message: string) {
    super(`Faucet network error caused by: ${message}`);
  }
}

export class LibraChainIDMismatchError extends LibraError {
  constructor(expected: number, current: number) {
    super(`Chain ID mismatch. expected ${expected}, got ${current}`);
  }
}

export class LibraNetworkStaleError extends LibraError {
  constructor(lastSeen: LibraLedger, current: LibraLedger) {
    super(
      `Current ledger state stale:\\n current version: ${current.version} last seen version: ${lastSeen.version} current timestamp usecs: ${current.timestampUsecs} last seen timestamp usecs: ${lastSeen.timestampUsecs}`
    );
  }
}

export class LibraClientError extends LibraError {
  constructor(public error: JsonRpcErrorPayload) {
    super(`Request to Libra failed with error code: ${error.code}`);
  }
}

/// Custom JSON RPC server error codes
/// Ranges from -32000 to -32099 - see `https://www.jsonrpc.org/specification#error_object` for details

export class UnknownServerError extends LibraClientError {
  static code = -32000;
}

// VM errors - see `vm_status.rs` for specs
export class VmValidationError extends LibraClientError {
  static code = -32001;
}
export class VmVerificationError extends LibraClientError {
  static code = -32002;
}
export class VmInvariantViolationError extends LibraClientError {
  static code = -32003;
}
export class VmDeserializationError extends LibraClientError {
  static code = -32004;
}
export class VmExecutionError extends LibraClientError {
  static code = -32005;
}
export class VmUnknownError extends LibraClientError {
  static code = -32006;
}

// Mempool errors - see `MempoolStatusCode` for specs
export class MempoolInvalidSeqNumber extends LibraClientError {
  static code = -32007;
}
export class MempoolIsFull extends LibraClientError {
  static code = -32008;
}
export class MempoolTooManyTransactions extends LibraClientError {
  static code = -32009;
}
export class MempoolInvalidUpdate extends LibraClientError {
  static code = -32010;
}
export class MempoolVmError extends LibraClientError {
  static code = -32011;
}
export class MempoolUnknownError extends LibraClientError {
  static code = -32012;
}

/// JSON RPC server error codes for invalid request
export class InvalidRequestError extends LibraClientError {
  static code = -32600;
}
export class MethodNotFoundError extends LibraClientError {
  static code = -32601;
}
export class InvalidParamsError extends LibraClientError {
  static code = -32602;
}
export class InvalidFormatError extends LibraClientError {
  static code = -32604;
}
export class ParseError extends LibraClientError {
  static code = -32700;
}

export const LibraClientErrorsMap: {
  [key: number]: typeof LibraClientError;
} = {
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

export function getErrorFromErrorPayload(error: JsonRpcErrorPayload): Error {
  if (error.code in LibraClientErrorsMap) {
    return new LibraClientErrorsMap[error.code](error);
  }
  return new UnknownServerError(error);
}
