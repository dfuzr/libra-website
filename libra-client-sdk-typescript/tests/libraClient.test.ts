import LibraClient from '../src/libraClient';
import JsonRpcClient from '../src/jsonRpc/client';
import {
  generateAccount,
  generateCurrencyInfo,
  generateEvents,
  generateMetadata,
  generateTransactions,
  libraJsonRpcResponse,
} from './helpers';
import {
  GetAccountStateMethod,
  GetAccountTransactionMethod,
  GetAccountTransactionsMethod,
  GetCurrenciesMethod,
  GetEventsMethod,
  GetMetadataMethod,
  GetTransactionsMethod,
  SubmitMethod,
} from '../src/interfaces/jsonRpcMethods';
import { JsonRpcError } from '../src/jsonRpc/errors';
import {
  AccountTransactionNotFound,
  InvalidRequestError,
  LibraChainIDMismatchError,
  LibraNetworkStaleError,
  TransactionExecutionFailure,
} from '../src';
import TestnetClient from '../src/testnetClient';

const testnetJsonRPCUrl = TestnetClient.TESTNET_JSONRPC_URL;
const testnetChainID = TestnetClient.TESTNET_CHAIN_ID;

jest.mock('../src/jsonRpc/client');
jest.mock('../src/utils/sleep');

