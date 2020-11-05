import { BaseCommand, getClient, Logger } from './command';
import Prettify from '../views';
import { CliError } from '../cliError';
import { Transaction } from '../../interfaces/libra-jsonrpc-types';

export interface GetAccountTransactionsCommand extends BaseCommand {
  _: ['get_account_transactions'];
  address: string;
  fromVersion: BigInt;
  limit: number;
  includeEvents: boolean;
  prettify: boolean;
}

export async function getAccountTransactions(
  argv: GetAccountTransactionsCommand,
  logger: Logger
): Promise<void> {
  const transactions = await getAccountTransactionsFromClient(argv);

  print(argv, transactions, logger);
}

async function getAccountTransactionsFromClient(
  argv: GetAccountTransactionsCommand
) {
  try {
    return await getClient().getAccountTransactions(
      argv.address,
      argv.fromVersion,
      argv.limit,
      argv.includeEvents
    );
  } catch (e) {
    throw new CliError('Failed to get account transactions from client', e);
  }
}

function print(
  argv: GetAccountTransactionsCommand,
  transactions: Transaction[],
  logger: Logger
) {
  if (argv.prettify) {
    for (const transaction of transactions) {
      const prettify = new Prettify(logger);

      prettify.prettifyTx(transaction);
    }
  } else {
    logger.info(transactions);
  }
}
