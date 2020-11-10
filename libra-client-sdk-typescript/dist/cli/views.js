export default class Prettify {
    constructor(logger) {
        this.logger = logger;
    }
    prettifyTx(transaction) {
        var _a, _b, _c, _d;
        this.logger.group('Transaction Details:');
        if (((_a = transaction.transaction) === null || _a === void 0 ? void 0 : _a.type) === 'writeset') {
            this.printWriteSetTxDetails(transaction);
        }
        else if (((_b = transaction.transaction) === null || _b === void 0 ? void 0 : _b.type) === 'blockmetadata') {
            this.printBlockMetadataTxDetails(transaction);
        }
        else if (((_c = transaction.transaction) === null || _c === void 0 ? void 0 : _c.type) === 'user') {
            this.prettifyUserTx(transaction);
        }
        else {
            throw new Error('Failed to handle unrecognized transaction type ' + ((_d = transaction.transaction) === null || _d === void 0 ? void 0 : _d.type));
        }
        this.logger.groupEnd();
        this.logger.info('--------------------------------------------------------');
    }
    prettifyUserTx(transaction) {
        var _a, _b;
        const txType = (_b = (_a = transaction.transaction) === null || _a === void 0 ? void 0 : _a.script) === null || _b === void 0 ? void 0 : _b.type;
        if (txType === 'unknown_transaction') {
            this.printUnknownTxDetails(transaction);
        }
        else {
            this.printUserTx(transaction, txType);
        }
    }
    printTxFinancialDetails(transaction) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.logger.info('Source:', (_a = transaction.transaction) === null || _a === void 0 ? void 0 : _a.sender);
        this.logger.info('Target:', (_c = (_b = transaction.transaction) === null || _b === void 0 ? void 0 : _b.script) === null || _c === void 0 ? void 0 : _c.receiver);
        this.logger.info('Amount:', (_e = (_d = transaction.transaction) === null || _d === void 0 ? void 0 : _d.script) === null || _e === void 0 ? void 0 : _e.amount);
        this.logger.info('Types:', (_g = (_f = transaction.transaction) === null || _f === void 0 ? void 0 : _f.script) === null || _g === void 0 ? void 0 : _g.currency);
    }
    printBlockMetadataTxDetails(transaction) {
        var _a;
        this.logger.info('Type:', 'blockmetadata');
        this.printTxBasicDetails(transaction);
        this.logger.info('Expiration Time:', Math.trunc(Number(BigInt((_a = transaction.transaction) === null || _a === void 0 ? void 0 : _a.timestamp_usecs) / BigInt(1000000))));
    }
    printUnknownTxDetails(transaction) {
        this.logger.info('Type:', 'unknown_transaction');
        this.printTxBasicDetails(transaction);
    }
    printUserTx(transaction, type) {
        this.logger.info('Type:', type);
        this.printTxBasicDetails(transaction);
        this.printTxFinancialDetails(transaction);
    }
    printWriteSetTxDetails(transaction) {
        this.logger.info('Type:', 'writeset');
        this.printTxBasicDetails(transaction);
    }
    printTxBasicDetails(transaction) {
        this.logger.info('Version:', transaction.version);
    }
}
