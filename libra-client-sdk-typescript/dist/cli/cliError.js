"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliError = void 0;
class CliError extends Error {
    constructor(message, e) {
        super(message);
        this.e = e;
    }
}
exports.CliError = CliError;
