import { execute } from '../src/cli';
import {
  generateAccount,
  generateCurrencyInfo,
  generateEvents,
  generateMetadata,
  generateTransactions,
} from './helpers';
import { GetAccountCommand } from '../src/cli/commands/getAccount';
import { GetTransactionCommand } from '../src/cli/commands/getTransaction';
import { GetTransactionsCommand } from '../src/cli/commands/getTransactions';
import { GetAccountTransactionCommand } from '../src/cli/commands/getAccountTransaction';
import { GetMetadataCommand } from '../src/cli/commands/getMetadata';
import { GetCurrenciesCommand } from '../src/cli/commands/getCurrencies';
import { AddressToBech32Command } from '../src/cli/commands/convertAddressToBech32';
import { AddressFromBech32Command } from '../src/cli/commands/convertAddressFromBech32';
import { GenerateKeysCommand } from '../src/cli/commands/generateKeys';
import { GetAccountTransactionsCommand } from '../src/cli/commands/getAccountTransactions';
import { GetEventsCommand } from '../src/cli/commands/getEvents';
import {
  PeerToPeerSubmitCommand,
  submitPeerToPeerTransaction,
} from '../src/cli/commands/submit/submitPeerToPeerTransaction';
import {
  AddCurrencyToAccountSubmitCommand,
  submitAddCurrencyToAccountTransaction,
} from '../src/cli/commands/submit/submitAddCurrencyToAccountTransaction';
import {
  GenericTransactionSubmitCommand,
  submitGenericTypeTransaction,
} from '../src/cli/commands/submit/submitGenericTypeTransaction';
import { Stdlib } from '../src/lcs/libraStdlib';
import { CreateAccountCommand } from '../src/cli/commands/createAccount';
import AccountKeys from '../src/account/accountKeys';
import { KeyPair } from '../src/utils/signer';
import TestnetClient from '../src/testnetClient';
import LibraClient from '../src/libraClient';
import LibraUtils from '../src/libraUtils';
import { SendCoinsCommand } from '../src/cli/commands/sendCoins';
import { bytesToHexString } from '../src/utils/bytes';
import resetAllMocks = jest.resetAllMocks;
import { PEER_TO_PEER_WITH_METADATA } from '../src/cli/args/submitArgs';

const ACCOUNT_ADDRESS = 'cbdb294078d276fa9189399714282b5d';

function getLogger() {
  return {
    info: jest.fn(),
    error: jest.fn(),
    group: jest.fn(),
    groupEnd: jest.fn(),
  };
}

jest.mock('../src/libraClient');
jest.mock('../src/libraUtils');
jest.mock('../src/testnetClient');
jest.mock('../src/cli/commands/submit/submitPeerToPeerTransaction');
jest.mock('../src/cli/commands/submit/submitAddCurrencyToAccountTransaction');
jest.mock('../src/cli/commands/submit/submitGenericTypeTransaction');

const mockedClient = <jest.MockedClass<typeof LibraClient>>LibraClient;
const mockedUtils = <jest.Mocked<typeof LibraUtils>>LibraUtils;
const mockedTestClient = <jest.MockedClass<typeof TestnetClient>>TestnetClient;

