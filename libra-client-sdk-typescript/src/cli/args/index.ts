import yargs, { Argv } from 'yargs';
import { CommandsArgs } from '../commands/command';
import { GetAccountCommand } from '../commands/getAccount';
import { GetTransactionCommand } from '../commands/getTransaction';
import { GetTransactionsCommand } from '../commands/getTransactions';
import { GetAccountTransactionCommand } from '../commands/getAccountTransaction';
import { GetMetadataCommand } from '../commands/getMetadata';
import { GetCurrenciesCommand } from '../commands/getCurrencies';
import { GetEventsCommand } from '../commands/getEvents';
import { AddressToBech32Command } from '../commands/convertAddressToBech32';
import { AddressFromBech32Command } from '../commands/convertAddressFromBech32';
import { GenerateKeysCommand } from '../commands/generateKeys';
import { CreateAccountCommand } from '../commands/createAccount';
import { submitYargs } from './submitArgs';
import { BaseSubmitCommand } from '../commands/submit';
import { GetAccountTransactionsCommand } from '../commands/getAccountTransactions';
import { SendCoinsCommand } from '../commands/sendCoins';
import { CURRENCIES } from '../../constants';

const args = <Argv<CommandsArgs>>yargs
  .usage('To see each command optional arguments use <<command-name>> --help')
  .command<GetAccountCommand>(
    'get_account <address>',
    'Returns Libra account by address',
    (argv) => {
      argv.positional('address', {
        type: 'string',
        describe: 'Libra account address',
      });
    }
  )
  .command<GetTransactionCommand>(
    'get_transaction <txVersion>',
    'Returns single Libra transaction by version',
    (argv) => {
      argv
        .positional('txVersion', {
          type: 'number',
          describe: 'Libra transaction version',
        })
        .option('includeEvents', {
          type: 'boolean',
          default: false,
          alias: 'e',
          describe: 'Should include events for required transaction',
        })
        .option('prettify', {
          type: 'boolean',
          default: true,
          alias: 'p',
          describe: 'Make return data more readable',
        });
    }
  )
  .command<GetTransactionsCommand>(
    'get_transactions <fromVersion>',
    'Returns Libra transactions by version (offset) and limit',
    (argv) => {
      argv
        .positional('fromVersion', {
          type: 'number',
          describe: 'From which Libra version fetch transactions',
        })
        .option('limit', {
          type: 'number',
          default: 10,
          alias: 'l',
          describe: 'Limit amount of transactions returned',
        })
        .option('includeEvents', {
          type: 'boolean',
          default: false,
          alias: 'e',
          describe: 'Should include events for each transaction',
        })
        .option('prettify', {
          type: 'boolean',
          default: true,
          alias: 'p',
          describe: 'Make return data more readable',
        });
    }
  )
  .command<GetAccountTransactionCommand>(
    'get_account_transaction <address> <sequenceNumber>',
    'Returns single Libra transaction by account address and sequence number',
    (argv) => {
      argv
        .positional('address', {
          type: 'string',
          describe: 'Libra account address',
        })
        .positional('sequenceNumber', {
          type: 'number',
          describe: 'Libra transaction in account sequence number',
        })
        .option('includeEvents', {
          type: 'boolean',
          default: false,
          alias: 'e',
          describe: 'Should include events for each transaction',
        })
        .option('prettify', {
          type: 'boolean',
          default: true,
          alias: 'p',
          describe: 'Make return data more readable',
        });
    }
  )
  .command<GetAccountTransactionsCommand>(
    'get_account_transactions <address> <fromVersion>',
    'Returns Libra transactions by account address, version (offset) and limit',
    (argv) => {
      argv
        .positional('address', {
          type: 'string',
          describe: 'Libra account address',
        })
        .positional('fromVersion', {
          type: 'number',
          describe: 'From which Libra version fetch transactions',
        })
        .option('limit', {
          type: 'number',
          default: 10,
          alias: 'l',
          describe: 'Limit amount of transactions returned',
        })
        .option('includeEvents', {
          type: 'boolean',
          default: false,
          alias: 'e',
          describe: 'Should include events for each transaction',
        })
        .option('prettify', {
          type: 'boolean',
          default: true,
          alias: 'p',
          describe: 'Make return data more readable',
        });
    }
  )
  .command<GetMetadataCommand>(
    'get_metadata [txVersion]',
    'Returns Libra blockchain metadata',
    (argv) => {
      argv.positional('txVersion', {
        type: 'number',
      });
    }
  )
  .command<GetCurrenciesCommand>(
    'get_currencies',
    'Returns Libra blockchain supported currencies'
  )
  .command<GetEventsCommand>(
    'get_events <eventsKey>',
    'Returns Libra blockchain events',
    (argv) => {
      argv
        .positional('eventsKey', {
          type: 'string',
        })
        .option('start', {
          type: 'number',
          default: 0,
          alias: 's',
        })
        .option('limit', {
          type: 'number',
          default: 10,
          alias: 'l',
        });
    }
  )
  .command<AddressToBech32Command>(
    'address_to_bech32 <address>',
    'Convert Libra account address to Bech32 format',
    (yargs) => {
      yargs
        .positional('address', {
          type: 'string',
        })
        .positional('subAddress', {
          type: 'string',
        })
        .positional('hrp', {
          type: 'string',
          default: 'tlb',
          choices: ['lbr', 'tlb'],
        });
    }
  )
  .command<AddressFromBech32Command>(
    'address_from_bech32 <address>',
    'Convert Bech32 format to Libra account address',
    (yargs) => {
      yargs
        .positional('address', {
          type: 'string',
        })
        .positional('hrp', {
          type: 'string',
          default: 'tlb',
          choices: ['lbr', 'tlb'],
        });
    }
  )
  .command<BaseSubmitCommand>(
    'submit <type>',
    'Submit new transaction to Libra blockchain',
    submitYargs
  )
  .command<GenerateKeysCommand>(
    'generate_keys',
    'Generate new keys pair (random or by given seed)',
    (yargs) => {
      yargs.options('seed', { type: 'string' });
    }
  )
  .command<CreateAccountCommand>(
    'create_account',
    'Create new account in Libra blockchain',
    (yargs) => {
      yargs
        .usage(
          'If no key was provided a new set of keys will be generated as part of the account creation process. User may provide seed as base for the private key'
        )
        .options('seed', { type: 'string' });
    }
  )
  .command<SendCoinsCommand>(
    'send_coins',
    'Send coins to account in the Libra blockchain (new or existing)',
    (yargs) => {
      yargs
        .usage(
          'If no seed was provide a new account will be generated, the new account details will be display if the operation will succeeded. ' +
            "If no currency was provide the default type is 'LBR'. " +
            'The send_coins command allow to add coins of currency type that is currently not associated to the account (in case of existing account) ' +
            'by adding the currency to account before submitting the P2P transaction. ' +
            "If no amount was provide the default amount is '100000000'."
        )
        .option('seed', {
          type: 'string',
          description: 'The account seed to which we add coins',
        })
        .option('currency', {
          type: 'string',
          choices: CURRENCIES,
          default: 'LBR',
          description: 'The type of currency we add',
        })
        .option('amount', { type: 'number', default: 100000000 });
    }
  )
  .strict()
  .demandCommand();

export default args.argv;
