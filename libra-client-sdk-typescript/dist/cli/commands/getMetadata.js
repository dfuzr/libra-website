var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getClient } from './command';
import { CliError } from '../cliError';
function getMetadataFromClient(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield getClient().getMetadata(argv.txVersion);
        }
        catch (e) {
            throw new CliError('Failed to get metadata from client', e);
        }
    });
}
export function getMetadata(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const metadata = yield getMetadataFromClient(argv);
        logger.info(metadata);
    });
}
