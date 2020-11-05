"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./jsonRpc/client"));
const errors_1 = require("./errors");
const errors_2 = require("./jsonRpc/errors");
const sleep_1 = __importDefault(require("./utils/sleep"));
const bytes_1 = require("./utils/bytes");
class LibraClient {
    constructor(jsonRpcUrl, chainID) {
        this.chainID = chainID;
        this.jsonRpc = new client_1.default(jsonRpcUrl);
    }
    jsonRpcCall(method, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.jsonRpc.call(method, params);
                this.validateChainID(res.libra_chain_id);
                this.validateLedger({
                    version: BigInt(res.libra_ledger_version),
                    timestampUsecs: BigInt(res.libra_ledger_timestampusec),
                });
                return res.result;
            }
            catch (e) {
                if (e instanceof errors_2.JsonRpcError) {
                    throw errors_1.getErrorFromErrorPayload(e.error);
                }
                throw e;
            }
        });
    }
    validateChainID(chainId) {
        if (chainId !== this.chainID) {
            throw new errors_1.LibraChainIDMismatchError(this.chainID, chainId);
        }
    }
    validateLedger(ledger) {
        const lastSeen = this.lastSeenLedger;
        if (lastSeen &&
            (BigInt(ledger.version) +
                BigInt(LibraClient.STALE_TIMESTAMP_VERSION_THRESHOLD) <
                lastSeen.version ||
                BigInt(ledger.timestampUsecs) +
                    BigInt(LibraClient.STALE_TIMESTAMP_USECS_THRESHOLD) <
                    lastSeen.timestampUsecs)) {
            throw new errors_1.LibraNetworkStaleError(lastSeen, ledger);
        }
        this.lastSeenLedger = ledger;
    }
    getTransactions(fromVersion, limit, includeEvents) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.jsonRpcCall('get_transactions', [
                fromVersion,
                limit,
                includeEvents,
            ]);
        });
    }
    getAccount(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.jsonRpcCall('get_account', [
                bytes_1.bytesToHexString(address),
            ]);
        });
    }
    getAccountTransaction(address, sequenceNumber, includeEvents) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.jsonRpcCall('get_account_transaction', [bytes_1.bytesToHexString(address), sequenceNumber, includeEvents]);
        });
    }
    getAccountTransactions(address, fromVersion, limit, includeEvents) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.jsonRpcCall('get_account_transactions', [bytes_1.bytesToHexString(address), fromVersion, limit, includeEvents]);
        });
    }
    getMetadata(version) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.jsonRpcCall('get_metadata', [version]);
        });
    }
    getCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.jsonRpcCall('get_currencies', []);
        });
    }
    getEvents(eventsKey, start, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.jsonRpcCall('get_events', [
                eventsKey,
                start,
                limit,
            ]);
        });
    }
    waitForTransaction(senderAddress, sequenceNumber, includeEvents, transactionHash, expirationTimeSecs, timeoutMillis = 10000) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield this.waitForTransactionUnsafe(senderAddress, sequenceNumber, includeEvents, timeoutMillis);
            if (transaction.hash !== transactionHash) {
                throw new errors_1.TransactionSequenceNumberConflictError(transaction, sequenceNumber);
            }
            if (BigInt((_a = transaction.transaction) === null || _a === void 0 ? void 0 : _a.expiration_timestamp_secs) * BigInt(1e6) <
                this.lastSeenLedger.timestampUsecs) {
                throw new errors_1.TransactionExpiredError(BigInt((_b = transaction.transaction) === null || _b === void 0 ? void 0 : _b.expiration_timestamp_secs), this.lastSeenLedger.timestampUsecs);
            }
            if (((_c = transaction.vm_status) === null || _c === void 0 ? void 0 : _c.type) !== 'executed') {
                const vmStatusType = ((_d = transaction === null || transaction === void 0 ? void 0 : transaction.vm_status) === null || _d === void 0 ? void 0 : _d.type) || 'unknown';
                throw new errors_1.TransactionExecutionFailure(vmStatusType);
            }
            return transaction;
        });
    }
    waitForTransactionUnsafe(senderAddress, sequenceNumber, includeEvents, timeoutMillis = 10000) {
        return __awaiter(this, void 0, void 0, function* () {
            const step = 100;
            for (let millis = 0; millis < timeoutMillis; millis += step) {
                const transaction = yield this.getAccountTransaction(senderAddress, sequenceNumber, includeEvents);
                if (transaction) {
                    return transaction;
                }
                yield sleep_1.default(step);
            }
            throw new errors_1.AccountTransactionNotFound(senderAddress, sequenceNumber);
        });
    }
    submitRawSignedTransaction(signedTransactionHex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.jsonRpcCall('submit', [
                signedTransactionHex.toUpperCase(),
            ]);
        });
    }
}
exports.default = LibraClient;
LibraClient.STALE_TIMESTAMP_VERSION_THRESHOLD = BigInt(30);
LibraClient.STALE_TIMESTAMP_USECS_THRESHOLD = BigInt(10000000);
