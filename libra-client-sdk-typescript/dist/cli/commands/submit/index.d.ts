import { RawTransaction } from '../../../lcs/libraTypes';
import { BaseCommand, Logger } from '../command';
import { Currency } from '../../../interfaces/types';
export interface BaseSubmitCommand extends BaseCommand {
    _: ['submit', string];
    senderAddress: string;
    sequenceNumber: BigInt;
    currency: Currency;
    gasCurrency: Currency;
    gasUnitPrice: BigInt;
    maxGasAmount: BigInt;
    expirationTime: BigInt;
    network: number;
    privateKey: string;
    publicKey: string;
}
export declare function executeSubmit(argv: BaseSubmitCommand, tx: RawTransaction): Promise<void>;
export declare function submit(argv: BaseSubmitCommand, logger: Logger): Promise<void>;
