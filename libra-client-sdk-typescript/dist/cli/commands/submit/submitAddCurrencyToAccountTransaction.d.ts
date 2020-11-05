import { BaseSubmitCommand } from './';
export interface AddCurrencyToAccountSubmitCommand extends BaseSubmitCommand {
    _: ['submit', 'AddCurrencyToAccount'];
}
export declare function submitAddCurrencyToAccountTransaction(argv: AddCurrencyToAccountSubmitCommand): Promise<void>;