describe('CLI', () => {
  describe('get_account', () => {
    it('execute libraClient.getAccount with required values and print returned account', async () => {
      const argv: GetAccountCommand = {
        _: ['get_account'],
        address: ACCOUNT_ADDRESS,
      };

      const account = generateAccount();

      mockedClient.prototype.getAccount.mockReturnValue(
        Promise.resolve(account)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getAccount).toBeCalledWith(ACCOUNT_ADDRESS);
      expect(logger.info).toBeCalledWith(account);
    });
  });

  describe('get_transaction', () => {
    it('execute libraClient.getTransactions for specific transaction and print returned transaction in prettify mode', async () => {
      const argv: GetTransactionCommand = {
        _: ['get_transaction'],
        txVersion: BigInt(3),
        includeEvents: false,
        prettify: true,
      };

      const [transaction] = generateTransactions(1);

      mockedClient.prototype.getTransactions.mockReturnValue(
        Promise.resolve([transaction])
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getTransactions).toBeCalledWith(
        BigInt(3),
        1,
        false
      );
      expect(logger.info).toBeCalledTimes(7);
      expect(logger.info).nthCalledWith(
        1,
        'Type:',
        'peer_to_peer_with_metadata'
      );
      expect(logger.info).nthCalledWith(2, 'Version:', BigInt(1));
      expect(logger.info).nthCalledWith(
        3,
        'Source:',
        '6f2e0fafebfd561f6786d838ea53e4ed'.toUpperCase()
      );
      expect(logger.info).nthCalledWith(
        4,
        'Target:',
        'd15f310ca4185d26fab9497b13bf3c4c'.toUpperCase()
      );
      expect(logger.info).nthCalledWith(5, 'Amount:', BigInt(100000000000));
      expect(logger.info).nthCalledWith(6, 'Types:', 'LBR');
      expect(logger.info).nthCalledWith(
        7,
        '--------------------------------------------------------'
      );
    });

    it('execute libraClient.getTransactions for specific transaction and print returned transaction directly from response', async () => {
      const argv: GetTransactionCommand = {
        _: ['get_transaction'],
        txVersion: BigInt(3),
        includeEvents: false,
        prettify: false,
      };

      const [transaction] = generateTransactions(1);

      mockedClient.prototype.getTransactions.mockReturnValue(
        Promise.resolve([transaction])
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getTransactions).toBeCalledWith(
        BigInt(3),
        1,
        false
      );
      expect(logger.info).toBeCalledWith(transaction);
      expect(logger.info).toBeCalledTimes(1);
    });
  });

  describe('get_transactions', () => {
    it('execute libraClient.getTransactions for number of transactions and print returned transactions in prettify mode', async () => {
      const argv: GetTransactionsCommand = {
        _: ['get_transactions'],
        fromVersion: BigInt(4),
        limit: 2,
        includeEvents: false,
        prettify: true,
      };

      const transactions = generateTransactions(5);

      mockedClient.prototype.getTransactions.mockReturnValue(
        Promise.resolve(transactions)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getTransactions).toBeCalledWith(
        BigInt(3),
        1,
        false
      );
      expect(logger.info).toBeCalledTimes(35);
      expect(logger.info).nthCalledWith(
        1,
        'Type:',
        'peer_to_peer_with_metadata'
      );
      expect(logger.info).nthCalledWith(2, 'Version:', BigInt(1));
      expect(logger.info).nthCalledWith(
        3,
        'Source:',
        '6f2e0fafebfd561f6786d838ea53e4ed'.toUpperCase()
      );
      expect(logger.info).nthCalledWith(
        4,
        'Target:',
        'd15f310ca4185d26fab9497b13bf3c4c'.toUpperCase()
      );
      expect(logger.info).nthCalledWith(5, 'Amount:', BigInt(100000000000));
      expect(logger.info).nthCalledWith(6, 'Types:', 'LBR');
      expect(logger.info).nthCalledWith(
        7,
        '--------------------------------------------------------'
      );
    });

    it('execute libraClient.getTransactions for number of transactions and print returned transactions directly from response', async () => {
      const argv: GetTransactionsCommand = {
        _: ['get_transactions'],
        fromVersion: BigInt(4),
        limit: 2,
        includeEvents: false,
        prettify: false,
      };

      const transactions = generateTransactions(5);

      mockedClient.prototype.getTransactions.mockReturnValue(
        Promise.resolve(transactions)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getTransactions).toBeCalledWith(
        BigInt(3),
        1,
        false
      );
      expect(logger.info).toBeCalledWith(transactions);
      expect(logger.info).toBeCalledTimes(1);
    });
  });

  describe('get_account_transaction', () => {
    it('execute libraClient.getAccountTransaction for specific transaction and print returned transaction in prettify mode', async () => {
      const argv: GetAccountTransactionCommand = {
        _: ['get_account_transaction'],
        address: ACCOUNT_ADDRESS,
        sequenceNumber: BigInt(1),
        includeEvents: false,
        prettify: true,
      };

      const [transaction] = generateTransactions(1);

      mockedClient.prototype.getAccountTransaction.mockReturnValue(
        Promise.resolve(transaction)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getAccountTransaction).toBeCalledWith(
        ACCOUNT_ADDRESS,
        BigInt(1),
        false
      );
      expect(logger.info).toBeCalledTimes(7);
      expect(logger.info).nthCalledWith(
        1,
        'Type:',
        'peer_to_peer_with_metadata'
      );
      expect(logger.info).nthCalledWith(2, 'Version:', BigInt(1));
      expect(logger.info).nthCalledWith(
        3,
        'Source:',
        '6f2e0fafebfd561f6786d838ea53e4ed'.toUpperCase()
      );
      expect(logger.info).nthCalledWith(
        4,
        'Target:',
        'd15f310ca4185d26fab9497b13bf3c4c'.toUpperCase()
      );
      expect(logger.info).nthCalledWith(5, 'Amount:', BigInt(100000000000));
      expect(logger.info).nthCalledWith(6, 'Types:', 'LBR');
      expect(logger.info).nthCalledWith(
        7,
        '--------------------------------------------------------'
      );
    });

    it('execute libraClient.getAccountTransaction for specific transaction and print returned transaction directly from response', async () => {
      const argv: GetAccountTransactionCommand = {
        _: ['get_account_transaction'],
        address: ACCOUNT_ADDRESS,
        sequenceNumber: BigInt(1),
        includeEvents: false,
        prettify: false,
      };

      const [transaction] = generateTransactions(1);

      mockedClient.prototype.getAccountTransaction.mockReturnValue(
        Promise.resolve(transaction)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getAccountTransaction).toBeCalledWith(
        ACCOUNT_ADDRESS,
        BigInt(1),
        false
      );

      expect(logger.info).toBeCalledWith(transaction);
      expect(logger.info).toBeCalledTimes(1);
    });
  });

  describe('get_account_transactions', () => {
    it('execute libraClient.getAccountTransactions for number of transactions and print returned transactions in prettify mode', async () => {
      const argv: GetAccountTransactionsCommand = {
        _: ['get_account_transactions'],
        address: ACCOUNT_ADDRESS,
        fromVersion: BigInt(3),
        limit: 1,
        includeEvents: false,
        prettify: true,
      };

      const transactions = generateTransactions(5);

      mockedClient.prototype.getAccountTransactions.mockReturnValue(
        Promise.resolve(transactions)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getAccountTransactions).toBeCalledWith(
        ACCOUNT_ADDRESS,
        BigInt(3),
        1,
        false
      );
      expect(logger.info).toBeCalledTimes(35);
      expect(logger.info).nthCalledWith(
        1,
        'Type:',
        'peer_to_peer_with_metadata'
      );
      expect(logger.info).nthCalledWith(2, 'Version:', BigInt(1));
      expect(logger.info).nthCalledWith(
        3,
        'Source:',
        '6f2e0fafebfd561f6786d838ea53e4ed'.toUpperCase()
      );
      expect(logger.info).nthCalledWith(
        4,
        'Target:',
        'd15f310ca4185d26fab9497b13bf3c4c'.toUpperCase()
      );
      expect(logger.info).nthCalledWith(5, 'Amount:', BigInt(100000000000));
      expect(logger.info).nthCalledWith(6, 'Types:', 'LBR');
      expect(logger.info).nthCalledWith(
        7,
        '--------------------------------------------------------'
      );
    });

    it('execute libraClient.getAccountTransactions for number of transactions and print returned transactions directly from response', async () => {
      const argv: GetAccountTransactionsCommand = {
        _: ['get_account_transactions'],
        address: ACCOUNT_ADDRESS,
        fromVersion: BigInt(3),
        limit: 1,
        includeEvents: false,
        prettify: false,
      };

      const transactions = generateTransactions(5);

      mockedClient.prototype.getAccountTransactions.mockReturnValue(
        Promise.resolve(transactions)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getAccountTransactions).toBeCalledWith(
        ACCOUNT_ADDRESS,
        BigInt(3),
        1,
        false
      );
      expect(logger.info).toBeCalledWith(transactions);
      expect(logger.info).toBeCalledTimes(1);
    });
  });

  describe('get_metadata', () => {
    it('execute libraClient.getMetadata with required values and print returned metadate', async () => {
      const argv: GetMetadataCommand = {
        _: ['get_metadata'],
        txVersion: BigInt(1),
      };

      const metadata = generateMetadata();

      mockedClient.prototype.getMetadata.mockReturnValue(
        Promise.resolve(metadata)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getMetadata).toBeCalledWith(BigInt(1));
      expect(logger.info).toBeCalledWith(metadata);
      expect(logger.info).toBeCalledTimes(1);
    });
  });

  describe('get_currencies', () => {
    it('execute libraClient.getCurrencies with required values and print returned data regarding currencies', async () => {
      const argv: GetCurrenciesCommand = {
        _: ['get_currencies'],
      };

      const currency = generateCurrencyInfo();

      mockedClient.prototype.getCurrencies.mockReturnValue(
        Promise.resolve(currency)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getCurrencies).toBeCalledWith();
      expect(logger.info).toBeCalledWith(currency);
      expect(logger.info).toBeCalledTimes(1);
    });
  });

  describe('get_events', () => {
    it('execute libraClient.getEvents with required values and print returned events list', async () => {
      const argv: GetEventsCommand = {
        _: ['get_events'],
        eventsKey: '123',
        start: BigInt(0),
        limit: 2,
      };

      const events = generateEvents();

      mockedClient.prototype.getEvents.mockReturnValue(Promise.resolve(events));

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedClient.prototype.getEvents).toBeCalledWith(
        '123',
        BigInt(0),
        2
      );
      expect(logger.info).toBeCalledWith(events);
      expect(logger.info).toBeCalledTimes(1);
    });
  });

  describe('address_to_bech32', () => {
    it('encode given address to bech32', async () => {
      const argv: AddressToBech32Command = {
        _: ['address_to_bech32'],
        address: ACCOUNT_ADDRESS,
        subAddress: 'cbdb294078d276fa',
        hrp: 'lbr',
      };

      mockedUtils.encodeAddress.mockReturnValue(
        'lbr1q89ak22q0rf8d7533yuew9pg9dwuhkefgpudyah6tqeec9'
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedUtils.encodeAddress).toBeCalledWith(
        ACCOUNT_ADDRESS,
        'cbdb294078d276fa',
        'lbr'
      );
      expect(logger.info).toBeCalledTimes(2);
      expect(logger.info).toHaveBeenNthCalledWith(
        1,
        'Original address',
        'cbdb294078d276fa9189399714282b5d',
        'cbdb294078d276fa'
      );
      expect(logger.info).toHaveBeenNthCalledWith(
        2,
        'Encoded address',
        'lbr1q89ak22q0rf8d7533yuew9pg9dwuhkefgpudyah6tqeec9'
      );
    });
  });

  describe('address_from_bech32', () => {
    it('decode encoded address', async () => {
      const argv: AddressFromBech32Command = {
        _: ['address_from_bech32'],
        address: 'tlb1qyy62xe6lsawcahh2vpm26x6kpgpydzk0qfrg4ncc2q6zx',
        hrp: 'tlb',
      };

      mockedUtils.decodeAddress.mockReturnValue([
        '09a51b3afc3aec76f75303b568dab050',
        '1234567812345678',
      ]);

      const logger = getLogger();

      await execute(argv, logger);

      expect(mockedUtils.decodeAddress).toBeCalledWith(
        'tlb',
        'tlb1qyy62xe6lsawcahh2vpm26x6kpgpydzk0qfrg4ncc2q6zx'
      );
      expect(logger.info).toBeCalledTimes(2);
      expect(logger.info).toHaveBeenNthCalledWith(
        1,
        'Encoded address',
        'tlb1qyy62xe6lsawcahh2vpm26x6kpgpydzk0qfrg4ncc2q6zx'
      );
      expect(logger.info).toHaveBeenNthCalledWith(
        2,
        'Decoded address',
        '09a51b3afc3aec76f75303b568dab050',
        '1234567812345678'
      );
    });
  });

  describe('submit', () => {
    afterEach(() => {
      resetAllMocks();
    });

    it('peer to peer - verify correct submit method is executed', async () => {
      const argv: PeerToPeerSubmitCommand = {
        _: ['submit', 'PeerToPeerWithMetadata'],
        receiverAddress: '',
        senderAddress: '',
        sequenceNumber: BigInt(0),
        currency: 'LBR',
        gasCurrency: 'LBR',
        gasUnitPrice: BigInt(0),
        maxGasAmount: BigInt(10),
        expirationTime: BigInt(2),
        network: 2,
        privateKey: '',
        publicKey: '',
        amount: BigInt(10),
      };

      const logger = getLogger();

      await execute(argv, logger);

      expect(submitPeerToPeerTransaction).toBeCalledWith(argv);
      expect(submitAddCurrencyToAccountTransaction).not.toBeCalled();
      expect(submitGenericTypeTransaction).not.toBeCalled();
    });

    it('add currency to address - verify correct submit method is executed', async () => {
      const argv: AddCurrencyToAccountSubmitCommand = {
        _: ['submit', 'AddCurrencyToAccount'],
        senderAddress: '',
        sequenceNumber: BigInt(0),
        currency: 'LBR',
        gasCurrency: 'LBR',
        gasUnitPrice: BigInt(0),
        maxGasAmount: BigInt(10),
        expirationTime: BigInt(2),
        network: 2,
        privateKey: '',
        publicKey: '',
      };

      const logger = getLogger();

      await execute(argv, logger);

      expect(submitAddCurrencyToAccountTransaction).toBeCalledWith(argv);
      expect(submitGenericTypeTransaction).not.toBeCalled();
      expect(submitPeerToPeerTransaction).not.toBeCalled();
    });

    it('generic transaction - RotateDualAttestationInfo - verify correct submit method is executed', async () => {
      const argv: GenericTransactionSubmitCommand = {
        _: ['submit', 'RotateDualAttestationInfo'],
        senderAddress: '',
        sequenceNumber: BigInt(0),
        currency: 'LBR',
        gasCurrency: 'LBR',
        gasUnitPrice: BigInt(0),
        maxGasAmount: BigInt(10),
        expirationTime: BigInt(2),
        network: 2,
        privateKey: '',
        publicKey: '',
        stdlibEncodeFunction: Stdlib.encodeRotateDualAttestationInfoScript,
        new_key: '',
        new_url: '',
      };

      const logger = getLogger();

      await execute(argv, logger);

      expect(submitGenericTypeTransaction).toBeCalledWith(
        'RotateDualAttestationInfo',
        argv
      );
      expect(submitAddCurrencyToAccountTransaction).not.toBeCalled();
      expect(submitPeerToPeerTransaction).not.toBeCalled();
    });
  });

  describe('generate_keys', () => {
    it('verify generated keys are been displayed correctly to user', async () => {
      const argv: GenerateKeysCommand = {
        _: ['generate_keys'],
        seed:
          'ac22b1838767a8de44cc145db23102dca885092b3f24f167e85f12ba33315955',
      };

      const logger = getLogger();

      await execute(argv, logger);

      expect(logger.info).toBeCalledTimes(4);
    });
  });

  describe('create_account', () => {
    it('verify create account flow execute correctly', async () => {
      const argv: CreateAccountCommand = {
        _: ['create_account'],
      };

      const privateKey =
        '0a7d86d9b1d2c51a60152bc5f3d287f83144cd6be5d05eb997c79bba50ac171c';
      const publicKey =
        '431cf93859b90dc297eb7606a59c5926990c38d8dfdeb8645e9bb43b1822ea8b';

      const accountKeys = new AccountKeys(<KeyPair>{
        privateKey: Buffer.from(privateKey, 'hex'),
        publicKey: Buffer.from(publicKey, 'hex'),
      });
      mockedUtils.generateAccountKeys.mockReturnValue(accountKeys);
      const mockedNextAccountSeq = BigInt(3);
      mockedTestClient.prototype.mint.mockReturnValue(
        Promise.resolve(mockedNextAccountSeq)
      );

      const [transaction] = generateTransactions(1);

      mockedTestClient.prototype.waitForTransactionUnsafe.mockReturnValue(
        Promise.resolve(transaction)
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(logger.info).toBeCalledTimes(4);
      expect(logger.info).toHaveBeenNthCalledWith(
        1,
        'Address: ',
        transaction.transaction?.script?.receiver
      );
      expect(logger.info).toHaveBeenNthCalledWith(
        2,
        'Version: ',
        transaction.version
      );
      expect(logger.info).toHaveBeenNthCalledWith(
        3,
        'Private Key: ',
        bytesToHexString(accountKeys.privateKey)
      );
      expect(logger.info).toHaveBeenNthCalledWith(
        4,
        'Public Key: ',
        bytesToHexString(accountKeys.publicKey)
      );
      expect(mockedTestClient.prototype.mint).toBeCalledWith(
        bytesToHexString(accountKeys.authKey),
        BigInt(1000000),
        'LBR'
      );
      expect(
        mockedTestClient.prototype.waitForTransactionUnsafe
      ).toBeCalledWith(
        TestnetClient.TESTNET_DESIGNATED_DEALER,
        mockedNextAccountSeq - BigInt(1),
        false
      );
    });
  });

  describe('send_coins', () => {
    it('verify send coins flow execute correctly', async () => {
      const seed =
        '090924a85666b9164712e77334c9c23f229c506c1d1163c092de00e915f4b59b';
      const publicKey =
        'd8d97a5879873d5e0d8b51dff911ccd7ed7d36deddc16da7faf2ca7db5f70cc7';
      const address = '572c88a9d7d324e74694128a26beda35';

      const argv: SendCoinsCommand = {
        _: ['send_coins'],
        seed: seed,
        amount: BigInt(1800000),
        currency: 'Coin2',
      };

      const accountKeys = new AccountKeys(<KeyPair>{
        privateKey: Buffer.from(seed, 'hex'),
        publicKey: Buffer.from(publicKey, 'hex'),
      });

      mockedUtils.generateAccountKeys.mockReturnValue(accountKeys);

      mockedClient.prototype.getAccount.mockReturnValue(
        Promise.resolve(generateAccount())
      );

      const logger = getLogger();

      await execute(argv, logger);

      expect(LibraUtils.generateAccountKeys).toBeCalled();
      expect(logger.info).toBeCalledTimes(3);
      expect(logger.info).toHaveBeenNthCalledWith(1, 'Address: ', address);
      expect(logger.info).toHaveBeenNthCalledWith(
        2,
        'Private Key: ',
        bytesToHexString(accountKeys.privateKey)
      );
      expect(logger.info).toHaveBeenNthCalledWith(
        3,
        'Public Key: ',
        bytesToHexString(accountKeys.publicKey)
      );
      expect(mockedClient.prototype.getAccount).toBeCalled();
      expect(submitAddCurrencyToAccountTransaction).toBeCalled();
      expect(mockedTestClient.prototype.mint).toBeCalled();
    });
  });
});
