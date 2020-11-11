import { Logger } from './command';
import LibraUtils from '../../libraUtils';
import { createAccountInClient } from './createAccount';
import {
  AddCurrencyToAccountSubmitCommand,
  submitAddCurrencyToAccountTransaction,
} from './submit/submitAddCurrencyToAccountTransaction';
import { mint, printAccountInfo } from './utils';
import { GetAccountCommand, getAccountFromClient } from './getAccount';
import AccountKeys from '../../account/accountKeys';
import { bytesToHexString } from '../../utils/bytes';
import { Currency } from '../../interfaces/types';
import { Account } from '../../interfaces/libra-jsonrpc-types';

export interface SendCoinsCommand {
  _: ['send_coins'];
  seed: string;
  currency: Currency;
  amount: BigInt;
}

export async function sendCoins(
  argv: SendCoinsCommand,
  logger: Logger
): Promise<void> {
  const accountKeys = LibraUtils.generateAccountKeys(argv.seed);

  const getAccountArgv: GetAccountCommand = {
    _: ['get_account'],
    address: bytesToHexString(accountKeys.accountAddress),
  };

  const accountInfo = await getAccountFromClient(getAccountArgv);

  if (!accountInfo) {
    await createAccountInClient(accountKeys, argv.amount, argv.currency);
  } else {
    await addCoinsToExistingAccount(accountInfo, argv, accountKeys);
  }

  printAccountInfo(
    logger,
    bytesToHexString(accountKeys.accountAddress),
    BigInt(-1),
    accountKeys.privateKey,
    accountKeys.publicKey
  );
}

async function addCoinsToExistingAccount(
  accountInfo: Account,
  argv: SendCoinsCommand,
  accountKeys: AccountKeys
) {
  const currencyBalances = accountInfo.balances.filter(
    (currency) => currency.currency === argv.currency
  );

  if (!currencyBalances.length) {
    const addCurrencyToAccountArgv: AddCurrencyToAccountSubmitCommand = {
      _: ['submit', 'AddCurrencyToAccount'],
      currency: argv.currency,
      expirationTime: BigInt(Math.trunc(new Date().getTime() / 1000 + 60 * 10)),
      gasCurrency: 'LBR',
      gasUnitPrice: BigInt(0),
      maxGasAmount: BigInt(1000000),
      network: 2,
      privateKey: bytesToHexString(accountKeys.privateKey),
      publicKey: bytesToHexString(accountKeys.publicKey),
      senderAddress: bytesToHexString(accountKeys.accountAddress),
      sequenceNumber: accountInfo.sequence_number,
    };

    await submitAddCurrencyToAccountTransaction(addCurrencyToAccountArgv);
  }

  await mint(accountKeys, argv.amount, argv.currency);
}
