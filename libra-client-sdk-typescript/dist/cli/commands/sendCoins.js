var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import LibraUtils from '../../libraUtils';
import { createAccountInClient } from './createAccount';
import { submitAddCurrencyToAccountTransaction, } from './submit/submitAddCurrencyToAccountTransaction';
import { mint, printAccountInfo } from './utils';
import { getAccountFromClient } from './getAccount';
import { bytesToHexString } from '../../utils/bytes';
export function sendCoins(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountKeys = LibraUtils.generateAccountKeys(argv.seed);
        const getAccountArgv = {
            _: ['get_account'],
            address: bytesToHexString(accountKeys.accountAddress),
        };
        const accountInfo = yield getAccountFromClient(getAccountArgv);
        if (!accountInfo) {
            yield createAccountInClient(accountKeys, argv.amount, argv.currency);
        }
        else {
            yield addCoinsToExistingAccount(accountInfo, argv, accountKeys);
        }
        printAccountInfo(logger, bytesToHexString(accountKeys.accountAddress), BigInt(-1), accountKeys.privateKey, accountKeys.publicKey);
    });
}
function addCoinsToExistingAccount(accountInfo, argv, accountKeys) {
    return __awaiter(this, void 0, void 0, function* () {
        const currencyBalances = accountInfo.balances.filter((currency) => currency.currency === argv.currency);
        if (!currencyBalances.length) {
            const addCurrencyToAccountArgv = {
                _: ['submit', 'AddCurrencyToAccount'],
                currency: argv.currency,
                expirationTime: BigInt(Math.trunc(new Date().getTime() / 1000 + 60 * 10)),
                gasCurrency: 'LBR',
                gasUnitPrice: BigInt(0),
                maxGasAmount: BigInt(1000000),
                network: 2,
                privateKey: bytesToHexString(accountKeys.privateKey),
                publicKey: bytesToHexString(accountKeys.publicKey),
                senderAddress: bytesToHexString(accountKeys.accountAddress),
                sequenceNumber: accountInfo.sequence_number,
            };
            yield submitAddCurrencyToAccountTransaction(addCurrencyToAccountArgv);
        }
        yield mint(accountKeys, argv.amount, argv.currency);
    });
}
