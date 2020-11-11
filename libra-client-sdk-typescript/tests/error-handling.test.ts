import {
  getErrorFromErrorPayload,
  InvalidFormatError,
  InvalidParamsError,
  InvalidRequestError,
  MempoolInvalidSeqNumber,
  MempoolInvalidUpdate,
  MempoolIsFull,
  MempoolTooManyTransactions,
  MempoolUnknownError,
  MempoolVmError,
  MethodNotFoundError,
  ParseError,
  UnknownServerError,
  VmDeserializationError,
  VmExecutionError,
  VmInvariantViolationError,
  VmUnknownError,
  VmValidationError,
  VmVerificationError,
} from '../src';

jest.mock('../src/jsonRpc/client');

describe('Error handling', () => {
  const testCases = [
    UnknownServerError,
    VmValidationError,
    VmVerificationError,
    VmInvariantViolationError,
    VmDeserializationError,
    VmExecutionError,
    VmUnknownError,
    MempoolUnknownError,
    MempoolIsFull,
    MempoolInvalidSeqNumber,
    MempoolTooManyTransactions,
    MempoolInvalidUpdate,
    MempoolVmError,
    MempoolUnknownError,
    InvalidRequestError,
    MethodNotFoundError,
    InvalidParamsError,
    InvalidFormatError,
    ParseError,
  ];

  describe('resolves proper error class by payload code', () => {
    testCases.forEach((testCase) => {
      it(testCase.name, () => {
        expect(
          getErrorFromErrorPayload({
            code: testCase.code,
            message: 'Oops',
            data: null,
          })
        ).toBeInstanceOf(testCase);
      });
    });

    it('default error', () => {
      expect(
        getErrorFromErrorPayload({
          code: 0,
          message: 'Oops',
          data: null,
        })
      ).toBeInstanceOf(UnknownServerError);
    });
  });
});
