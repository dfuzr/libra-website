import { BaseCommand, Logger } from './command';
export interface GetAccountTransactionCommand extends BaseCommand {
    _: ['get_account_transaction'];
    address: string;
    sequenceNumber: BigInt;
    includeEvents: boolean;
    prettify: boolean;
}
export declare function getAccountTransaction(argv: GetAccountTransactionCommand, logger: Logger): Promise<void>;
