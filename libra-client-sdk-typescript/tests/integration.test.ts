import LibraClient from '../src/libraClient';
import LibraUtils from '../src/libraUtils';
import { testAccount, testAccount2 } from './helpers';
import AccountKeys from '../src/account/accountKeys';
import { KeyPair, Signer } from '../src/utils/signer';
import TestnetClient from '../src/testnetClient';
import { LcsSerializer } from '../src/lcs/lcs/lcsSerializer';
import { Stdlib } from '../src/lcs/libraStdlib';
import {
  ChainId,
  RawTransaction,
  TransactionPayloadVariantScript,
} from '../src/lcs/libraTypes';
import { bytesToBuffer, bytesToHexString } from '../src/utils/bytes';
import { Amount } from '../src/interfaces/libra-jsonrpc-types';

async function createVaspAccount(): Promise<AccountKeys> {
  const accountKeys = LibraUtils.generateAccountKeys();
  const testnetClient = new TestnetClient();

  const nextAccountSeq = await testnetClient.mint(
    bytesToHexString(accountKeys.authKey),
    BigInt(1000000),
    'LBR'
  );

  await testnetClient.waitForTransactionUnsafe(
    TestnetClient.TESTNET_DESIGNATED_DEALER,
    nextAccountSeq - BigInt(1),
    false
  );

  return accountKeys;
}

async function rotateComplianceKey(
  accountKeys: AccountKeys,
  client: LibraClient
) {
  const account = await client.getAccount(accountKeys.accountAddress);
  const txSeq = account!.sequence_number;
  const senderComplainceKeys = Signer.generateKeyPair();
  const newUrl = Buffer.from('https://test.com');
  const rotateComplainceKeyScript = Stdlib.encodeRotateDualAttestationInfoScript(
    newUrl,
    bytesToBuffer(senderComplainceKeys.publicKey)
  );

  const rotateTxExpiration = BigInt(
    Math.trunc(new Date().getTime() / 1000 + 60 * 10)
  );
  const rotateRawTransaction = new RawTransaction(
    LibraUtils.makeAccountAddress(accountKeys.accountAddress),
    txSeq,
    new TransactionPayloadVariantScript(rotateComplainceKeyScript),
    BigInt(1000000),
    BigInt(0),
    'LBR',
    rotateTxExpiration,
    new ChainId(TestnetClient.TESTNET_CHAIN_ID)
  );

  const rotateSignedTransaction = LibraUtils.signTransaction(
    rotateRawTransaction,
    accountKeys
  );
  const rotateSignedTxSerializer = new LcsSerializer();
  rotateSignedTransaction.serialize(rotateSignedTxSerializer);
  const rotateSignedTransactionBytes = rotateSignedTxSerializer.getBytes();

  const rotateTransactionHex = Buffer.from(
    rotateSignedTransactionBytes
  ).toString('hex');

  await client.submitRawSignedTransaction(rotateTransactionHex);
  await client.waitForTransaction(
    accountKeys.accountAddress,
    txSeq,
    false,
    LibraUtils.hashTransaction(Buffer.from(rotateSignedTransactionBytes)),
    rotateTxExpiration
  );
  return senderComplainceKeys;
}

