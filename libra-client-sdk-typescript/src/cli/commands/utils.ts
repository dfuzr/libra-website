import AccountKeys from '../../account/accountKeys';
import TestnetClient from '../../testnetClient';
import { Logger } from './command';
import { Bytes, bytesToHexString } from '../../utils/bytes';
import { Currency } from '../../interfaces/types';
import { Transaction } from '../../interfaces/libra-jsonrpc-types';

export async function mint(
  accountKeys: AccountKeys,
  amount: BigInt,
  currency: Currency
): Promise<Transaction> {
  const testnetClient = new TestnetClient();

  const nextAccountSeq = await testnetClient.mint(
    bytesToHexString(accountKeys.authKey),
    amount,
    currency
  );

  return await testnetClient.waitForTransactionUnsafe(
    TestnetClient.TESTNET_DESIGNATED_DEALER,
    nextAccountSeq - BigInt(1),
    false
  );
}

export function printAccountInfo(
  logger: Logger,
  address: string | undefined,
  version: BigInt,
  privateKey: Bytes,
  publicKey: Bytes
): void {
  logger.info('Address: ', address);
  if (version > BigInt(-1)) {
    logger.info('Version: ', version);
  }
  logger.info('Private Key: ', bytesToHexString(privateKey));
  logger.info('Public Key: ', bytesToHexString(publicKey));
}
