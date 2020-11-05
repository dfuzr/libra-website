import { BaseCommand, getClient, Logger } from './command';
import Prettify from '../views';
import { CliError } from '../cliError';
import { Transaction } from '../../interfaces/libra-jsonrpc-types';

export interface GetTransactionCommand extends BaseCommand {
  _: ['get_transaction'];
  txVersion: BigInt;
  includeEvents: boolean;
  prettify: boolean;
}

export async function getTransaction(
  argv: GetTransactionCommand,
  logger: Logger
): Promise<void> {
  const libraTransaction = await getTransactionFromClient(argv);

  print(libraTransaction, argv, logger);
}

async function getTransactionFromClient(argv: GetTransactionCommand) {
  try {
    const [libraTransaction] = await getClient().getTransactions(
      argv.txVersion,
      1,
      argv.includeEvents
    );

    return libraTransaction;
  } catch (e) {
    throw new CliError('Failed to get transaction from client', e);
  }
}

function print(
  libraTransaction: Transaction,
  argv: GetTransactionCommand,
  logger: Logger
) {
  if (libraTransaction) {
    if (argv.prettify) {
      const prettify = new Prettify(logger);
      prettify.prettifyTx(libraTransaction);
    } else {
      logger.info(libraTransaction);
    }
  } else {
    logger.error('Transaction not found');
  }
}
