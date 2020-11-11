import yargs from 'yargs';
import { submitYargs } from './submitArgs';
import { CURRENCIES } from '../../constants';
const args = yargs
    .usage('To see each command optional arguments use <<command-name>> --help')
    .command('get_account <address>', 'Returns Libra account by address', (argv) => {
    argv.positional('address', {
        type: 'string',
        describe: 'Libra account address',
    });
})
    .command('get_transaction <txVersion>', 'Returns single Libra transaction by version', (argv) => {
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
})
    .command('get_transactions <fromVersion>', 'Returns Libra transactions by version (offset) and limit', (argv) => {
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
})
    .command('get_account_transaction <address> <sequenceNumber>', 'Returns single Libra transaction by account address and sequence number', (argv) => {
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
})
    .command('get_account_transactions <address> <fromVersion>', 'Returns Libra transactions by account address, version (offset) and limit', (argv) => {
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
})
    .command('get_metadata [txVersion]', 'Returns Libra blockchain metadata', (argv) => {
    argv.positional('txVersion', {
        type: 'number',
    });
})
    .command('get_currencies', 'Returns Libra blockchain supported currencies')
    .command('get_events <eventsKey>', 'Returns Libra blockchain events', (argv) => {
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
})
    .command('address_to_bech32 <address>', 'Convert Libra account address to Bech32 format', (yargs) => {
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
})
    .command('address_from_bech32 <address>', 'Convert Bech32 format to Libra account address', (yargs) => {
    yargs
        .positional('address', {
        type: 'string',
    })
        .positional('hrp', {
        type: 'string',
        default: 'tlb',
        choices: ['lbr', 'tlb'],
    });
})
    .command('submit <type>', 'Submit new transaction to Libra blockchain', submitYargs)
    .command('generate_keys', 'Generate new keys pair (random or by given seed)', (yargs) => {
    yargs.options('seed', { type: 'string' });
})
    .command('create_account', 'Create new account in Libra blockchain', (yargs) => {
    yargs
        .usage('If no key was provided a new set of keys will be generated as part of the account creation process. User may provide seed as base for the private key')
        .options('seed', { type: 'string' });
})
    .command('send_coins', 'Send coins to account in the Libra blockchain (new or existing)', (yargs) => {
    yargs
        .usage('If no seed was provide a new account will be generated, the new account details will be display if the operation will succeeded. ' +
        "If no currency was provide the default type is 'LBR'. " +
        'The send_coins command allow to add coins of currency type that is currently not associated to the account (in case of existing account) ' +
        'by adding the currency to account before submitting the P2P transaction. ' +
        "If no amount was provide the default amount is '100000000'.")
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
})
    .strict()
    .demandCommand();
export default args.argv;
