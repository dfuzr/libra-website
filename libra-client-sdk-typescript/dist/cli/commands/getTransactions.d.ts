import { BaseCommand, Logger } from './command';
export interface GetTransactionsCommand extends BaseCommand {
    _: ['get_transactions'];
    fromVersion: BigInt;
    limit: number;
    includeEvents: boolean;
    prettify: boolean;
}
export declare function getTransactions(argv: GetTransactionsCommand, logger: Logger): Promise<void>;
