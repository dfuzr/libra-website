---
id: accounts
title: Accounts
sidebar_label: Accounts
---



## Overview

An account represents an actor on the Libra Blockchain that can send transactions. An account is a collection of Move resources stored at a particular 16-byte account address. Every account on the Libra Payment Network is created with at least two resources:

* [RoleId](https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/Roles.md#resource-roleid), which grants the account a single, immutable [*role*](https://docs.google.com/document/d/1wsP47tnTQBSAYuWdVsbuJ8LluRNpYEzBflRXIpYutSU/edit#heading=h.h18vkq8y7tui) for [access control](https://github.com/libra/lip/blob/master/lips/lip-2.md).
* [LibraAccount](https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/LibraAccount.md#resource-libraaccount), which holds the account’s sequence number, authentication key, and event handles.

The Libra Payment Network (LPN) supports the following types of accounts:

* Institutional accounts
  * 	Regulated VASP accounts
  * Designated Dealer accounts

## Account roles

There are seven account roles in the Libra Payment Network. All Regulated VASPs can have two kinds of accounts, each with a different role:

* **ParentVASP** is the unique root account for a particular Regulated VASP. This means that there will be one account of this type for each Regulated VASP. A ParentVASP carries three key pieces of data—its name, the URL of an endpoint to hit for off-chain APIs, and a compliance public key for authenticating signatures on off-chain data payloads.
* **ChildVASP** is a child account of a particular parent Regulated VASP. A Regulated VASP need not have any child accounts, but child accounts allow a Regulated VASP to maintain a structured on-chain presence if it wishes (e.g., separate cold/warm/hot accounts). A child account knows the address of its parent Regulated VASP. When transacting with a child account, clients should use this address to look up the ParentVASP information if off-chain communication is required.

## Creating accounts

In the Libra mainnet (at launch), ParentVASP accounts can only be created by the Libra Association’s LibraRoot account. Once a ParentVASP account is created, the Regulated VASP can then create ChildVASP accounts.

In order to create a new account, the creator must specify the address of the new account, its authentication key prefix, and the currencies that the account will initially accept. Learn more about how accounts are created [here](https://docs.google.com/document/d/1wsP47tnTQBSAYuWdVsbuJ8LluRNpYEzBflRXIpYutSU/edit#heading=h.p2febcw4fxso).

>
>**Note**: Funds can only be sent to an address that already contains an account; importantly, sending funds to an empty address *A* will **not** create an account at *A*. Instead, a transaction that sends funds to an empty address will abort.
>


## Addresses, authentication keys, and cryptographic keys
A Libra Blockchain account is uniquely identified by its 16-byte account address. Each account stores an **authentication key** used to authenticate the signer of a transaction. An account’s address is derived from its initial authentication key, but the Libra Payment Network supports rotating the authentication key of an account without changing its address.

To generate an authentication key and account address:

* Generate a fresh key-pair (pubkey_A, privkey_A). The Libra Payment Network uses the PureEdDSA scheme over the Ed25519 curve, as defined in RFC 8032.
* Derive a 32-byte authentication key auth_key = sha3-256(K_pub | 0x00), where | denotes concatenation. The 0x00 is a 1-byte signature scheme identifier where 0x00 means single-signature and 0x01 means multisignature.
* The account address is the last 16 bytes of auth_key.
* The first 16 bytes of auth_key is the “auth key prefix”. Any transaction that creates an account needs both an account address and an auth key prefix, but a transaction that is interacting with an existing account only needs the address.
* Creating a K-of-N [multisig](https://github.com/libra/libra/blob/master/crypto/crypto/src/multi_ed25519.rs) authentication key is similar: generate N ed25519 public keys p_1, …, p_n, then compute auth_key = sha3-256(p_1 | … | p_n | K | 0x01). Derive an address and an auth key prefix as described above.

## Currencies and balances

The Libra Payment Network supports an account transacting in different currencies. [Libra](https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/Libra.md#0x1_Libra_Libra) is the Libra Blockchain equivalent of [ERC20](https://eips.ethereum.org/EIPS/eip-20) from a standards perspective. At the Move level, these are different generic instantiations of the same Libra resource type (e.g., Libra`<LBR>`, Libra`<USD>`).

>**Note**: Libra`<LBR>` will not be available at launch. Libra`<USD>` will be available at launch.



Each non-administrative account stores one or more [Balance`<CoinType>`](https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/LibraAccount.md#resource-balance) resources. There is a separate Balance resource for each currency type that the account holds (e.g., `Balance<Libra<LBR>>`, `Balance<Libra<USD>>`, …).

In order to send *and* receive Libra`<CoinType>`, an account must have a balance in Libra`<CoinType>`. This can be a zero balance of Libra`<CoinType>` that is added whenever Libra`<CoinType>` currency is authorized for an account. A transaction that sends Libra`<CoinType>` to an account without a balance in Libra`<CoinType>` will abort. Thus, before sending funds of type CoinType to an address, clients should first ensure that (a) the address exists, and (b) the address has a balance in CoinType (even if that balance is zero).

Balances can be added either at account creation time or subsequently via the [add_currency script](https://docs.google.com/document/d/1wsP47tnTQBSAYuWdVsbuJ8LluRNpYEzBflRXIpYutSU/edit#heading=h.gzm0hd3f6bdq). Only the account owner can add new balances after account creation. Once a balance has been added to an account, it cannot be removed. For example, an account that accepts Libra`<LBR>` will always accept Libra`<LBR>`.