describe('Integration', () => {
  it('should mint', async () => {
    const accountKeys = new AccountKeys(<KeyPair>{
      privateKey: Buffer.from(testAccount.privateKey, 'hex'),
      publicKey: Buffer.from(testAccount.publicKey, 'hex'),
    });

    const testnetClient = new TestnetClient();

    const nextAccountSeq = await testnetClient.mint(
      bytesToHexString(accountKeys.authKey),
      BigInt(1000000000),
      'LBR'
    );

    const transaction = await testnetClient.waitForTransactionUnsafe(
      TestnetClient.TESTNET_DESIGNATED_DEALER,
      nextAccountSeq - BigInt(1),
      false
    );

    expect(transaction.transaction?.sender?.toUpperCase()).toBe(
      TestnetClient.TESTNET_DESIGNATED_DEALER.toUpperCase()
    );
    expect(transaction.transaction?.sequence_number).toBe(
      nextAccountSeq - BigInt(1)
    );
  }, 20000);

  it('should create P2P transaction manually, sign, submit and wait', async () => {
    const client = new TestnetClient();
    const account = await client.getAccount(testAccount.libraAccountAddress);

    const txSeq = account!.sequence_number;

    const [metadata, metadataSignature] = LibraUtils.createGeneralMetadata();

    const p2pTransaction = LibraUtils.createP2PTransaction(
      testAccount.libraAccountAddress,
      txSeq,
      'LBR',
      testAccount2.libraAccountAddress,
      BigInt(555000000),
      'LBR',
      BigInt(0),
      BigInt(1000000),
      BigInt(Math.trunc(new Date().getTime() / 1000 + 60 * 10)),
      TestnetClient.TESTNET_CHAIN_ID,
      metadata,
      metadataSignature
    );

    const accountKeys = new AccountKeys(<KeyPair>{
      privateKey: testAccount.privateKey,
      publicKey: testAccount.publicKey,
    });

    const signedTransaction = LibraUtils.signTransaction(
      p2pTransaction,
      accountKeys
    );

    const signedTxSerializer = new LcsSerializer();
    signedTransaction.serialize(signedTxSerializer);

    const transactionHex = Buffer.from(signedTxSerializer.getBytes()).toString(
      'hex'
    );

    await client.submitRawSignedTransaction(transactionHex);
  }, 10000);

  it('should create P2P transaction with travel rule', async () => {
    const client = new TestnetClient();
    const senderAccountKeys = await createVaspAccount();
    const receiverAccountKeys = await createVaspAccount();
    const receiverComplianceKeys = await rotateComplianceKey(
      receiverAccountKeys,
      client
    );
    const account = await client.getAccount(senderAccountKeys.accountAddress);
    const txSeq = account!.sequence_number;
    const amount = BigInt(123000000);

    const metadata = LibraUtils.createTravelRuleMetadata('abcd1234');
    const metadataSignature = LibraUtils.signTravelRuleMetadata(
      metadata,
      senderAccountKeys.accountAddress,
      amount,
      bytesToBuffer(receiverComplianceKeys.privateKey)
    );

    try {
      const p2pTransaction = LibraUtils.createP2PTransaction(
        bytesToHexString(senderAccountKeys.accountAddress),
        txSeq,
        'LBR',
        bytesToHexString(receiverAccountKeys.accountAddress),
        BigInt(555000000),
        'LBR',
        BigInt(0),
        BigInt(1000000),
        BigInt(Math.trunc(new Date().getTime() / 1000 + 60 * 10)),
        TestnetClient.TESTNET_CHAIN_ID,
        metadata,
        metadataSignature
      );

      const signedTransaction = LibraUtils.signTransaction(
        p2pTransaction,
        senderAccountKeys
      );

      const signedTxSerializer = new LcsSerializer();
      signedTransaction.serialize(signedTxSerializer);

      const transactionHex = Buffer.from(
        signedTxSerializer.getBytes()
      ).toString('hex');

      await client.submitRawSignedTransaction(transactionHex);

      const blockchainTransaction = await client.waitForTransactionUnsafe(
        senderAccountKeys.accountAddress,
        txSeq,
        false
      );

      expect(blockchainTransaction.transaction?.sender?.toUpperCase()).toBe(
        bytesToHexString(senderAccountKeys.accountAddress).toUpperCase()
      );
      expect(blockchainTransaction.transaction?.sequence_number).toBe(txSeq);
    } catch (e) {
      fail(e);
    }
  }, 20000);

  it.skip('should send add currency transaction to a new account.', async () => {
    // create an account by minting 1 LBR
    const accountKeys = await createVaspAccount();
    const client = new TestnetClient();
    let account = await client.getAccount(accountKeys.accountAddress);
    const txSeq = account!.sequence_number;
    const accountAddress = accountKeys.accountAddress;

    // sanity
    expect(account).toBeTruthy();
    expect(account!.balances).toEqual([
      <Amount>{
        currency: 'LBR',
        amount: BigInt(0),
      },
    ]);
    // add currency
    const addCurrencyTx = LibraUtils.createAddCurrencyToAccountTransaction(
      accountKeys.accountAddress,
      txSeq,
      'Coin1',
      'LBR',
      BigInt(0),
      BigInt(1000000),
      BigInt(Math.trunc(new Date().getTime() / 1000 + 60 * 10)),
      TestnetClient.TESTNET_CHAIN_ID
    );

    const signedTransaction = LibraUtils.signTransaction(
      addCurrencyTx,
      accountKeys
    );

    const signedTxSerializer = new LcsSerializer();
    signedTransaction.serialize(signedTxSerializer);

    const transactionHex = Buffer.from(signedTxSerializer.getBytes()).toString(
      'hex'
    );

    await client.submitRawSignedTransaction(transactionHex);

    await client.waitForTransactionUnsafe(
      accountKeys.accountAddress,
      txSeq,
      false
    );

    // validate new currency added
    account = await client.getAccount(accountAddress);

    expect(account).toBeTruthy();
    expect(account!.balances).toEqual(
      expect.arrayContaining([
        <Amount>{
          currency: 'Coin1',
          amount: BigInt(0),
        },
      ])
    );
  }, 25000);
});
