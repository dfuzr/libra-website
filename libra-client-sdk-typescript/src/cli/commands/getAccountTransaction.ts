import { BaseCommand, getClient, Logger } from './command';
import Prettify from '../views';
import { CliError } from '../cliError';
import { Transaction } from '../../interfaces/libra-jsonrpc-types';

export interface GetAccountTransactionCommand extends BaseCommand {
  _: ['get_account_transaction'];
  address: string;
  sequenceNumber: BigInt;
  includeEvents: boolean;
  prettify: boolean;
}

async function getAccountTransactionFromClient(
  argv: GetAccountTransactionCommand
) {
  try {
    return await getClient().getAccountTransaction(
      argv.address,
      argv.sequenceNumber,
      argv.includeEvents
    );
  } catch (e) {
    throw new CliError('Failed to get account transaction from client', e);
  }
}

function print(
  transaction: Transaction | null,
  argv: GetAccountTransactionCommand,
  logger: Logger
) {
  if (transaction) {
    if (argv.prettify) {
      const prettify = new Prettify(logger);

      prettify.prettifyTx(transaction);
    } else {
      logger.info(transaction);
    }
  } else {
    logger.error('Transaction not found');
  }
}

export async function getAccountTransaction(
  argv: GetAccountTransactionCommand,
  logger: Logger
): Promise<void> {
  const transaction = await getAccountTransactionFromClient(argv);

  print(transaction, argv, logger);
}
