var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AccountKeys from '../../../account/accountKeys';
import LibraUtils from '../../../libraUtils';
import { LcsSerializer } from '../../../lcs/lcs/lcsSerializer';
import { getClient } from '../command';
import { submitPeerToPeerTransaction, } from './submitPeerToPeerTransaction';
import { submitAddCurrencyToAccountTransaction, } from './submitAddCurrencyToAccountTransaction';
import { submitGenericTypeTransaction, } from './submitGenericTypeTransaction';
import { CliError } from '../../cliError';
import { bytesFromHexString, bytesToHexString } from '../../../utils/bytes';
import { ADD_CURRENCY_TO_ACCOUNT, PEER_TO_PEER_WITH_METADATA, } from '../../args/submitArgs';
function getAccountKeys(argv) {
    return new AccountKeys({
        privateKey: bytesFromHexString(argv.privateKey),
        publicKey: bytesFromHexString(argv.publicKey),
    });
}
export function executeSubmit(argv, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountKeys = getAccountKeys(argv);
        const signedTransaction = LibraUtils.signTransaction(tx, accountKeys);
        const signedTxSerializer = new LcsSerializer();
        signedTransaction.serialize(signedTxSerializer);
        const signedBytes = signedTxSerializer.getBytes();
        const hexTransaction = bytesToHexString(signedBytes);
        try {
            yield getClient().submitRawSignedTransaction(hexTransaction);
        }
        catch (e) {
            throw new CliError('Failed to execute submit', e);
        }
        const transactionHash = LibraUtils.hashTransaction(signedBytes);
        yield getClient().waitForTransaction(argv.senderAddress, argv.sequenceNumber, false, transactionHash, argv.expirationTime);
    });
}
export function submit(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const type = argv._[1];
        if (type === PEER_TO_PEER_WITH_METADATA) {
            yield submitPeerToPeerTransaction(argv);
        }
        else if (type === ADD_CURRENCY_TO_ACCOUNT) {
            yield submitAddCurrencyToAccountTransaction(argv);
        }
        else {
            yield submitGenericTypeTransaction(type, argv);
        }
    });
}
