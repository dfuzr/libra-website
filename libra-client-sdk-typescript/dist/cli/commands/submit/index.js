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
exports.submit = exports.executeSubmit = void 0;
const accountKeys_1 = __importDefault(require("../../../account/accountKeys"));
const libraUtils_1 = __importDefault(require("../../../libraUtils"));
const lcsSerializer_1 = require("../../../lcs/lcs/lcsSerializer");
const command_1 = require("../command");
const submitPeerToPeerTransaction_1 = require("./submitPeerToPeerTransaction");
const submitAddCurrencyToAccountTransaction_1 = require("./submitAddCurrencyToAccountTransaction");
const submitGenericTypeTransaction_1 = require("./submitGenericTypeTransaction");
const cliError_1 = require("../../cliError");
const bytes_1 = require("../../../utils/bytes");
const submitArgs_1 = require("../../args/submitArgs");
function getAccountKeys(argv) {
    return new accountKeys_1.default({
        privateKey: bytes_1.bytesFromHexString(argv.privateKey),
        publicKey: bytes_1.bytesFromHexString(argv.publicKey),
    });
}
function executeSubmit(argv, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountKeys = getAccountKeys(argv);
        const signedTransaction = libraUtils_1.default.signTransaction(tx, accountKeys);
        const signedTxSerializer = new lcsSerializer_1.LcsSerializer();
        signedTransaction.serialize(signedTxSerializer);
        const signedBytes = signedTxSerializer.getBytes();
        const hexTransaction = bytes_1.bytesToHexString(signedBytes);
        try {
            yield command_1.getClient().submitRawSignedTransaction(hexTransaction);
        }
        catch (e) {
            throw new cliError_1.CliError('Failed to execute submit', e);
        }
        const transactionHash = libraUtils_1.default.hashTransaction(signedBytes);
        yield command_1.getClient().waitForTransaction(argv.senderAddress, argv.sequenceNumber, false, transactionHash, argv.expirationTime);
    });
}
exports.executeSubmit = executeSubmit;
function submit(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const type = argv._[1];
        if (type === submitArgs_1.PEER_TO_PEER_WITH_METADATA) {
            yield submitPeerToPeerTransaction_1.submitPeerToPeerTransaction(argv);
        }
        else if (type === submitArgs_1.ADD_CURRENCY_TO_ACCOUNT) {
            yield submitAddCurrencyToAccountTransaction_1.submitAddCurrencyToAccountTransaction(argv);
        }
        else {
            yield submitGenericTypeTransaction_1.submitGenericTypeTransaction(type, argv);
        }
    });
}
exports.submit = submit;
