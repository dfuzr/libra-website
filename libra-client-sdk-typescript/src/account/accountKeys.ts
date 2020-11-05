import { KeyPair } from '../utils/signer';
import { SHA3 } from 'sha3';
import { Bytes, bytesToBuffer } from '../utils/bytes';

export default class AccountKeys {
  public readonly privateKey: Bytes;
  public readonly publicKey: Bytes;
  public readonly authKey: Bytes;
  public readonly accountAddress: Bytes;

  constructor(keyPair: KeyPair) {
    this.privateKey = keyPair.privateKey;
    this.publicKey = keyPair.publicKey;

    const hash = new SHA3(256);

    hash.update(Buffer.from(bytesToBuffer(keyPair.publicKey)));
    hash.update(Buffer.from([0])); // single key
    this.authKey = hash.digest();

    this.accountAddress = this.authKey.subarray(
      this.authKey.length - 16,
      this.authKey.length
    );
  }
}
