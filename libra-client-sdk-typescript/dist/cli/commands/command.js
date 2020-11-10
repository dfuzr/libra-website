import TestnetClient from '../../testnetClient';
import LibraClient from '../../libraClient';
export const commandsList = [
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
export function getClient() {
    return new LibraClient(TestnetClient.TESTNET_JSONRPC_URL, TestnetClient.TESTNET_CHAIN_ID);
}