describe('Libra Client', () => {
  const mockedJsonRpcClient = <jest.MockedClass<typeof JsonRpcClient>>(
    JsonRpcClient
  );

  beforeEach(() => {
    mockedJsonRpcClient.prototype.call.mockReset();
  });

  describe('getTransactions', () => {
    it('should have correct payload in the JSON RPC request without events', async () => {
      const expectedTxs = generateTransactions(2);

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedTxs)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getTransactions(BigInt(0), 2, false);

      expect(result).toHaveLength(2);
      expect(result).toStrictEqual(expectedTxs);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [GetTransactionsMethod['method'], GetTransactionsMethod['params']]
      >('get_transactions', [BigInt(0), 2, false]);
    });

    it('should have correct payload in the JSON RPC request with events', async () => {
      const expectedTxs = generateTransactions(3);

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedTxs)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getTransactions(BigInt(3), 3, true);

      expect(result).toHaveLength(3);
      expect(result).toStrictEqual(expectedTxs);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [GetTransactionsMethod['method'], GetTransactionsMethod['params']]
      >('get_transactions', [BigInt(3), 3, true]);
    });

    it('should throw correct exception if request failed', async () => {
      const jsonRpcError = new JsonRpcError({
        code: InvalidRequestError.code,
        message: 'something is wrong',
        data: null,
      });

      mockedJsonRpcClient.prototype.call.mockRejectedValue(jsonRpcError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.getTransactions(BigInt(3), 3, false)
      ).rejects.toBeInstanceOf(InvalidRequestError);
    });

    it('should pass on unknown errors', async () => {
      const expectedError = new Error();

      mockedJsonRpcClient.prototype.call.mockRejectedValue(expectedError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.getTransactions(BigInt(3), 3, false)
      ).rejects.toBe(expectedError);
    });
  });

  describe('getAccount', () => {
    it('should have correct payload in the JSON RPC request', async () => {
      const expectedAccount = generateAccount();

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedAccount)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getAccount('address');

      expect(result).toStrictEqual(expectedAccount);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [GetAccountStateMethod['method'], GetAccountStateMethod['params']]
      >('get_account', ['address']);
    });

    it('should throw correct exception if request failed', async () => {
      const jsonRpcError = new JsonRpcError({
        code: InvalidRequestError.code,
        message: 'something is wrong',
        data: null,
      });

      mockedJsonRpcClient.prototype.call.mockRejectedValue(jsonRpcError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(libraClient.getAccount('address')).rejects.toBeInstanceOf(
        InvalidRequestError
      );
    });

    it('should pass on unknown errors', async () => {
      const expectedError = new Error();

      mockedJsonRpcClient.prototype.call.mockRejectedValue(expectedError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(libraClient.getAccount('address')).rejects.toBe(
        expectedError
      );
    });
  });

  describe('getAccountTransaction', () => {
    it('should have correct payload in the JSON RPC request without events', async () => {
      const [expectedTx] = generateTransactions(1);

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedTx)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getAccountTransaction(
        'address',
        BigInt(2),
        false
      );

      expect(result).toStrictEqual(expectedTx);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [
          GetAccountTransactionMethod['method'],
          GetAccountTransactionMethod['params']
        ]
      >('get_account_transaction', ['address', BigInt(2), false]);
    });

    it('should have correct payload in the JSON RPC request with events', async () => {
      const [expectedTx] = generateTransactions(1);

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedTx)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getAccountTransaction(
        'address',
        BigInt(2),
        true
      );

      expect(result).toStrictEqual(expectedTx);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [
          GetAccountTransactionMethod['method'],
          GetAccountTransactionMethod['params']
        ]
      >('get_account_transaction', ['address', BigInt(2), true]);
    });

    it('should throw correct exception if request failed', async () => {
      const jsonRpcError = new JsonRpcError({
        code: InvalidRequestError.code,
        message: 'something is wrong',
        data: null,
      });

      mockedJsonRpcClient.prototype.call.mockRejectedValue(jsonRpcError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.getAccountTransaction('address', BigInt(2), true)
      ).rejects.toBeInstanceOf(InvalidRequestError);
    });

    it('should pass on unknown errors', async () => {
      const expectedError = new Error();

      mockedJsonRpcClient.prototype.call.mockRejectedValue(expectedError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.getAccountTransaction('address', BigInt(2), true)
      ).rejects.toBe(expectedError);
    });
  });

  describe('getAccountTransactions', () => {
    it('should have correct payload in the JSON RPC request without events', async () => {
      const expectedTxs = generateTransactions(2);

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedTxs)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getAccountTransactions(
        'address',
        BigInt(0),
        2,
        false
      );

      expect(result).toHaveLength(2);
      expect(result).toStrictEqual(expectedTxs);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [
          GetAccountTransactionsMethod['method'],
          GetAccountTransactionsMethod['params']
        ]
      >('get_account_transactions', ['address', BigInt(0), 2, false]);
    });

    it('should have correct payload in the JSON RPC request with events', async () => {
      const expectedTxs = generateTransactions(3);

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedTxs)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getAccountTransactions(
        'address',
        BigInt(3),
        3,
        true
      );

      expect(result).toHaveLength(3);
      expect(result).toStrictEqual(expectedTxs);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [
          GetAccountTransactionsMethod['method'],
          GetAccountTransactionsMethod['params']
        ]
      >('get_account_transactions', ['address', BigInt(3), 3, true]);
    });

    it('should throw correct exception if request failed', async () => {
      const jsonRpcError = new JsonRpcError({
        code: InvalidRequestError.code,
        message: 'something is wrong',
        data: null,
      });

      mockedJsonRpcClient.prototype.call.mockRejectedValue(jsonRpcError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.getAccountTransactions('address', BigInt(3), 3, false)
      ).rejects.toBeInstanceOf(InvalidRequestError);
    });

    it('should pass on unknown errors', async () => {
      const expectedError = new Error();

      mockedJsonRpcClient.prototype.call.mockRejectedValue(expectedError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.getAccountTransactions('address', BigInt(3), 3, false)
      ).rejects.toBe(expectedError);
    });
  });

  describe('getMetadata', () => {
    it('should have correct payload in the JSON RPC request', async () => {
      const expectedMetadata = generateMetadata();

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedMetadata)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getMetadata();

      expect(result).toStrictEqual(expectedMetadata);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [GetMetadataMethod['method'], GetMetadataMethod['params']]
      >('get_metadata', [undefined]);
    });

    it('should pass version to JSON RPC request if provided', async () => {
      const expectedMetadata = generateMetadata();

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedMetadata)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getMetadata(BigInt(100));

      expect(result).toStrictEqual(expectedMetadata);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [GetMetadataMethod['method'], GetMetadataMethod['params']]
      >('get_metadata', [BigInt(100)]);
    });

    it('should throw correct exception if request failed', async () => {
      const jsonRpcError = new JsonRpcError({
        code: InvalidRequestError.code,
        message: 'something is wrong',
        data: null,
      });

      mockedJsonRpcClient.prototype.call.mockRejectedValue(jsonRpcError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(libraClient.getMetadata()).rejects.toBeInstanceOf(
        InvalidRequestError
      );
    });

    it('should pass on unknown errors', async () => {
      const expectedError = new Error();

      mockedJsonRpcClient.prototype.call.mockRejectedValue(expectedError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(libraClient.getMetadata()).rejects.toBe(expectedError);
    });
  });

  describe('getCurrencies', () => {
    it('should have correct payload in the JSON RPC request', async () => {
      const expectedCurrencies = generateCurrencyInfo();

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedCurrencies)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getCurrencies();

      expect(result).toStrictEqual(expectedCurrencies);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [GetCurrenciesMethod['method'], GetCurrenciesMethod['params']]
      >('get_currencies', []);
    });

    it('should throw correct exception if request failed', async () => {
      const jsonRpcError = new JsonRpcError({
        code: InvalidRequestError.code,
        message: 'something is wrong',
        data: null,
      });

      mockedJsonRpcClient.prototype.call.mockRejectedValue(jsonRpcError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(libraClient.getCurrencies()).rejects.toBeInstanceOf(
        InvalidRequestError
      );
    });

    it('should pass on unknown errors', async () => {
      const expectedError = new Error();

      mockedJsonRpcClient.prototype.call.mockRejectedValue(expectedError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(libraClient.getCurrencies()).rejects.toBe(expectedError);
    });
  });

  describe('getEvents', () => {
    it('should have correct payload in the JSON RPC request', async () => {
      const expectedEvents = generateEvents();

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedEvents)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.getEvents('event_key', BigInt(0), 10);

      expect(result).toStrictEqual(expectedEvents);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [GetEventsMethod['method'], GetEventsMethod['params']]
      >('get_events', ['event_key', BigInt(0), 10]);
    });

    it('should throw correct exception if request failed', async () => {
      const jsonRpcError = new JsonRpcError({
        code: InvalidRequestError.code,
        message: 'something is wrong',
        data: null,
      });

      mockedJsonRpcClient.prototype.call.mockRejectedValue(jsonRpcError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.getEvents('event_key', BigInt(0), 10)
      ).rejects.toBeInstanceOf(InvalidRequestError);
    });

    it('should pass on unknown errors', async () => {
      const expectedError = new Error();

      mockedJsonRpcClient.prototype.call.mockRejectedValue(expectedError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.getEvents('event_key', BigInt(0), 10)
      ).rejects.toBe(expectedError);
    });
  });

  describe('submitRawSignedTransaction', () => {
    it('should have correct payload in the JSON RPC request', async () => {
      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(undefined)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await libraClient.submitRawSignedTransaction('lcs_hex');

      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [SubmitMethod['method'], SubmitMethod['params']]
      >('submit', ['LCS_HEX']);
    });

    it('should throw correct exception if request failed', async () => {
      const jsonRpcError = new JsonRpcError({
        code: InvalidRequestError.code,
        message: 'something is wrong',
        data: null,
      });

      mockedJsonRpcClient.prototype.call.mockRejectedValue(jsonRpcError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.submitRawSignedTransaction('lcs_hex')
      ).rejects.toBeInstanceOf(InvalidRequestError);
    });

    it('should pass on unknown errors', async () => {
      const expectedError = new Error();

      mockedJsonRpcClient.prototype.call.mockRejectedValue(expectedError);

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.submitRawSignedTransaction('lcs_hex')
      ).rejects.toBe(expectedError);
    });
  });

  describe('waitForTransaction', () => {
    it('should call for getAccountTransaction until a transaction returned', async () => {
      const [expectedTx] = generateTransactions(1);
      mockedJsonRpcClient.prototype.call.mockReturnValueOnce(
        libraJsonRpcResponse(null)
      );
      mockedJsonRpcClient.prototype.call.mockReturnValueOnce(
        libraJsonRpcResponse(null)
      );
      mockedJsonRpcClient.prototype.call.mockReturnValueOnce(
        libraJsonRpcResponse(expectedTx)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      const result = await libraClient.waitForTransaction(
        'address',
        BigInt(2),
        false,
        expectedTx.hash,
        expectedTx.transaction?.expiration_timestamp_secs || BigInt(0)
      );

      expect(result).toStrictEqual(expectedTx);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledTimes(3);
      expect(mockedJsonRpcClient.prototype.call).toHaveBeenCalledWith<
        [
          GetAccountTransactionMethod['method'],
          GetAccountTransactionMethod['params']
        ]
      >('get_account_transaction', ['address', BigInt(2), false]);
    });

    it('should throw TransactionExecutionFailure when returned transaction status not Executed', async () => {
      const [expectedTx] = generateTransactions(1);
      expectedTx.vm_status!.type = 'out_of_gas';
      mockedJsonRpcClient.prototype.call.mockReturnValueOnce(
        libraJsonRpcResponse(expectedTx)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.waitForTransaction(
          'address',
          BigInt(2),
          false,
          expectedTx.hash,
          expectedTx.transaction?.expiration_timestamp_secs || BigInt(0)
        )
      ).rejects.toThrow(
        new TransactionExecutionFailure(expectedTx.vm_status?.type || '')
      );
    });

    it('should throw AccountTransactionNotFound when nothing not returned when timeout reached', async () => {
      const [expectedTx] = generateTransactions(1);
      expectedTx.vm_status!.type = 'out_of_gas';
      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(null)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.waitForTransaction(
          'address',
          BigInt(2),
          false,
          expectedTx.hash,
          expectedTx.transaction?.expiration_timestamp_secs || BigInt(0)
        )
      ).rejects.toThrow(new AccountTransactionNotFound('address', BigInt(2)));
    });
  });

  describe('LibraLedger validations', () => {
    it('validates ChainID returned from network matches clients ChainID', async () => {
      const expectedTxs = generateTransactions(2);

      mockedJsonRpcClient.prototype.call.mockReturnValue(
        libraJsonRpcResponse(expectedTxs, 10)
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await expect(
        libraClient.getTransactions(BigInt(0), 2, false)
      ).rejects.toThrow(LibraChainIDMismatchError);
    });

    it('validates ledger version returned from network greater than last seen version', async () => {
      const expectedTxs = generateTransactions(2);

      mockedJsonRpcClient.prototype.call.mockReturnValueOnce(
        libraJsonRpcResponse(
          expectedTxs,
          testnetChainID,
          BigInt(2) + BigInt(LibraClient.STALE_TIMESTAMP_VERSION_THRESHOLD)
        )
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await libraClient.getTransactions(BigInt(0), 2, false);

      mockedJsonRpcClient.prototype.call.mockReturnValueOnce(
        libraJsonRpcResponse(expectedTxs, testnetChainID, BigInt(1))
      );

      await expect(
        libraClient.getTransactions(BigInt(0), 2, false)
      ).rejects.toThrow(LibraNetworkStaleError);
    });

    it('validates ledger timestamp returned from network after last seen timestamp', async () => {
      const expectedTxs = generateTransactions(2);

      mockedJsonRpcClient.prototype.call.mockReturnValueOnce(
        libraJsonRpcResponse(
          expectedTxs,
          testnetChainID,
          BigInt(1),
          BigInt(101) + BigInt(LibraClient.STALE_TIMESTAMP_USECS_THRESHOLD)
        )
      );

      const libraClient = new LibraClient(testnetJsonRPCUrl, testnetChainID);

      await libraClient.getTransactions(BigInt(0), 2, false);

      mockedJsonRpcClient.prototype.call.mockReturnValueOnce(
        libraJsonRpcResponse(
          expectedTxs,
          testnetChainID,
          BigInt(1),
          BigInt(100)
        )
      );

      await expect(
        libraClient.getTransactions(BigInt(0), 2, false)
      ).rejects.toThrow(LibraNetworkStaleError);
    });
  });
});
