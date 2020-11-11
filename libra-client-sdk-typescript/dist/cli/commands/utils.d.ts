import AccountKeys from '../../account/accountKeys';
import { Logger } from './command';
import { Bytes } from '../../utils/bytes';
import { Currency } from '../../interfaces/types';
import { Transaction } from '../../interfaces/libra-jsonrpc-types';
export declare function mint(accountKeys: AccountKeys, amount: BigInt, currency: Currency): Promise<Transaction>;
export declare function printAccountInfo(logger: Logger, address: string | undefined, version: BigInt, privateKey: Bytes, publicKey: Bytes): void;
