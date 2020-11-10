var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getClient } from './command';
import Prettify from '../views';
import { CliError } from '../cliError';
export function getTransactions(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const transactions = yield getTransactionsFromClient(argv);
        print(transactions, argv, logger);
    });
}
function getTransactionsFromClient(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield getClient().getTransactions(argv.fromVersion, argv.limit, argv.includeEvents);
        }
        catch (e) {
            throw new CliError('Failed to get transaction from client', e);
        }
    });
}
function print(transactions, argv, logger) {
    if (transactions) {
        if (argv.prettify) {
            for (const transaction of transactions) {
                const prettify = new Prettify(logger);
                prettify.prettifyTx(transaction);
            }
        }
        else {
            logger.info(transactions);
        }
    }
    else {
        logger.error('Transactions not found');
    }
}
