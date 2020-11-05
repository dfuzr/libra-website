import { BaseCommand, getClient, Logger } from './command';
import { CliError } from '../cliError';

export interface GetEventsCommand extends BaseCommand {
  _: ['get_events'];
  eventsKey: string;
  start: BigInt;
  limit: number;
}

export async function getEvents(
  argv: GetEventsCommand,
  logger: Logger
): Promise<void> {
  const events = await getEventsFromClient(argv);

  logger.info(events);
}

async function getEventsFromClient(argv: GetEventsCommand) {
  try {
    return await getClient().getEvents(argv.eventsKey, argv.start, argv.limit);
  } catch (e) {
    throw new CliError('Failed to get events from client', e);
  }
}
