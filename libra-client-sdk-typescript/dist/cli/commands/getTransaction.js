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
exports.getTransaction = void 0;
const command_1 = require("./command");
const views_1 = __importDefault(require("../views"));
const cliError_1 = require("../cliError");
function getTransaction(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const libraTransaction = yield getTransactionFromClient(argv);
        print(libraTransaction, argv, logger);
    });
}
exports.getTransaction = getTransaction;
function getTransactionFromClient(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [libraTransaction] = yield command_1.getClient().getTransactions(argv.txVersion, 1, argv.includeEvents);
            return libraTransaction;
        }
        catch (e) {
            throw new cliError_1.CliError('Failed to get transaction from client', e);
        }
    });
}
function print(libraTransaction, argv, logger) {
    if (libraTransaction) {
        if (argv.prettify) {
            const prettify = new views_1.default(logger);
            prettify.prettifyTx(libraTransaction);
        }
        else {
            logger.info(libraTransaction);
        }
    }
    else {
        logger.error('Transaction not found');
    }
}
