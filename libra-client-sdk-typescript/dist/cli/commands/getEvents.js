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
export function getEvents(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield getEventsFromClient(argv);
        logger.info(events);
    });
}
function getEventsFromClient(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield getClient().getEvents(argv.eventsKey, argv.start, argv.limit);
        }
        catch (e) {
            throw new CliError('Failed to get events from client', e);
        }
    });
}
