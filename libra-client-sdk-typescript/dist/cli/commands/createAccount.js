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
exports.createAccountInClient = exports.createAccount = void 0;
const libraUtils_1 = __importDefault(require("../../libraUtils"));
const cliError_1 = require("../cliError");
const utils_1 = require("./utils");
function createAccount(argv, logger) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const accountKeys = libraUtils_1.default.generateAccountKeys(argv.seed);
        const transaction = yield exports.createAccountInClient(accountKeys);
        utils_1.printAccountInfo(logger, (_b = (_a = transaction.transaction) === null || _a === void 0 ? void 0 : _a.script) === null || _b === void 0 ? void 0 : _b.receiver, transaction.version, accountKeys.privateKey, accountKeys.publicKey);
    });
}
exports.createAccount = createAccount;
exports.createAccountInClient = (accountKeys, amount = BigInt(1000000), currency = 'LBR') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield utils_1.mint(accountKeys, amount, currency);
    }
    catch (e) {
        throw new cliError_1.CliError('Failed to send create account request to client', e);
    }
});
