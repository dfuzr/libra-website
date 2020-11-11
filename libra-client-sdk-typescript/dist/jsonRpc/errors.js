export class JsonRpcTransportError extends Error {
    constructor(error) {
        super(error.message);
        this.error = error;
    }
}
export class JsonRpcNetworkError extends Error {
    constructor(error) {
        super(error.message);
        this.error = error;
    }
}
export class JsonRpcError extends Error {
    constructor(error) {
        super(error.message);
        this.error = error;
    }
}
export class JsonRpcProtocolError extends Error {
    constructor(response) {
        super('Invalid JSON RPC Protocol response');
        this.response = response;
    }
}
