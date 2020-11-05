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
exports.submitPeerToPeerTransaction = void 0;
const _1 = require("./");
const libraUtils_1 = __importDefault(require("../../../libraUtils"));
function submitPeerToPeerTransaction(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const [metadata, metadataSignature] = libraUtils_1.default.createGeneralMetadata(argv.receiverAddress, argv.senderSubAddress, argv.referenceEventNumber);
        const transaction = libraUtils_1.default.createP2PTransaction(argv.senderAddress, argv.sequenceNumber, argv.currency, argv.receiverAddress, argv.amount, argv.gasCurrency, argv.gasUnitPrice, argv.maxGasAmount, argv.expirationTime, argv.network, metadata, metadataSignature);
        yield _1.executeSubmit(argv, transaction);
    });
}
exports.submitPeerToPeerTransaction = submitPeerToPeerTransaction;
