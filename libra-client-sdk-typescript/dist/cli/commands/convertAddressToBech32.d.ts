import { LibraHRP } from '../../interfaces/types';
import { BaseCommand, Logger } from './command';
export interface AddressToBech32Command extends BaseCommand {
    _: ['address_to_bech32'];
    address: string;
    subAddress: string;
    hrp: LibraHRP;
}
export declare function convertAddressToBech32(argv: AddressToBech32Command, logger: Logger): Promise<void>;
