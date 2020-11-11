import { Currency } from '../../interfaces/types';
import { BaseCommand, Logger } from './command';
import AccountKeys from '../../account/accountKeys';
import { Transaction } from '../../interfaces/libra-jsonrpc-types';
export interface CreateAccountCommand extends BaseCommand {
    _: ['create_account'];
    seed?: string;
}
export declare function createAccount(argv: CreateAccountCommand, logger: Logger): Promise<void>;
export declare const createAccountInClient: (accountKeys: AccountKeys, amount?: BigInt, currency?: Currency) => Promise<Transaction>;
