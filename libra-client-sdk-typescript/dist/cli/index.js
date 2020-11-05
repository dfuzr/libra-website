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
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const getAccount_1 = require("./commands/getAccount");
const getTransaction_1 = require("./commands/getTransaction");
const getTransactions_1 = require("./commands/getTransactions");
const getAccountTransaction_1 = require("./commands/getAccountTransaction");
const getMetadata_1 = require("./commands/getMetadata");
const getCurrencies_1 = require("./commands/getCurrencies");
const getEvents_1 = require("./commands/getEvents");
const convertAddressToBech32_1 = require("./commands/convertAddressToBech32");
const convertAddressFromBech32_1 = require("./commands/convertAddressFromBech32");
const generateKeys_1 = require("./commands/generateKeys");
const createAccount_1 = require("./commands/createAccount");
const submit_1 = require("./commands/submit");
const getAccountTransactions_1 = require("./commands/getAccountTransactions");
const sendCoins_1 = require("./commands/sendCoins");
exports.execute = (args, logger) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const method = args._[0];
        const methods = {
            get_transaction: getTransaction_1.getTransaction,
            get_transactions: getTransactions_1.getTransactions,
            get_account: getAccount_1.getAccount,
            get_account_transaction: getAccountTransaction_1.getAccountTransaction,
            get_account_transactions: getAccountTransactions_1.getAccountTransactions,
            get_metadata: getMetadata_1.getMetadata,
            get_currencies: getCurrencies_1.getCurrencies,
            get_events: getEvents_1.getEvents,
            address_to_bech32: convertAddressToBech32_1.convertAddressToBech32,
            address_from_bech32: convertAddressFromBech32_1.convertAddressFromBech32,
            submit: submit_1.submit,
            generate_keys: generateKeys_1.generateKeys,
            create_account: createAccount_1.createAccount,
            send_coins: sendCoins_1.sendCoins,
        };
        yield methods[method](args, logger);
    }
    catch (e) {
        logger.error('command execution failed', e);
    }
});
