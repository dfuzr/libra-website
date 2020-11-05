export interface JsonRpcMethod {
  method: string;
  params: unknown[];
  response: unknown;
}

export interface JsonRpcRequest<M extends string, P extends unknown[]>
  extends Record<string, unknown> {
  jsonrpc: '2.0';
  id: number | null;
  method: M;
  params: P;
}

export interface JsonRpcResponse<R> {
  jsonrpc: '2.0';
  id: number | null;
  response?: R;
  error?: JsonRpcErrorPayload;
}

export interface JsonRpcErrorPayload {
  code: number;
  message: string;
  data: Record<string, unknown> | null;
}
