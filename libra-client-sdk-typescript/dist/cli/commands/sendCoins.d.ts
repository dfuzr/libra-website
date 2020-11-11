import { Logger } from './command';
import { Currency } from '../../interfaces/types';
export interface SendCoinsCommand {
    _: ['send_coins'];
    seed: string;
    currency: Currency;
    amount: BigInt;
}
export declare function sendCoins(argv: SendCoinsCommand, logger: Logger): Promise<void>;
