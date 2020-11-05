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
exports.getAccountTransaction = void 0;
const command_1 = require("./command");
const views_1 = __importDefault(require("../views"));
const cliError_1 = require("../cliError");
function getAccountTransactionFromClient(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield command_1.getClient().getAccountTransaction(argv.address, argv.sequenceNumber, argv.includeEvents);
        }
        catch (e) {
            throw new cliError_1.CliError('Failed to get account transaction from client', e);
        }
    });
}
function print(transaction, argv, logger) {
    if (transaction) {
        if (argv.prettify) {
            const prettify = new views_1.default(logger);
            prettify.prettifyTx(transaction);
        }
        else {
            logger.info(transaction);
        }
    }
    else {
        logger.error('Transaction not found');
    }
}
function getAccountTransaction(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const transaction = yield getAccountTransactionFromClient(argv);
        print(transaction, argv, logger);
    });
}
exports.getAccountTransaction = getAccountTransaction;
