import { AxiosError } from 'axios';
import { JsonRpcErrorPayload } from './types';

export class JsonRpcTransportError extends Error {
  constructor(public readonly error: AxiosError) {
    super(error.message);
  }
}

export class JsonRpcNetworkError extends Error {
  constructor(public readonly error: AxiosError) {
    super(error.message);
  }
}

export class JsonRpcError extends Error {
  constructor(public readonly error: JsonRpcErrorPayload) {
    super(error.message);
  }
}

export class JsonRpcProtocolError extends Error {
  constructor(public readonly response: string) {
    super('Invalid JSON RPC Protocol response');
  }
}
