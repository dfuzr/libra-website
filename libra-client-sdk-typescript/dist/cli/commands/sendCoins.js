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
exports.sendCoins = void 0;
const libraUtils_1 = __importDefault(require("../../libraUtils"));
const createAccount_1 = require("./createAccount");
const submitAddCurrencyToAccountTransaction_1 = require("./submit/submitAddCurrencyToAccountTransaction");
const utils_1 = require("./utils");
const getAccount_1 = require("./getAccount");
const bytes_1 = require("../../utils/bytes");
function sendCoins(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountKeys = libraUtils_1.default.generateAccountKeys(argv.seed);
        const getAccountArgv = {
            _: ['get_account'],
            address: bytes_1.bytesToHexString(accountKeys.accountAddress),
        };
        const accountInfo = yield getAccount_1.getAccountFromClient(getAccountArgv);
        if (!accountInfo) {
            yield createAccount_1.createAccountInClient(accountKeys, argv.amount, argv.currency);
        }
        else {
            yield addCoinsToExistingAccount(accountInfo, argv, accountKeys);
        }
        utils_1.printAccountInfo(logger, bytes_1.bytesToHexString(accountKeys.accountAddress), BigInt(-1), accountKeys.privateKey, accountKeys.publicKey);
    });
}
exports.sendCoins = sendCoins;
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
                privateKey: bytes_1.bytesToHexString(accountKeys.privateKey),
                publicKey: bytes_1.bytesToHexString(accountKeys.publicKey),
                senderAddress: bytes_1.bytesToHexString(accountKeys.accountAddress),
                sequenceNumber: accountInfo.sequence_number,
            };
            yield submitAddCurrencyToAccountTransaction_1.submitAddCurrencyToAccountTransaction(addCurrencyToAccountArgv);
        }
        yield utils_1.mint(accountKeys, argv.amount, argv.currency);
    });
}
