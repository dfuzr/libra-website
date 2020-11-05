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
exports.generateKeys = void 0;
const signer_1 = require("../../utils/signer");
const bytes_1 = require("../../utils/bytes");
const accountKeys_1 = __importDefault(require("../../account/accountKeys"));
function generateKeys(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const keyPair = signer_1.Signer.generateKeyPair(argv.seed);
        const accountKeys = new accountKeys_1.default(keyPair);
        logger.info('Private Key: ', bytes_1.bytesToHexString(accountKeys.privateKey));
        logger.info('Public Key: ', bytes_1.bytesToHexString(accountKeys.publicKey));
        logger.info('Auth Key: ', bytes_1.bytesToHexString(accountKeys.authKey));
        logger.info('Address: ', bytes_1.bytesToHexString(accountKeys.accountAddress));
    });
}
exports.generateKeys = generateKeys;
