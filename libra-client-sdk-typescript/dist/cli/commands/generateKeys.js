var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Signer } from '../../utils/signer';
import { bytesToHexString } from '../../utils/bytes';
import AccountKeys from '../../account/accountKeys';
export function generateKeys(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const keyPair = Signer.generateKeyPair(argv.seed);
        const accountKeys = new AccountKeys(keyPair);
        logger.info('Private Key: ', bytesToHexString(accountKeys.privateKey));
        logger.info('Public Key: ', bytesToHexString(accountKeys.publicKey));
        logger.info('Auth Key: ', bytesToHexString(accountKeys.authKey));
        logger.info('Address: ', bytesToHexString(accountKeys.accountAddress));
    });
}
