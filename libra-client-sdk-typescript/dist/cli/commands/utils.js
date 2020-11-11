var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import TestnetClient from '../../testnetClient';
import { bytesToHexString } from '../../utils/bytes';
export function mint(accountKeys, amount, currency) {
    return __awaiter(this, void 0, void 0, function* () {
        const testnetClient = new TestnetClient();
        const nextAccountSeq = yield testnetClient.mint(bytesToHexString(accountKeys.authKey), amount, currency);
        return yield testnetClient.waitForTransactionUnsafe(TestnetClient.TESTNET_DESIGNATED_DEALER, nextAccountSeq - BigInt(1), false);
    });
}
export function printAccountInfo(logger, address, version, privateKey, publicKey) {
    logger.info('Address: ', address);
    if (version > BigInt(-1)) {
        logger.info('Version: ', version);
    }
    logger.info('Private Key: ', bytesToHexString(privateKey));
    logger.info('Public Key: ', bytesToHexString(publicKey));
}
