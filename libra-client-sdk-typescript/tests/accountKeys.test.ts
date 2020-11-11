import { KeyPair } from '../src/utils/signer';
import AccountKeys from '../src/account/accountKeys';

describe('AccountKeys', () => {
  it('returns correct keys for account from a given KeyPair', () => {
    const keyPair: KeyPair = {
      privateKey: Buffer.from(
        '76e3de861d516283dc285e12ddadc95245a9e98f351c910b0ad722f790bac273',
        'hex'
      ),
      publicKey: Buffer.from(
        'f549a91fb9989883fb4d38b463308f3ea82074fb39ea74dae61f62e11bf55d25',
        'hex'
      ),
    };

    const expectedAuthKey = Buffer.from(
      'd939b0214b484bf4d71d08d0247b755a1668f6be25668c1a17cd8caf6b8d2f25',
      'hex'
    );
    const expectedAccountAddress = Buffer.from(
      '1668f6be25668c1a17cd8caf6b8d2f25',
      'hex'
    );

    const accountKeys = new AccountKeys(keyPair);
    expect(accountKeys.publicKey).toStrictEqual(keyPair.publicKey);
    expect(accountKeys.privateKey).toStrictEqual(keyPair.privateKey);
    expect(accountKeys.authKey).toStrictEqual(expectedAuthKey);
    expect(accountKeys.accountAddress).toStrictEqual(expectedAccountAddress);
  });
});
