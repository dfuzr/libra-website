import { BaseCommand, getClient, Logger } from './command';
import { CliError } from '../cliError';

export interface GetCurrenciesCommand extends BaseCommand {
  _: ['get_currencies'];
}

async function getCurrenciesFromClient() {
  try {
    return await getClient().getCurrencies();
  } catch (e) {
    throw new CliError('Failed to get currencies from client', e);
  }
}

export async function getCurrencies(
  argv: GetCurrenciesCommand,
  logger: Logger
): Promise<void> {
  const currencies = await getCurrenciesFromClient();

  logger.info(currencies);
}
