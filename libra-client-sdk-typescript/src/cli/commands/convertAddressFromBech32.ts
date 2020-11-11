import LibraUtils from '../../libraUtils';
import { BaseCommand, Logger } from './command';
import { LibraHRP } from '../../interfaces/types';

export interface AddressFromBech32Command extends BaseCommand {
  _: ['address_from_bech32'];
  address: string;
  hrp: LibraHRP;
}

export async function convertAddressFromBech32(
  argv: AddressFromBech32Command,
  logger: Logger
): Promise<void> {
  logger.info('Encoded address', argv.address);

  const [address, subAddress] = LibraUtils.decodeAddress(
    argv.hrp,
    argv.address
  );

  logger.info('Decoded address', address, subAddress);
}
