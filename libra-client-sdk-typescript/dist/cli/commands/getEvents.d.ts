import { BaseCommand, Logger } from './command';
export interface GetEventsCommand extends BaseCommand {
    _: ['get_events'];
    eventsKey: string;
    start: BigInt;
    limit: number;
}
export declare function getEvents(argv: GetEventsCommand, logger: Logger): Promise<void>;
