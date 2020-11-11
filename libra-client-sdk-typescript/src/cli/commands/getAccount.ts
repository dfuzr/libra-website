import { BaseCommand, getClient, Logger } from './command';
import { CliError } from '../cliError';

export interface GetAccountCommand extends BaseCommand {
  _: ['get_account'];
  address: string;
}

export async function getAccount(
  argv: GetAccountCommand,
  logger: Logger
): Promise<void> {
  const account = await getAccountFromClient(argv);

  logger.info(account);
}

export async function getAccountFromClient(argv: GetAccountCommand) {
  try {
    return await getClient().getAccount(argv.address);
  } catch (e) {
    throw new CliError('Failed to get account from client', e);
  }
}
