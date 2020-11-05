import { Currency } from '../../interfaces/types';
import { BaseCommand, Logger } from './command';
import LibraUtils from '../../libraUtils';
import { CliError } from '../cliError';
import AccountKeys from '../../account/accountKeys';
import { mint, printAccountInfo } from './utils';
import { Transaction } from '../../interfaces/libra-jsonrpc-types';

export interface CreateAccountCommand extends BaseCommand {
  _: ['create_account'];
  seed?: string;
}

export async function createAccount(
  argv: CreateAccountCommand,
  logger: Logger
): Promise<void> {
  const accountKeys = LibraUtils.generateAccountKeys(argv.seed);

  const transaction = await createAccountInClient(accountKeys);

  printAccountInfo(
    logger,
    transaction.transaction?.script?.receiver,
    transaction.version,
    accountKeys.privateKey,
    accountKeys.publicKey
  );
}

export const createAccountInClient = async (
  accountKeys: AccountKeys,
  amount: BigInt = BigInt(1000000),
  currency: Currency = 'LBR'
): Promise<Transaction> => {
  try {
    return await mint(accountKeys, amount, currency);
  } catch (e) {
    throw new CliError('Failed to send create account request to client', e);
  }
};
