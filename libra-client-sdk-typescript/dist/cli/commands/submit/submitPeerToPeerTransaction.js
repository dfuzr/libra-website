var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { executeSubmit } from './';
import LibraUtils from '../../../libraUtils';
export function submitPeerToPeerTransaction(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const [metadata, metadataSignature] = LibraUtils.createGeneralMetadata(argv.receiverAddress, argv.senderSubAddress, argv.referenceEventNumber);
        const transaction = LibraUtils.createP2PTransaction(argv.senderAddress, argv.sequenceNumber, argv.currency, argv.receiverAddress, argv.amount, argv.gasCurrency, argv.gasUnitPrice, argv.maxGasAmount, argv.expirationTime, argv.network, metadata, metadataSignature);
        yield executeSubmit(argv, transaction);
    });
}
