import { Signer } from '../../utils/signer';
import { BaseCommand, Logger } from './command';
import { bytesToHexString } from '../../utils/bytes';
import AccountKeys from '../../account/accountKeys';

export interface GenerateKeysCommand extends BaseCommand {
  _: ['generate_keys'];
  seed?: string;
}

export async function generateKeys(
  argv: GenerateKeysCommand,
  logger: Logger
): Promise<void> {
  const keyPair = Signer.generateKeyPair(argv.seed);
  const accountKeys = new AccountKeys(keyPair);
  logger.info('Private Key: ', bytesToHexString(accountKeys.privateKey));
  logger.info('Public Key: ', bytesToHexString(accountKeys.publicKey));
  logger.info('Auth Key: ', bytesToHexString(accountKeys.authKey));
  logger.info('Address: ', bytesToHexString(accountKeys.accountAddress));
}
