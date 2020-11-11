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
import TestnetClient from '../../testnetClient';
import LibraClient from '../../libraClient';

export interface BaseCommand {
  _: string[];
}

export type CommandsArgs =
  | GetAccountCommand
  | GetTransactionCommand
  | GetTransactionsCommand
  | GetAccountTransactionCommand
  | GetAccountTransactionsCommand
  | GetMetadataCommand
  | GetCurrenciesCommand
  | GetEventsCommand
  | AddressToBech32Command
  | AddressFromBech32Command
  | PeerToPeerSubmitCommand
  | AddCurrencyToAccountSubmitCommand
  | GenericTransactionSubmitCommand
  | GenerateKeysCommand
  | CreateAccountCommand
  | SendCoinsCommand;

export type CommandNames = Pick<CommandsArgs['_'], 0>[0];
export const commandsList: CommandNames[] = [
  'get_account',
  'get_transactions',
  'get_transaction',
  'get_account_transaction',
  'get_account_transactions',
  'get_currencies',
  'get_events',
  'get_metadata',
  'submit',
  'address_from_bech32',
  'address_to_bech32',
  'generate_keys',
  'create_account',
];

export function getClient(): LibraClient {
  return new LibraClient(
    TestnetClient.TESTNET_JSONRPC_URL,
    TestnetClient.TESTNET_CHAIN_ID
  );
}

export type Logger = {
  info(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
  group(...label: any[]): void;
  groupEnd(): void;
};
