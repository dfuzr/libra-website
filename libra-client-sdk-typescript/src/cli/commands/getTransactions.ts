import { BaseCommand, getClient, Logger } from './command';
import Prettify from '../views';
import { CliError } from '../cliError';
import { Transaction } from '../../interfaces/libra-jsonrpc-types';

export interface GetTransactionsCommand extends BaseCommand {
  _: ['get_transactions'];
  fromVersion: BigInt;
  limit: number;
  includeEvents: boolean;
  prettify: boolean;
}

export async function getTransactions(
  argv: GetTransactionsCommand,
  logger: Logger
): Promise<void> {
  const transactions = await getTransactionsFromClient(argv);

  print(transactions, argv, logger);
}

async function getTransactionsFromClient(argv: GetTransactionsCommand) {
  try {
    return await getClient().getTransactions(
      argv.fromVersion,
      argv.limit,
      argv.includeEvents
    );
  } catch (e) {
    throw new CliError('Failed to get transaction from client', e);
  }
}

function print(
  transactions: Transaction[],
  argv: GetTransactionsCommand,
  logger: Logger
) {
  if (transactions) {
    if (argv.prettify) {
      for (const transaction of transactions) {
        const prettify = new Prettify(logger);

        prettify.prettifyTx(transaction);
      }
    } else {
      logger.info(transactions);
    }
  } else {
    logger.error('Transactions not found');
  }
}
