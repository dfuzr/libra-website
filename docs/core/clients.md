---
id: clients
title: Clients
sidebar_label: Libra Clients
---

## Overview
A Libra client is software that interacts with the Libra Blockchain by submitting transactions or querying, via [full nodes](link to glossary definition). Libra clients communicate with full nodes exclusively using a JSON-RPC interface.

Full nodes always verify the integrity of the current state through re-executing transactions and verifying [consensus](glossary definition) signatures created by the [validators](glossary definition).



## Introduction to JSON-RPC
The Libra client API is based on the JSON-RPC protocol. JSON-RPC is a stateless, lightweight, remote procedure call (RPC) protocol. Learn more about the latest and official JSON-RPC specifications here.



## Implement a minimal Libra client
To implement a client that connects to Libra JSON-RPC APIs, you will need to do the following:

* JSON-RPC client: Underlying client talks to the Libra JSON-RPC server.
* Testnet: Connect to testnet to do integration tests and confirm that your client works as expected.
* Query the blockchain: Read data from the Libra Blockchain.
* Submit transaction: Details of creating, signing and submitting transactions, and how to test them.
* Error handling: Understand errors and the ways to handle them.

### JSON-RPC client
Any JSON-RPC 2.0 client should be able to work with the JSON-RPC APIs. The JSON-RPC APIs extend to JSON-RPC 2.0 specifications for specific use cases as well. Learn more details about Libra extensions here.


### Testnet
The simplest way to validate that your client is working as expected is by connecting it to the testnet, and then reading and writing data to the testnet.

You can start testing your client by querying the following methods (these don’t require anything else other than an HTTP client to get a response from the server):
* get_currencies: Get information on the various currencies supported by the Libra Blockchain.

* get_metadata: Get the state of the Libra Blockchain (e.g., state as known to the full node you connect to).

* In testnet, there is a faucet service endpoint where you can send requests so that you can perform certain actions that would only be performed by the Libra Association on mainnet. The faucet service endpoint can be used to create accounts and to give you fake Libra Coins for testing. The first transaction you submit on testnet contains the account creation script. If you are not using the faucet service on testnet, you can use the following static account addresses to test get_account.

| Account Name            | address hex-encoded string       | Description                                                  |
| ----------------------- | -------------------------------- | ------------------------------------------------------------ |
| root account address    | 0000000000000000000000000A550C18 | A special root account that stores important global resource information such as all currencies supported. |
| core code address       | 00000000000000000000000000000001 | A special code account that we will need for the submit transaction method. It stores information such as currency code. |
| designed dealer address | 000000000000000000000000000000DD | A special account for minting coins on testnet. Check out Testnet Faucet Service for more info. |

* Similarly, you can test get_account_transaction with the root account address above. You will need to call get_account and get_account_transaction when you implement and test the submit transaction method.
* Once you’ve checked that the methods get_account and get_account_transaction are working as expected, you can test the submit transaction method.



### Query the Libra Blockchain

You can query the Libra Blockchain to read data using the following methods:

