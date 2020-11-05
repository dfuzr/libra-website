import { GetAccountCommand } from './getAccount';
import { GetTransactionCommand } from './getTransaction';
import { GetTransactionsCommand } from './getTransactions';
import { GetAccountTransactionCommand } from './getAccountTransaction';
import { GetMetadataCommand } from './getMetadata';
import { GetCurrenciesCommand } from './getCurrencies';
import { GetEventsCommand } from './getEvents';
import { AddressToBech32Command } from './convertAddressToBech32';
import { AddressFromBech32Command } from './convertAddressFromBech32';
import { GenerateKeysCommand } from './generateKeys';
import { CreateAccountCommand } from './createAccount';
import { GetAccountTransactionsCommand } from './getAccountTransactions';
import { PeerToPeerSubmitCommand } from './submit/submitPeerToPeerTransaction';
import { AddCurrencyToAccountSubmitCommand } from './submit/submitAddCurrencyToAccountTransaction';
import { GenericTransactionSubmitCommand } from './submit/submitGenericTypeTransaction';
import { SendCoinsCommand } from './sendCoins';
import LibraClient from '../../libraClient';
export interface BaseCommand {
    _: string[];
}
export declare type CommandsArgs = GetAccountCommand | GetTransactionCommand | GetTransactionsCommand | GetAccountTransactionCommand | GetAccountTransactionsCommand | GetMetadataCommand | GetCurrenciesCommand | GetEventsCommand | AddressToBech32Command | AddressFromBech32Command | PeerToPeerSubmitCommand | AddCurrencyToAccountSubmitCommand | GenericTransactionSubmitCommand | GenerateKeysCommand | CreateAccountCommand | SendCoinsCommand;
export declare type CommandNames = Pick<CommandsArgs['_'], 0>[0];
export declare const commandsList: CommandNames[];
export declare function getClient(): LibraClient;
export declare type Logger = {
    info(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    group(...label: any[]): void;
    groupEnd(): void;
};
