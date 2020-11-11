import nock from 'nock';
import { JsonRpcErrorPayload, JsonRpcMethod } from '../src/jsonRpc/types';
import JsonRpcClient from '../src/jsonRpc/client';
import { LIBRA_SERVER_URL } from './helpers';
import {
  JsonRpcError,
  JsonRpcNetworkError,
  JsonRpcProtocolError,
  JsonRpcTransportError,
} from '../src/jsonRpc/errors';
import { AxiosError } from 'axios';

const method = 'test_method';
const params = [1, 2, 3];
const result = { status: 'OK' };

interface TestRPCMethod extends JsonRpcMethod {
  method: typeof method;
  params: typeof params;
  result: typeof result;
}

describe('JSON RPC Client', () => {
  it('should send a proper request method with params', async () => {
    const jsonRpc = new JsonRpcClient(LIBRA_SERVER_URL);

    const request = {
      jsonrpc: '2.0',
      id: 2009,
      method,
      params,
    };

    const expectedResponse = {
      jsonrpc: '2.0',
      id: 2009,
      result,
    };

    const scope = nock(LIBRA_SERVER_URL)
      .post('/', request)
      .reply(200, expectedResponse);

    const response = await jsonRpc.call<TestRPCMethod>(method, params);

    expect(response).toEqual(expectedResponse);
    scope.done();
  });

  it('should throw a proper JsonRpcError with payload', async () => {
    const jsonRpc = new JsonRpcClient(LIBRA_SERVER_URL);

    const request = {
      jsonrpc: '2.0',
      id: 2009,
      method,
      params,
    };

    const response = {
      jsonrpc: '2.0',
      id: 2009,
      error: {
        code: 0,
        message: 'something is wrong',
      },
    };

    const scope = nock(LIBRA_SERVER_URL)
      .post('/', request)
      .reply(200, response);

    await expect(jsonRpc.call<TestRPCMethod>(method, params)).rejects.toThrow(
      new JsonRpcError(<JsonRpcErrorPayload>{
        code: 0,
        message: 'something is wrong',
      })
    );
    scope.done();
  });

  it('should throw JsonRpcProtocolError when response body is not JSON', async () => {
    const jsonRpc = new JsonRpcClient(LIBRA_SERVER_URL);

    const request = {
      jsonrpc: '2.0',
      id: 2009,
      method,
      params,
    };

    const response = JSON.stringify({
      jsonrpc: '2.0',
      id: 2009,
      result,
    });

    const scope = nock(LIBRA_SERVER_URL)
      .post('/', request)
      .reply(200, response);

    await expect(jsonRpc.call<TestRPCMethod>(method, params)).rejects.toThrow(
      new JsonRpcProtocolError(response)
    );
    scope.done();
  });

  it('should throw JsonRpcProtocolError when response headers are not JSON', async () => {
    const jsonRpc = new JsonRpcClient(LIBRA_SERVER_URL);

    const request = {
      jsonrpc: '2.0',
      id: 2009,
      method,
      params,
    };

    const response = {
      jsonrpc: '2.0',
      id: 2009,
      result,
    };

    const scope = nock(LIBRA_SERVER_URL)
      .post('/', request)
      .reply(200, response, {
        'content-type': 'text/html',
      });

    await expect(jsonRpc.call<TestRPCMethod>(method, params)).rejects.toThrow(
      new JsonRpcProtocolError(JSON.stringify(response))
    );
    scope.done();
  });

  it('should throw JsonRpcTransportError on 500 HTTP status', async () => {
    const jsonRpc = new JsonRpcClient(LIBRA_SERVER_URL);

    const request = {
      jsonrpc: '2.0',
      id: 2009,
      method,
      params,
    };

    const response = {
      jsonrpc: '2.0',
      id: 2009,
    };

    const scope = nock(LIBRA_SERVER_URL)
      .post('/', request)
      .reply(500, response);

    await expect(jsonRpc.call<TestRPCMethod>(method, params)).rejects.toThrow(
      new JsonRpcTransportError(<AxiosError>{
        message: 'Request failed with status code 500',
      })
    );
    scope.done();
  });

  it('should throw JsonRpcNetworkError on connection timeout', async () => {
    const jsonRpc = new JsonRpcClient(LIBRA_SERVER_URL);

    const request = {
      jsonrpc: '2.0',
      id: 2009,
      method,
      params,
    };

    const scope = nock(LIBRA_SERVER_URL)
      .post('/', request)
      .replyWithError({ code: 'ETIMEDOUT' });

    await expect(jsonRpc.call<TestRPCMethod>(method, params)).rejects.toThrow(
      new JsonRpcNetworkError(<AxiosError>{})
    );
    scope.done();
  });
});
