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
exports.getAccountFromClient = exports.getAccount = void 0;
const command_1 = require("./command");
const cliError_1 = require("../cliError");
function getAccount(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield getAccountFromClient(argv);
        logger.info(account);
    });
}
exports.getAccount = getAccount;
function getAccountFromClient(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield command_1.getClient().getAccount(argv.address);
        }
        catch (e) {
            throw new cliError_1.CliError('Failed to get account from client', e);
        }
    });
}
exports.getAccountFromClient = getAccountFromClient;
