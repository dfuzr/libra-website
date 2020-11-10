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
import { CliError } from '../cliError';
export function getAccount(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield getAccountFromClient(argv);
        logger.info(account);
    });
}
export function getAccountFromClient(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield getClient().getAccount(argv.address);
        }
        catch (e) {
            throw new CliError('Failed to get account from client', e);
        }
    });
}