| Method                                                       | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [get_transactions](https://github.com/libra/libra/blob/master/json-rpc/docs/method_get_transactions.md) | Get transactions on the Libra blockchain.                    |
| [get_account](https://github.com/libra/libra/blob/master/json-rpc/docs/method_get_account.md) | Get the latest account information for a given account address. |
| [get_account_transactions](https://github.com/libra/libra/blob/master/json-rpc/docs/method_get_account_transactions.md) | Get transactions sent by a particular account.               |
| [get_metadata](https://github.com/libra/libra/blob/master/json-rpc/docs/method_get_metadata.md) | Get the blockchain metadata (e.g., state as known to the current full node). |
| [get_events](https://github.com/libra/libra/blob/master/json-rpc/docs/method_get_events.md) | Get the events for a given event stream key.                 |
| [get_currencies](https://github.com/libra/libra/blob/master/json-rpc/docs/method_get_currencies.md) | Get information about all currencies supported by the Libra blockchain. |

Use the links above to learn more about the method parameters, what they each return, and try the examples.



### Test submitting a transaction

To implement submitting a transaction:

1. [Create a local account](https://docs.google.com/document/d/1wsP47tnTQBSAYuWdVsbuJ8LluRNpYEzBflRXIpYutSU/edit#heading=h.bo644486oea6): This includes an address, as well as private and public keys generated by [Ed25519](https://ed25519.cr.yp.to/).
2. [Create and sign a transaction](https://docs.google.com/document/d/1wsP47tnTQBSAYuWdVsbuJ8LluRNpYEzBflRXIpYutSU/edit#heading=h.atprj2s2lqvb).
3. [Submit a transaction](https://docs.google.com/document/d/1wsP47tnTQBSAYuWdVsbuJ8LluRNpYEzBflRXIpYutSU/edit#heading=h.ws6q9zvqvodd).
4. [Wait for a transaction to be executed and validate the result](https://docs.google.com/document/d/1wsP47tnTQBSAYuWdVsbuJ8LluRNpYEzBflRXIpYutSU/edit#heading=h.267cy5gfi2bz).

The following diagram shows the sequence of submit and wait for a peer-to-peer transaction that has been executed successfully:



![Submit and wait for transaction executed successfully](https://lh5.googleusercontent.com/4WSwHOd57W_rLiHqWiYEGXA3KuSMH6dQ1Qj227aY8BF76C_jGhU7BYxwyitlYyn0YiBxa9DEQVOEs9PDvSz6UZwIzxF0BEOXP_kpIDeiSGKB0SlBs-YJNRhiCQ_-zR1ZACoZPq8e)

##### Create local account

A local account holds the private key of an on-chain account. In this document, we use the [Libra Swiss Knife](https://github.com/libra/libra/blob/master/client/swiss-knife#generate-a-ed25519-keypair) to generate the local account keys. To run this by yourself, clone https://github.com/libra/libra.git, and run ./scripts/dev_setup.sh to set up your developer environment. You can run the command in the example below at the root directory of the Libra codebase.

```
\# generate test keypaircargo run -p swiss-knife -- generate-test-ed25519-keypair
{ "error_message": "", "data": {  "libra_account_address": "a74fd7c46952c497e75afb0a7932586d",  "libra_auth_key": "459c77a38803bd53f3adee52703810e3a74fd7c46952c497e75afb0a7932586d",  "private_key": "cd9a2c90296a210249128ae3c908611637b2e00efd4986670e252abf3fabd1a9",  "public_key": "447fc3be296803c2303951c7816624c7566730a5cc6860a4a1bd3c04731569f5" }}
```

##### Create and sign a transaction
Now that you have a local account address and keys, you can start to prepare a transaction. In this guide, we use peer-to-peer transfer as the example. Other types of transactions will be similar, except some scripts can only be submitted by specific accounts.

There are several development tools available:
1. [Transaction Builder Generator](https://github.com/libra/libra/blob/master/language/transaction-builder/generator/README.md): This is in development and[ currently supports C++, Java, Python, and Rust](https://github.com/libra/libra/blob/master/language/transaction-builder/generator/README.md#supported-languages).
2. Libra Swiss Knife: You can use [Libra Swiss Knife to generate raw transactions and to sign transactions](https://github.com/libra/libra/blob/master/client/swiss-knife#examples-for-generate-raw-txn-and-generate-signed-txn-operations). If the Transaction Builder Generator doesn’t support the language you want to use to develop your client, you can wrap the Libra Swiss Knife [release binary](https://github.com/libra/libra/blob/master/client/swiss-knife#building-the-binary-in-a-release-optimized-mode) for creating and signing transactions
3. [C-binding](https://github.com/libra/libra/blob/master/client/libra-dev/include/data.h)

The example below shows how to create and sign transactions with the Transaction Builder Generator in Java. Please follow the guide at [Transaction Builder Generator](https://github.com/libra/libra/blob/master/language/transaction-builder/generator/README.md#java) to generate code for your project.

To create and sign a transaction that transfers 12 Libra Coins from account1 to account2:

```
ChainId testNetChainID = new ChainId((byte) 2); // Testnet chain id is static valueString currencyCode = "LBR";String account1_address = "a74fd7c46952c497e75afb0a7932586d";String account1_public_key = "447fc3be296803c2303951c7816624c7566730a5cc6860a4a1bd3c04731569f5";String account1_private_key = "cd9a2c90296a210249128ae3c908611637b2e00efd4986670e252abf3fabd1a9";String account2_address = "5b9f7691937732eedfbe4f194275247b";long amountToTransfer = coins(12);
// step 1: create transaction script:TypeTag currencyCodeMoveResource = new TypeTag.Struct(new StructTag(    bytesToAddress(hexToBytes("00000000000000000000000000000001")), // 0x1 is core code account address    new Identifier(currencyCode),    new Identifier(currencyCode),    new ArrayList<>()));
Script script = Helpers.encode_peer_to_peer_with_metadata_script( // Helpers.encode_xxx is code generated by transaction builder generator    currencyCodeMoveResource,    hexToAddress(account2_address),    amountToTransfer,    new Bytes(new byte[]{}),    new Bytes(new byte[]{}));
// step 2: get current submitting transaction account sequence number.Account account1Data = client.getAccount(account1_address);
// step 3: create RawTransactionRawTransaction rt = new RawTransaction(    hexToAddress(account1_address),    account1Data.sequence_number,    new TransactionPayload.Script(script),    coins(1),         // maxGasAmount    0L,            // gasUnitPrice, you can always set gas unit price to zero on Testnet. At launch, gas unit price can be zero in most of time. Only during high congestion, you may specify a gas price.    currencyCode,    System.currentTimeMillis()/1000 + 30, // expirationTimestampSecs, expire after 30 seconds    testNetChainID);
byte[] rawTxnBytes = toLCS(rt);
```

You can find imports and util functions code [here](https://docs.google.com/document/d/1wsP47tnTQBSAYuWdVsbuJ8LluRNpYEzBflRXIpYutSU/edit#heading=h.uxh40yzgwvcw).

The following code signs the transaction:
```
// sha3 hash "LIBRA::RawTransaction" bytes first, then concat with raw transaction bytes to create a message for signing.byte[] hash = concat(sha3Hash("LIBRA::RawTransaction".getBytes()), rawTxnBytes);
// [bouncycastle](https://www.bouncycastle.org/)'s Ed25519SignerEd25519Signer signer = new Ed25519Signer();byte[] privateKeyBytes = hexToBytes(account1_private_key);signer.init(true, new Ed25519PrivateKeyParameters(privateKeyBytes, 0));signer.update(hash, 0, hash.length);byte[] sign = signer.generateSignature();
SignedTransaction st = new SignedTransaction(rt, new TransactionAuthenticator.Ed25519(    new Ed25519PublicKey(new Bytes(hexToBytes(account1_public_key))),    new Ed25519Signature(new Bytes(sign))));String signedTxnData = bytesToHex(toLCS(st));
```

For more details, check out the [consensus specification that describes the cryptographic operations used for hashing, signing, and verifying throughout the Libra Payment Network](https://github.com/libra/libra/blob/master/specifications/crypto/spec.md), as well as on transactions submitted to the network.

When you implement the logic above, you may extract the `createRawTransactio`n and `createSignedTransaction` methods, and use the following data to confirm that the logic is correct:

1. Given the account sequence number: 0.
2. Given expirationTimestampSecs to 1997844332.
3. Keeping other data the same, you should get: hex-encoded raw and signed transaction LCS serialized bytes.

##### Util functions
```
  import com.novi.lcs.LcsSerializer;import com.novi.serde.Bytes;import com.novi.serde.Serializer;import org.bouncycastle.crypto.params.Ed25519PrivateKeyParameters;import org.bouncycastle.crypto.signers.Ed25519Signer;import org.libra.stdlib.Helpers;import org.libra.types.*;
  import java.io.IOException;import java.util.ArrayList;
  // ......
  public static long coins(long n) {  return n * 1000000;}
  public static AccountAddress hexToAddress(String hex) {  return bytesToAddress(hexToBytes(hex));}
  static AccountAddress bytesToAddress(byte[] values) {  assert values.length == 16;  Byte[] address = new Byte[16];  for (int i = 0; i < 16; i++) {    address[i] = Byte.valueOf(values[i]);  }  return new AccountAddress(address);}
  public static byte[] hexToBytes(String hex) {  return BaseEncoding.base16().decode(hex.toUpperCase());}
  public static String bytesToHex(byte[] bytes) {  return BaseEncoding.base16().encode(bytes);}
  public static String bytesToHex(Bytes bytes) {  return bytesToHex(bytes.content());}
  public static byte[] toLCS(RawTransaction rt) throws Exception {  Serializer serializer = new LcsSerializer();  rt.serialize(serializer);  return serializer.get_bytes();}
  public static byte[] toLCS(SignedTransaction rt) throws Exception {  Serializer serializer = new LcsSerializer();  rt.serialize(serializer);  return serializer.get_bytes();}
  public static byte[] sha3Hash(byte[] data) {  SHA3.DigestSHA3 digestSHA3 = new SHA3.Digest256();  return digestSHA3.digest(data);}
  public static byte[] concat(byte[] part1, byte[] part2) {  byte[] ret = new byte[part1.length + part2.length];  System.arraycopy(part1, 0, ret, 0, part1.length);  System.arraycopy(part2, 0, ret, part1.length, part2.length);  return ret;}
  public static String addressToHex(AccountAddress address) {  byte[] bytes = new byte[16];  for (int i = 0; i < 16; i++) {    bytes[i] = Byte.valueOf(address.value[i]);  }  return bytesToHex(bytes);}
```

##### Submit the transaction
After extracting the create and sign transaction logic, the JSON-RPC [submit](https://github.com/libra/libra/blob/master/json-rpc/docs/method_submit.md) method API is simple with a hex-encoded signed transaction serialized string. Use the signedTxnData method to send the transaction to the server.

`client.submit(signedTxnData);`

##### Wait for the transaction to execute and validate the result

After the transaction is submitted successfully, wait for it to be executed and then validate the execution result.

Call [get_account_transaction](https://github.com/libra/libra/blob/master/json-rpc/docs/method_get_account_transaction.md) to find the transaction using the account address and sequence number. If the transaction has not been executed yet, the server responds with a null value.

```
private Transaction waitForTransaction(String address, long sequence, boolean includeEvents, long timeoutMillis) throws Exception {  for (long millis = 0, step = 100; millis < timeoutMillis; millis += step) {    Transaction transaction = this.getAccountTransaction(address, sequence, includeEvents);    if (transaction != null) {      return transaction;    }    Thread.sleep(step);  }
  return null;}
```

After you view the transaction, you need to validate the following:
1. `transaction#signature` should be the same as the signature created for SignedTransaction. This makes sure the transaction you checked is the one you submitted.
2. `transaction#vm_status#type` should be "executed." Type "executed" means the transaction is executed successfully. Any other type means the transaction has not executed successfully. Learn more about the different types [here](https://github.com/libra/libra/blob/master/json-rpc/docs/type_transaction.md#type-vmstatus).

### Error handling
There are four general types of errors you need consider:
* A transport layer error, such as an HTTP call failure.
* A JSON-RPC protocol error, such as the server responding to non-JSON data, or can't be parsed into [Libra JSON-RPC SPEC](https://github.com/libra/libra/blob/master/json-rpc/json-rpc-spec.md) defined-data structure, or missing result and error fields.
* A JSON-RPC error: Error returned from the server.
* Invalid arguments error: The caller of your client API may provide invalid arguments like an invalid hex-encoded account address.

Distinguishing between the four types of errors can help you decide how to handle them:
* For a transport layer error, consider retrying.
* A JSON-RPC protocol error indicates a server-side bug.
* An invalid arguments error indicates an application code bug.
* JSON-RPC errors consist of two major groups:
  * Invalid request: This indicates a client-side error. It's either an application code bug or a client code bug. If you did well with handling invalid arguments, then it means your client code has a bug.
  * Server error: This can be a server-side bug, or may indicate important information related to submitted transaction validation or execution error.

Other than general error handling, another type of error you should pay attention to is a server-side stale response. This error happens when a full node is out of sync with the Libra payment network, or you connected to a delayed full node in a cluster of full nodes. To prevent these problems, you need to:
* Track server side data freshness: The Libra JSON-RPC server will always respond to libra_ledger_version and libra_ledger_timestampusec (see [Libra Extensions](https://github.com/libra/libra/blob/master/json-rpc/json-rpc-spec.md#libra-extensions)) for clients to validate and track server-side data freshness.
* Use the HTTP connection pool to keep the connection alive and reusable. Getting inconsistent data is more likely when the client interacts with the same full node server instead of different full nodes in a cluster.

Once you have completed the above steps, and everything is working as expected, you have a minimal client that is ready to use. To develop a production-quality client, please check out our [Client CHECKLIST](https://github.com/libra/libra/blob/master/json-rpc/docs/client_checklist.md).
