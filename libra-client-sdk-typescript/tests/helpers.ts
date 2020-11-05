import { LibraJsonRPCMethod } from '../src/interfaces/jsonRpcMethods';
import {
  Account,
  CurrencyInfo,
  Event,
  Metadata,
  Transaction,
} from '../src/interfaces/libra-jsonrpc-types';
import TestnetClient from '../src/testnetClient';

export const LIBRA_SERVER_URL = 'http://example.com';

export const testAccount = {
  libraAccountAddress: '1668f6be25668c1a17cd8caf6b8d2f25',
  libraAuthKey:
    'd939b0214b484bf4d71d08d0247b755a1668f6be25668c1a17cd8caf6b8d2f25',
  privateKey:
    '76e3de861d516283dc285e12ddadc95245a9e98f351c910b0ad722f790bac273',
  publicKey: 'f549a91fb9989883fb4d38b463308f3ea82074fb39ea74dae61f62e11bf55d25',
};

export const testAccount2 = {
  libraAccountAddress: '262e691ec8c7e3e23470d8c3ee26e1a7',
  libraAuthKey:
    '1f5e5201036a122697fb10ecac69cbfa262e691ec8c7e3e23470d8c3ee26e1a7',
  privateKey:
    'b13968ad5722ee203968f7deea565b2f4266f923b3292065b6e190c368f91036',
  publicKey: '9898254bbcc869db3ab550a3ba2811dc1dfa25e84b4279baf9a153baeb06055a',
};

const peerToPeerTransaction: Transaction = {
  bytes: '',
  events: [],
  gas_used: BigInt(0),
  hash: '',
  transaction: {
    chain_id: TestnetClient.TESTNET_CHAIN_ID,
    expiration_timestamp_secs: BigInt(1585282302),
    gas_currency: 'LBR',
    gas_unit_price: BigInt(0),
    max_gas_amount: BigInt(400000),
    public_key:
      '605be2c76200bf8418675554065096a0fd73759aca6879e78bdb3cbded95462b',
    script: {
      amount: BigInt(100000000000),
      arguments: [
        '{ADDRESS: DCBCEC72EBC4C64CC9EFC026480DC285}',
        '{U64: 1000000}',
        '{U8Vector: 0x}',
        '{U8Vector: 0x}',
      ],
      code:
        'a11ceb0b010000000701000202020403061004160205181d0735610896011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000c4c696272614163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b05110202',
      currency: 'LBR',
      metadata: '01537dfd0d1fbbf8b0019a48b03ebfb6c50d00',
      metadata_signature: '',
      receiver: 'D15F310CA4185D26FAB9497B13BF3C4C',
      type: 'peer_to_peer_with_metadata',
      type_arguments: ['Coin1'],
    },
    script_bytes: '',
    script_hash:
      '785530b91de4335ced642551f3b82329c3d5d7ab499cf8b9b1849a48a4103bd2',
    sender: '6F2E0FAFEBFD561F6786D838EA53E4ED',
    sequence_number: BigInt(0),
    signature:
      '0601b5f374ff9ae09acaf8c7c7efd8cfe0dd9c678b6b1b710bbd5f22dc1d4afc94366658d1f82d50a6222292b6584d706102e562a634c0ebd459236a81a67a0d',
    signature_scheme: 'Scheme::Ed25519',
    type: 'user',
  },
  version: BigInt(1),
  vm_status: {
    type: 'executed',
  },
};

const account: Account = {
  address: 'ce3e6f5beef5cb5d44062ac9646ff718',
  authentication_key:
    '9ed65309c17516533b4cf0d6fd3221ebce3e6f5beef5cb5d44062ac9646ff718',
  balances: [{ amount: BigInt(12345602630160), currency: 'LBR' }],
  delegated_key_rotation_capability: false,
  delegated_withdrawal_capability: false,
  is_frozen: false,
  received_events_key: '0000000000000000ce3e6f5beef5cb5d44062ac9646ff718',
  role: {
    type: 'parent_vasp',
    base_url: 'https://libra.org',
    compliance_key:
      'b7a3c12dc0c8c748ab07525b701122b88bd78f600c76342d27f25e5f92444cde',
    expiration_time: BigInt(18446744073709552000),
    human_name: 'testnet',
    num_children: 0,
  },
  sent_events_key: '0100000000000000ce3e6f5beef5cb5d44062ac9646ff718',
  sequence_number: BigInt(182),
};

const event: Event = {
  data: {
    type: 'sentpayment',
    amount: {
      amount: BigInt(100000000),
      currency: 'LBR',
    },
    metadata: '',
    receiver: '4ac94d88e90acd4cf0294e898e421e94',
    sender: '4ac94d88e90acd4cf0294e898e421e94',
  },
  key: '0100000000000000c1fda0ec67c1b87bfb9e883e2080e530',
  sequence_number: BigInt(1),
  transaction_version: BigInt(10099706),
};

export function generateTransactions(
  count = 3,
  fromVersion: BigInt = BigInt(0)
): Transaction[] {
  const txs: Transaction[] = [];
  for (let i = 1; i <= count; i++) {
    txs.push({
      ...peerToPeerTransaction,
      version: BigInt(fromVersion) + BigInt(i),
    });
  }
  return txs;
}

export function generateAccount(): Account {
  return account;
}

export function generateCurrencyInfo(): CurrencyInfo[] {
  return ['LBR', 'Coin1', 'Coin2'].map((currency) => ({
    code: currency,
    fractional_part: 1000,
    scaling_factor: 1000000,
    to_lbr_exchange_rate: 1,
    burn_events_key: '0c000000000000000000000000000000000000000a550c18',
    cancel_burn_events_key: '0e000000000000000000000000000000000000000a550c18',
    exchange_rate_update_events_key:
      '0f000000000000000000000000000000000000000a550c18',
    mint_events_key: '0b000000000000000000000000000000000000000a550c18',
    preburn_events_key: '0d000000000000000000000000000000000000000a550c18',
  }));
}

export function generateEvents(): Event[] {
  return [event];
}

export function generateMetadata(): Metadata {
  return {
    version: BigInt(0),
    timestamp: BigInt(1500000000),
    chain_id: 2,
    libra_version: BigInt(1),
    module_publishing_allowed: false,
    script_hash_allow_list: [
      '6d9d309c5cc6df4c7082817eb657904781b06b2071552ae762806fce3b623463',
      '570b8627a80ded5704775fc18060d58af396bb72565952fb0920221cc21ea9d1',
    ],
  };
}

export async function libraJsonRpcResponse<R>(
  result: R,
  chainID = TestnetClient.TESTNET_CHAIN_ID,
  version: BigInt = BigInt(0),
  timestampUsecs: BigInt = BigInt(0)
): Promise<LibraJsonRPCMethod<R>['response']> {
  return {
    result,
    libra_chain_id: chainID,
    libra_ledger_version: version,
    libra_ledger_timestampusec: timestampUsecs,
  };
}
