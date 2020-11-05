"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRpcProtocolError = exports.JsonRpcError = exports.JsonRpcNetworkError = exports.JsonRpcTransportError = void 0;
class JsonRpcTransportError extends Error {
    constructor(error) {
        super(error.message);
        this.error = error;
    }
}
exports.JsonRpcTransportError = JsonRpcTransportError;
class JsonRpcNetworkError extends Error {
    constructor(error) {
        super(error.message);
        this.error = error;
    }
}
exports.JsonRpcNetworkError = JsonRpcNetworkError;
class JsonRpcError extends Error {
    constructor(error) {
        super(error.message);
        this.error = error;
    }
}
exports.JsonRpcError = JsonRpcError;
class JsonRpcProtocolError extends Error {
    constructor(response) {
        super('Invalid JSON RPC Protocol response');
        this.response = response;
    }
}
exports.JsonRpcProtocolError = JsonRpcProtocolError;
