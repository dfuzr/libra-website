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
export function getTransaction(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const libraTransaction = yield getTransactionFromClient(argv);
        print(libraTransaction, argv, logger);
    });
}
function getTransactionFromClient(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [libraTransaction] = yield getClient().getTransactions(argv.txVersion, 1, argv.includeEvents);
            return libraTransaction;
        }
        catch (e) {
            throw new CliError('Failed to get transaction from client', e);
        }
    });
}
function print(libraTransaction, argv, logger) {
    if (libraTransaction) {
        if (argv.prettify) {
            const prettify = new Prettify(logger);
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
