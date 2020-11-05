import LibraUtils from '../../libraUtils';
import { LibraHRP } from '../../interfaces/types';
import { BaseCommand, Logger } from './command';

export interface AddressToBech32Command extends BaseCommand {
  _: ['address_to_bech32'];
  address: string;
  subAddress: string;
  hrp: LibraHRP;
}

export async function convertAddressToBech32(
  argv: AddressToBech32Command,
  logger: Logger
): Promise<void> {
  logger.info('Original address', argv.address, argv.subAddress);

  const addressBech32 = LibraUtils.encodeAddress(
    argv.address,
    argv.subAddress,
    argv.hrp
  );

  logger.info('Encoded address', addressBech32);
}
