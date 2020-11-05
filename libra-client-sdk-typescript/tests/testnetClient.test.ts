import axios from 'axios';
import { testAccount } from './helpers';
import TestnetClient from '../src/testnetClient';
import { FaucetNetworkError, FaucetTransportError } from '../src';
import { Currency } from '../src/interfaces/types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.create.mockReturnValue(mockedAxios);

describe('Testnet Client', () => {
  describe('Faucet', () => {
    it('should have correct payload in the HTTP request', async () => {
      const expectedRequest = {
        amount: BigInt(100000),
        auth_key: testAccount.libraAuthKey,
        currency_code: <Currency>'LBR',
      };
      const expectedSequenceNumber = BigInt(3);

      mockedAxios.request.mockReturnValue(
        Promise.resolve({
          data: expectedSequenceNumber,
        })
      );

      const testnetClient = new TestnetClient();

      const result = await testnetClient.mint(
        expectedRequest.auth_key,
        expectedRequest.amount,
        expectedRequest.currency_code
      );

      expect(result).toBe(expectedSequenceNumber);
      expect(mockedAxios.request).toHaveBeenCalledWith({
        params: expectedRequest,
        method: 'post',
      });
    });

    it('should throw FaucetTransportError on 500 HTTP status', async () => {
      const expectedRequest = {
        amount: BigInt(100000),
        auth_key: testAccount.libraAuthKey,
        currency_code: <Currency>'LBR',
      };

      mockedAxios.request.mockRejectedValue({
        isAxiosError: true,
        response: {
          message: 'something is wrong',
        },
      });

      const testnetClient = new TestnetClient();

      await expect(
        testnetClient.mint(
          expectedRequest.auth_key,
          expectedRequest.amount,
          expectedRequest.currency_code
        )
      ).rejects.toThrow(FaucetTransportError);
    });

    it('should throw FaucetNetworkError on connection timeout', async () => {
      const expectedRequest = {
        amount: BigInt(100000),
        auth_key: testAccount.libraAuthKey,
        currency_code: <Currency>'LBR',
      };

      mockedAxios.request.mockRejectedValue({
        isAxiosError: true,
      });

      const testnetClient = new TestnetClient();

      await expect(
        testnetClient.mint(
          expectedRequest.auth_key,
          expectedRequest.amount,
          expectedRequest.currency_code
        )
      ).rejects.toThrow(FaucetNetworkError);
    });
  });
});
