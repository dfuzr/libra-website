import { BaseCommand, Logger } from './command';
import { LibraHRP } from '../../interfaces/types';
export interface AddressFromBech32Command extends BaseCommand {
    _: ['address_from_bech32'];
    address: string;
    hrp: LibraHRP;
}
export declare function convertAddressFromBech32(argv: AddressFromBech32Command, logger: Logger): Promise<void>;
