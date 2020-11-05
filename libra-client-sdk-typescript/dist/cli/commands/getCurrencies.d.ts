import { BaseCommand, Logger } from './command';
export interface GetCurrenciesCommand extends BaseCommand {
    _: ['get_currencies'];
}
export declare function getCurrencies(argv: GetCurrenciesCommand, logger: Logger): Promise<void>;
