var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAccount } from './commands/getAccount';
import { getTransaction } from './commands/getTransaction';
import { getTransactions } from './commands/getTransactions';
import { getAccountTransaction } from './commands/getAccountTransaction';
import { getMetadata } from './commands/getMetadata';
import { getCurrencies } from './commands/getCurrencies';
import { getEvents } from './commands/getEvents';
import { convertAddressToBech32 } from './commands/convertAddressToBech32';
import { convertAddressFromBech32 } from './commands/convertAddressFromBech32';
import { generateKeys } from './commands/generateKeys';
import { createAccount } from './commands/createAccount';
import { submit } from './commands/submit';
import { getAccountTransactions } from './commands/getAccountTransactions';
import { sendCoins } from './commands/sendCoins';
export const execute = (args, logger) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const method = args._[0];
        const methods = {
            get_transaction: getTransaction,
            get_transactions: getTransactions,
            get_account: getAccount,
            get_account_transaction: getAccountTransaction,
            get_account_transactions: getAccountTransactions,
            get_metadata: getMetadata,
            get_currencies: getCurrencies,
            get_events: getEvents,
            address_to_bech32: convertAddressToBech32,
            address_from_bech32: convertAddressFromBech32,
            submit: submit,
            generate_keys: generateKeys,
            create_account: createAccount,
            send_coins: sendCoins,
        };
        yield methods[method](args, logger);
    }
    catch (e) {
        logger.error('command execution failed', e);
    }
});
