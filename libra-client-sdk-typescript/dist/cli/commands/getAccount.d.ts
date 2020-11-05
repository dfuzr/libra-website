import { BaseCommand, Logger } from './command';
export interface GetAccountCommand extends BaseCommand {
    _: ['get_account'];
    address: string;
}
export declare function getAccount(argv: GetAccountCommand, logger: Logger): Promise<void>;
export declare function getAccountFromClient(argv: GetAccountCommand): Promise<import("../../interfaces/libra-jsonrpc-types").Account | null>;
