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
exports.printAccountInfo = exports.mint = void 0;
const testnetClient_1 = __importDefault(require("../../testnetClient"));
const bytes_1 = require("../../utils/bytes");
function mint(accountKeys, amount, currency) {
    return __awaiter(this, void 0, void 0, function* () {
        const testnetClient = new testnetClient_1.default();
        const nextAccountSeq = yield testnetClient.mint(bytes_1.bytesToHexString(accountKeys.authKey), amount, currency);
        return yield testnetClient.waitForTransactionUnsafe(testnetClient_1.default.TESTNET_DESIGNATED_DEALER, nextAccountSeq - BigInt(1), false);
    });
}
exports.mint = mint;
function printAccountInfo(logger, address, version, privateKey, publicKey) {
    logger.info('Address: ', address);
    if (version > BigInt(-1)) {
        logger.info('Version: ', version);
    }
    logger.info('Private Key: ', bytes_1.bytesToHexString(privateKey));
    logger.info('Public Key: ', bytes_1.bytesToHexString(publicKey));
}
exports.printAccountInfo = printAccountInfo;
