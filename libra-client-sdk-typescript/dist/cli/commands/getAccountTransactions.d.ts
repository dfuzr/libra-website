import { BaseCommand, Logger } from './command';
export interface GetAccountTransactionsCommand extends BaseCommand {
    _: ['get_account_transactions'];
    address: string;
    fromVersion: BigInt;
    limit: number;
    includeEvents: boolean;
    prettify: boolean;
}
export declare function getAccountTransactions(argv: GetAccountTransactionsCommand, logger: Logger): Promise<void>;
