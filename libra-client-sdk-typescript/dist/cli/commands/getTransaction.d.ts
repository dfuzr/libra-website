import { BaseCommand, Logger } from './command';
export interface GetTransactionCommand extends BaseCommand {
    _: ['get_transaction'];
    txVersion: BigInt;
    includeEvents: boolean;
    prettify: boolean;
}
export declare function getTransaction(argv: GetTransactionCommand, logger: Logger): Promise<void>;
