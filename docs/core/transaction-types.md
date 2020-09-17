---
id: transaction-types
title: Transaction Types
sidebar_label: Transaction Types
---



There are different types of transactions that can be sent by an account:

* Transactions to create accounts and for minting

* Transactions to help with account administration

* Sending payments through transactions

We will be linking to certain transaction scripts in this documentation, which will provide details and more detailed descriptions of each parameter.

## Account creation and minting

Creating an account for the Libra Payment Network is different for testnet, mainnet, and pre-mainnet.

### Testnet
In **testnet***,* there is a *faucet service* endpoint where you can send requests so that you can perform certain actions that can only be performed by the Libra Association on mainnet. The faucet service endpoint can be used to create ParentVASP accounts and to give you fake Libra Coins for testing.

To create a ParentVASP account in testnet, send a request like the code example below to the faucet server:

`http://<faucet server address>/?amount=<amount>&auth_key=<auth_key>&currency_code=<currency_code>`

* `auth_key`: The authorization key for an account.
* `amount`: The amount of money available as the account balance.
* `currency_code`: The specified currency for the amount.

This request first checks if there is an account available for the authorization key. If the account given by `auth_key` doesn’t exist, a ParentVASP account will be created with the balance of the `amount` in the `currency_code` specified. If the account already exists, this will simply give the account the specified `amount` of `currency_code` coins.

### Mainnet and pre-mainnet

In **mainnet** and **pre-mainnet**, account creation and minting are different.

If you are a Regulated VASP, you first need to complete an application with the Libra Association to have a ParentVASP account created on your behalf. Once the Association creates your ParentVASP account (let’s call it **Account A**), you can create a ChildVASP account if you wish.

To create a ChildVASP account, you must send the [create_child_vasp_account](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/create_child_vasp_account.md) transaction script from your **Account A**. In this transaction script, you can specify which currency the new account should hold, or if it should hold all known currencies. Additionally, you can initialize the ChildVASP account with a specified amount of coins in a given currency.

To add more money to **Account A** or its ChildVASP accounts, **Account A** must communicate off-chain with a Designated Dealer. The Designated Dealer will then send coins to the account that **Account A** has specified (**Account A** or one of its ChildVASP accounts).

>
>**Note:** The LBR currency is distinct from other currencies in its creation and removal from the system. Particularly, LBR Coins cannot be sent/received by a Designated Dealer. If **Account A** wishes to hold LBR Coins, it must create them. LBR Coins can be created by sending a [mint_lbr](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/mint_lbr.md) transaction from any Regulated VASP account that holds large enough balances in the backing currencies for LBR Coins. Later on, if an account wishes to convert LBR Coins back to coins in the backing (fiat) currencies for LBR, this can be done by sending an [unmint_lbr](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/unmint_lbr.md) transaction from an account that holds an LBR Coin balance.
>

## Account administration
Once an account has been created, there are a number of operations that can be performed to rotate an account’s authentication key, add currencies to an account, or add a recovery address that can be used in case an account loses its private key.

### Account recovery
If a Regulated VASP **V** wishes to designate one of its accounts **R** as a *recovery address account,* it can do so by sending a [create_recovery_address](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/create_recovery_address.md) transaction from **R**. The recovery address account should be a cold account (i.e., no transactions should be planned to be sent from that account).

This account should only be used for rotating the authentication key of an account that has registered itself with **R** and whose private key has been lost. After the recovery address **R** has been created, other accounts that belong to the VASP **V** can register themselves with **R** by sending an [add_recovery_rotation_capability](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/add_recovery_rotation_capability.md) transaction and specifying the recovery address as **R**.

### Authentication key rotation
If an account **A** wishes to update the authentication key needed to access it, it can do so by sending one of two transactions, depending on whether **A** has been registered with (or is) an account recovery address.

If **A** has *not* registered itself with a recovery address, it can change its authentication key by sending a [rotate_authentication_key](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/rotate_authentication_key.md) transaction with its new authentication key. If **A** is part of a recovery address, then it can rotate its key by sending a [rotate_authentication_key_with_recovery_address](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/rotate_authentication_key_with_recovery_address.md) transaction with its new authentication key, and itself as the `to_recover` address.

### Adding a currency to an account
If an account **A** wishes to hold a balance in a currency **C** that it currently doesn’t hold, it can add a balance for **C** to **A** by sending an [add_currency_to_account](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/add_currency_to_account.md) transaction from **A**, and specifying **C** as the currency. It’s important to note that **C** must be a recognized currency on-chain, and **A** cannot hold a balance in **C** already: otherwise, this transaction will fail to execute.

## Payments
If an account **A** wishes to send a payment to another account **B,** it can do so by sending a [peer_to_peer_with_metadata](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/peer_to_peer_with_metadata.md) script transaction. When a payment is made, the sender must specify the currency the payment is being made in, the amount to send, and the account the payment is being made to (e.g., **B**). There are two additional parameters that can be used when constructing this transaction:the `metadata` parameter which can be of any form as long as **A** and **B** agree on it, and a `metadata_signature` of the form metadata | **A** | amount | @@$$LIBRA_ATTEST$$@@ that will be signed via the dual attestation process that we will detail in the next section, and also detailed in the script documentation [here](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/peer_to_peer_with_metadata.md).

### Dual attestation
Every payment transaction between two distinct *Regulated* VASP accounts (i.e., payments between parent ↔ child and child ↔ child within the same Regulated VASP are exempt) that are over the threshold, which is currently 1,000 Libra Coins, must perform dual attestation in order to comply with the Travel Rule. "Dual attestation" is a way of saying the payer must send the payee some data to the endpoint given by the payee’s `base_url`, after which the payee can perform any checks they wish on this metadata. The payee then signs this data with the compliance private key that corresponds to their `compliance_public_key` held on-chain, and sends it back to the payer. The payer must then include this signed data in the payment transaction and the signature will be checked on-chain.

### Updating dual attestation information
If an account that is subject to dual attestation wishes to update its `base_url` and/or its `compliance_public_key` (for example, if it wishes to change the private key it uses to sign metadata for dual attestation), it can do so by sending a [rotate_dual_attestation_info](https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/rotate_dual_attestation_info.md) transaction from the ParentVASP account (the account that holds the `DualAttestation` information). After this transaction has been executed, all transactions that are subject to dual attestation will be checked using the new` compliance_public_key` of the receiving account. Because of this, Regulated VASPs should be careful to communicate this change and ensure that there are no outstanding payment transactions that they have previously signed, since these will be rejected if the `compliance_public_key` has changed.
