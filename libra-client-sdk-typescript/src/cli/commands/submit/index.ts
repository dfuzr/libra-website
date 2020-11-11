import AccountKeys from '../../../account/accountKeys';
import { KeyPair } from '../../../utils/signer';
import { RawTransaction } from '../../../lcs/libraTypes';
import LibraUtils from '../../../libraUtils';
import { LcsSerializer } from '../../../lcs/lcs/lcsSerializer';
import { BaseCommand, getClient, Logger } from '../command';
import {
  PeerToPeerSubmitCommand,
  submitPeerToPeerTransaction,
} from './submitPeerToPeerTransaction';
import {
  AddCurrencyToAccountSubmitCommand,
  submitAddCurrencyToAccountTransaction,
} from './submitAddCurrencyToAccountTransaction';
import {
  GenericTransactionSubmitCommand,
  submitGenericTypeTransaction,
} from './submitGenericTypeTransaction';
import { CliError } from '../../cliError';
import { bytesFromHexString, bytesToHexString } from '../../../utils/bytes';
import { Currency } from '../../../interfaces/types';
import {
  ADD_CURRENCY_TO_ACCOUNT,
  PEER_TO_PEER_WITH_METADATA,
} from '../../args/submitArgs';

export interface BaseSubmitCommand extends BaseCommand {
  _: ['submit', string];
  senderAddress: string;
  sequenceNumber: BigInt;
  currency: Currency;
  gasCurrency: Currency;
  gasUnitPrice: BigInt;
  maxGasAmount: BigInt;
  expirationTime: BigInt;
  network: number;
  privateKey: string;
  publicKey: string;
}

function getAccountKeys(argv: BaseSubmitCommand): AccountKeys {
  return new AccountKeys(<KeyPair>{
    privateKey: bytesFromHexString(argv.privateKey),
    publicKey: bytesFromHexString(argv.publicKey),
  });
}

export async function executeSubmit(
  argv: BaseSubmitCommand,
  tx: RawTransaction
): Promise<void> {
  const accountKeys = getAccountKeys(argv);

  const signedTransaction = LibraUtils.signTransaction(tx, accountKeys);

  const signedTxSerializer = new LcsSerializer();
  signedTransaction.serialize(signedTxSerializer);

  const signedBytes = signedTxSerializer.getBytes();
  const hexTransaction = bytesToHexString(signedBytes);

  try {
    await getClient().submitRawSignedTransaction(hexTransaction);
  } catch (e) {
    throw new CliError('Failed to execute submit', e);
  }

  const transactionHash = LibraUtils.hashTransaction(signedBytes);

  await getClient().waitForTransaction(
    argv.senderAddress,
    argv.sequenceNumber,
    false,
    transactionHash,
    argv.expirationTime
  );
}

export async function submit(
  argv: BaseSubmitCommand,
  logger: Logger
): Promise<void> {
  const type = argv._[1];

  if (type === PEER_TO_PEER_WITH_METADATA) {
    await submitPeerToPeerTransaction(argv as PeerToPeerSubmitCommand);
  } else if (type === ADD_CURRENCY_TO_ACCOUNT) {
    await submitAddCurrencyToAccountTransaction(
      argv as AddCurrencyToAccountSubmitCommand
    );
  } else {
    await submitGenericTypeTransaction(
      type,
      argv as GenericTransactionSubmitCommand
    );
  }
}
