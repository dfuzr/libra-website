import { BaseCommand, getClient, Logger } from './command';
import { CliError } from '../cliError';

export interface GetMetadataCommand extends BaseCommand {
  _: ['get_metadata'];
  txVersion: BigInt;
}

async function getMetadataFromClient(argv: GetMetadataCommand) {
  try {
    return await getClient().getMetadata(argv.txVersion);
  } catch (e) {
    throw new CliError('Failed to get metadata from client', e);
  }
}

export async function getMetadata(
  argv: GetMetadataCommand,
  logger: Logger
): Promise<void> {
  const metadata = await getMetadataFromClient(argv);

  logger.info(metadata);
}
