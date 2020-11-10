var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import JsonRpcClient from './jsonRpc/client';
import { AccountTransactionNotFound, getErrorFromErrorPayload, LibraChainIDMismatchError, LibraNetworkStaleError, TransactionExecutionFailure, TransactionExpiredError, TransactionSequenceNumberConflictError, } from './errors';
import { JsonRpcError } from './jsonRpc/errors';
import sleep from './utils/sleep';
import { bytesToHexString } from './utils/bytes';
export default class LibraClient {
    constructor(jsonRpcUrl, chainID) {
        this.chainID = chainID;
        this.jsonRpc = new JsonRpcClient(jsonRpcUrl);
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
                if (e instanceof JsonRpcError) {
                    throw getErrorFromErrorPayload(e.error);
                }
                throw e;
            }
        });
    }
    validateChainID(chainId) {
        if (chainId !== this.chainID) {
            throw new LibraChainIDMismatchError(this.chainID, chainId);
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
            throw new LibraNetworkStaleError(lastSeen, ledger);
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
                bytesToHexString(address),
            ]);
        });
    }
    getAccountTransaction(address, sequenceNumber, includeEvents) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.jsonRpcCall('get_account_transaction', [bytesToHexString(address), sequenceNumber, includeEvents]);
        });
    }
    getAccountTransactions(address, fromVersion, limit, includeEvents) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.jsonRpcCall('get_account_transactions', [bytesToHexString(address), fromVersion, limit, includeEvents]);
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
                throw new TransactionSequenceNumberConflictError(transaction, sequenceNumber);
            }
            if (BigInt((_a = transaction.transaction) === null || _a === void 0 ? void 0 : _a.expiration_timestamp_secs) * BigInt(1e6) <
                this.lastSeenLedger.timestampUsecs) {
                throw new TransactionExpiredError(BigInt((_b = transaction.transaction) === null || _b === void 0 ? void 0 : _b.expiration_timestamp_secs), this.lastSeenLedger.timestampUsecs);
            }
            if (((_c = transaction.vm_status) === null || _c === void 0 ? void 0 : _c.type) !== 'executed') {
                const vmStatusType = ((_d = transaction === null || transaction === void 0 ? void 0 : transaction.vm_status) === null || _d === void 0 ? void 0 : _d.type) || 'unknown';
                throw new TransactionExecutionFailure(vmStatusType);
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
                yield sleep(step);
            }
            throw new AccountTransactionNotFound(senderAddress, sequenceNumber);
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
LibraClient.STALE_TIMESTAMP_VERSION_THRESHOLD = BigInt(30);
LibraClient.STALE_TIMESTAMP_USECS_THRESHOLD = BigInt(10000000);
