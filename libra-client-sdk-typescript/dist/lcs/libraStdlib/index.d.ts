import * as LibraTypes from '../libraTypes';
/**
 * Structured representation of a call into a known Move script.
 */
export declare abstract class ScriptCall {
}
export declare class ScriptCallVariantAddCurrencyToAccount extends ScriptCall {
    currency: LibraTypes.TypeTag;
    constructor(currency: LibraTypes.TypeTag);
}
export declare class ScriptCallVariantAddRecoveryRotationCapability extends ScriptCall {
    recovery_address: LibraTypes.AccountAddress;
    constructor(recovery_address: LibraTypes.AccountAddress);
}
export declare class ScriptCallVariantAddToScriptAllowList extends ScriptCall {
    hash: Uint8Array;
    sliding_nonce: BigInt;
    constructor(hash: Uint8Array, sliding_nonce: BigInt);
}
export declare class ScriptCallVariantAddValidatorAndReconfigure extends ScriptCall {
    sliding_nonce: BigInt;
    validator_name: Uint8Array;
    validator_address: LibraTypes.AccountAddress;
    constructor(sliding_nonce: BigInt, validator_name: Uint8Array, validator_address: LibraTypes.AccountAddress);
}
export declare class ScriptCallVariantBurn extends ScriptCall {
    token: LibraTypes.TypeTag;
    sliding_nonce: BigInt;
    preburn_address: LibraTypes.AccountAddress;
    constructor(token: LibraTypes.TypeTag, sliding_nonce: BigInt, preburn_address: LibraTypes.AccountAddress);
}
export declare class ScriptCallVariantBurnTxnFees extends ScriptCall {
    coin_type: LibraTypes.TypeTag;
    constructor(coin_type: LibraTypes.TypeTag);
}
export declare class ScriptCallVariantCancelBurn extends ScriptCall {
    token: LibraTypes.TypeTag;
    preburn_address: LibraTypes.AccountAddress;
    constructor(token: LibraTypes.TypeTag, preburn_address: LibraTypes.AccountAddress);
}
export declare class ScriptCallVariantCreateChildVaspAccount extends ScriptCall {
    coin_type: LibraTypes.TypeTag;
    child_address: LibraTypes.AccountAddress;
    auth_key_prefix: Uint8Array;
    add_all_currencies: boolean;
    child_initial_balance: BigInt;
    constructor(coin_type: LibraTypes.TypeTag, child_address: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, add_all_currencies: boolean, child_initial_balance: BigInt);
}
export declare class ScriptCallVariantCreateDesignatedDealer extends ScriptCall {
    currency: LibraTypes.TypeTag;
    sliding_nonce: BigInt;
    addr: LibraTypes.AccountAddress;
    auth_key_prefix: Uint8Array;
    human_name: Uint8Array;
    add_all_currencies: boolean;
    constructor(currency: LibraTypes.TypeTag, sliding_nonce: BigInt, addr: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array, add_all_currencies: boolean);
}
export declare class ScriptCallVariantCreateParentVaspAccount extends ScriptCall {
    coin_type: LibraTypes.TypeTag;
    sliding_nonce: BigInt;
    new_account_address: LibraTypes.AccountAddress;
    auth_key_prefix: Uint8Array;
    human_name: Uint8Array;
    add_all_currencies: boolean;
    constructor(coin_type: LibraTypes.TypeTag, sliding_nonce: BigInt, new_account_address: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array, add_all_currencies: boolean);
}
export declare class ScriptCallVariantCreateRecoveryAddress extends ScriptCall {
    constructor();
}
export declare class ScriptCallVariantCreateValidatorAccount extends ScriptCall {
    sliding_nonce: BigInt;
    new_account_address: LibraTypes.AccountAddress;
    auth_key_prefix: Uint8Array;
    human_name: Uint8Array;
    constructor(sliding_nonce: BigInt, new_account_address: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array);
}
export declare class ScriptCallVariantCreateValidatorOperatorAccount extends ScriptCall {
    sliding_nonce: BigInt;
    new_account_address: LibraTypes.AccountAddress;
    auth_key_prefix: Uint8Array;
    human_name: Uint8Array;
    constructor(sliding_nonce: BigInt, new_account_address: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array);
}
export declare class ScriptCallVariantFreezeAccount extends ScriptCall {
    sliding_nonce: BigInt;
    to_freeze_account: LibraTypes.AccountAddress;
    constructor(sliding_nonce: BigInt, to_freeze_account: LibraTypes.AccountAddress);
}
export declare class ScriptCallVariantPeerToPeerWithMetadata extends ScriptCall {
    currency: LibraTypes.TypeTag;
    payee: LibraTypes.AccountAddress;
    amount: BigInt;
    metadata: Uint8Array;
    metadata_signature: Uint8Array;
    constructor(currency: LibraTypes.TypeTag, payee: LibraTypes.AccountAddress, amount: BigInt, metadata: Uint8Array, metadata_signature: Uint8Array);
}
export declare class ScriptCallVariantPreburn extends ScriptCall {
    token: LibraTypes.TypeTag;
    amount: BigInt;
    constructor(token: LibraTypes.TypeTag, amount: BigInt);
}
export declare class ScriptCallVariantPublishSharedEd25519PublicKey extends ScriptCall {
    public_key: Uint8Array;
    constructor(public_key: Uint8Array);
}
export declare class ScriptCallVariantRegisterValidatorConfig extends ScriptCall {
    validator_account: LibraTypes.AccountAddress;
    consensus_pubkey: Uint8Array;
    validator_network_addresses: Uint8Array;
    fullnode_network_addresses: Uint8Array;
    constructor(validator_account: LibraTypes.AccountAddress, consensus_pubkey: Uint8Array, validator_network_addresses: Uint8Array, fullnode_network_addresses: Uint8Array);
}
export declare class ScriptCallVariantRemoveValidatorAndReconfigure extends ScriptCall {
    sliding_nonce: BigInt;
    validator_name: Uint8Array;
    validator_address: LibraTypes.AccountAddress;
    constructor(sliding_nonce: BigInt, validator_name: Uint8Array, validator_address: LibraTypes.AccountAddress);
}
export declare class ScriptCallVariantRotateAuthenticationKey extends ScriptCall {
    new_key: Uint8Array;
    constructor(new_key: Uint8Array);
}
export declare class ScriptCallVariantRotateAuthenticationKeyWithNonce extends ScriptCall {
    sliding_nonce: BigInt;
    new_key: Uint8Array;
    constructor(sliding_nonce: BigInt, new_key: Uint8Array);
}
export declare class ScriptCallVariantRotateAuthenticationKeyWithNonceAdmin extends ScriptCall {
    sliding_nonce: BigInt;
    new_key: Uint8Array;
    constructor(sliding_nonce: BigInt, new_key: Uint8Array);
}
export declare class ScriptCallVariantRotateAuthenticationKeyWithRecoveryAddress extends ScriptCall {
    recovery_address: LibraTypes.AccountAddress;
    to_recover: LibraTypes.AccountAddress;
    new_key: Uint8Array;
    constructor(recovery_address: LibraTypes.AccountAddress, to_recover: LibraTypes.AccountAddress, new_key: Uint8Array);
}
export declare class ScriptCallVariantRotateDualAttestationInfo extends ScriptCall {
    new_url: Uint8Array;
    new_key: Uint8Array;
    constructor(new_url: Uint8Array, new_key: Uint8Array);
}
export declare class ScriptCallVariantRotateSharedEd25519PublicKey extends ScriptCall {
    public_key: Uint8Array;
    constructor(public_key: Uint8Array);
}
export declare class ScriptCallVariantSetValidatorConfigAndReconfigure extends ScriptCall {
    validator_account: LibraTypes.AccountAddress;
    consensus_pubkey: Uint8Array;
    validator_network_addresses: Uint8Array;
    fullnode_network_addresses: Uint8Array;
    constructor(validator_account: LibraTypes.AccountAddress, consensus_pubkey: Uint8Array, validator_network_addresses: Uint8Array, fullnode_network_addresses: Uint8Array);
}
export declare class ScriptCallVariantSetValidatorOperator extends ScriptCall {
    operator_name: Uint8Array;
    operator_account: LibraTypes.AccountAddress;
    constructor(operator_name: Uint8Array, operator_account: LibraTypes.AccountAddress);
}
export declare class ScriptCallVariantSetValidatorOperatorWithNonceAdmin extends ScriptCall {
    sliding_nonce: BigInt;
    operator_name: Uint8Array;
    operator_account: LibraTypes.AccountAddress;
    constructor(sliding_nonce: BigInt, operator_name: Uint8Array, operator_account: LibraTypes.AccountAddress);
}
export declare class ScriptCallVariantTieredMint extends ScriptCall {
    coin_type: LibraTypes.TypeTag;
    sliding_nonce: BigInt;
    designated_dealer_address: LibraTypes.AccountAddress;
    mint_amount: BigInt;
    tier_index: BigInt;
    constructor(coin_type: LibraTypes.TypeTag, sliding_nonce: BigInt, designated_dealer_address: LibraTypes.AccountAddress, mint_amount: BigInt, tier_index: BigInt);
}
export declare class ScriptCallVariantUnfreezeAccount extends ScriptCall {
    sliding_nonce: BigInt;
    to_unfreeze_account: LibraTypes.AccountAddress;
    constructor(sliding_nonce: BigInt, to_unfreeze_account: LibraTypes.AccountAddress);
}
export declare class ScriptCallVariantUpdateDualAttestationLimit extends ScriptCall {
    sliding_nonce: BigInt;
    new_micro_lbr_limit: BigInt;
    constructor(sliding_nonce: BigInt, new_micro_lbr_limit: BigInt);
}
export declare class ScriptCallVariantUpdateExchangeRate extends ScriptCall {
    currency: LibraTypes.TypeTag;
    sliding_nonce: BigInt;
    new_exchange_rate_numerator: BigInt;
    new_exchange_rate_denominator: BigInt;
    constructor(currency: LibraTypes.TypeTag, sliding_nonce: BigInt, new_exchange_rate_numerator: BigInt, new_exchange_rate_denominator: BigInt);
}
export declare class ScriptCallVariantUpdateLibraVersion extends ScriptCall {
    sliding_nonce: BigInt;
    major: BigInt;
    constructor(sliding_nonce: BigInt, major: BigInt);
}
export declare class ScriptCallVariantUpdateMintingAbility extends ScriptCall {
    currency: LibraTypes.TypeTag;
    allow_minting: boolean;
    constructor(currency: LibraTypes.TypeTag, allow_minting: boolean);
}
export interface TypeTagDef {
    type: Types;
    arrayType?: TypeTagDef;
    name?: string;
    module?: string;
    address?: string;
    typeParams?: TypeTagDef[];
}
export interface ArgDef {
    readonly name: string;
    readonly type: TypeTagDef;
    readonly choices?: string[];
    readonly mandatory?: boolean;
}
export interface ScriptDef {
    readonly stdlibEncodeFunction: (...args: any[]) => LibraTypes.Script;
    readonly stdlibDecodeFunction: (script: LibraTypes.Script) => ScriptCall;
    readonly codeName: string;
    readonly description: string;
    readonly typeArgs: string[];
    readonly args: ArgDef[];
}
export declare enum Types {
    Boolean = 0,
    U8 = 1,
    U64 = 2,
    U128 = 3,
    Address = 4,
    Array = 5,
    Struct = 6
}
export declare class Stdlib {
    private static fromHexString;
    /**
     * # Summary
     * Adds a zero `Types` balance to the sending `account`. This will enable `account` to
     * send, receive, and hold `Libra::Libra<Types>` coins. This transaction can be
     * successfully sent by any account that is allowed to hold balances
     * (e.g., VASP, Designated Dealer).
     *
     * # Technical Description
     * After the successful execution of this transaction the sending account will have a
     * `LibraAccount::Balance<Types>` resource with zero balance published under it. Only
     * accounts that can hold balances can send this transaction, the sending account cannot
     * already have a `LibraAccount::Balance<Types>` published under it.
     *
     * # Parameters
     * | Name       | Type      | Description                                                                                                                                         |
     * | ------     | ------    | -------------                                                                                                                                       |
     * | `Types` | Type      | The Move type for the `Types` being added to the sending account of the transaction. `Types` must be an already-registered currency on-chain. |
     * | `account`  | `&signer` | The signer of the sending account of the transaction.                                                                                               |
     *
     * # Common Abort Conditions
     * | Error Category              | Error Reason                             | Description                                                                |
     * | ----------------            | --------------                           | -------------                                                              |
     * | `Errors::NOT_PUBLISHED`     | `Libra::ECURRENCY_INFO`                  | The `Types` is not a registered currency on-chain.                      |
     * | `Errors::INVALID_ARGUMENT`  | `LibraAccount::EROLE_CANT_STORE_BALANCE` | The sending `account`'s role does not permit balances.                     |
     * | `Errors::ALREADY_PUBLISHED` | `LibraAccount::EADD_EXISTING_CURRENCY`   | A balance for `Types` is already published under the sending `account`. |
     *
     * # Related Scripts
     * * `Script::create_child_vasp_account`
     * * `Script::create_parent_vasp_account`
     * * `Script::peer_to_peer_with_metadata`
     */
    static encodeAddCurrencyToAccountScript(currency: LibraTypes.TypeTag): LibraTypes.Script;
    /**
     * # Summary
     * Stores the sending accounts ability to rotate its authentication key with a designated recovery
     * account. Both the sending and recovery accounts need to belong to the same VASP and
     * both be VASP accounts. After this transaction both the sending account and the
     * specified recovery account can rotate the sender account's authentication key.
     *
     * # Technical Description
     * Adds the `LibraAccount::KeyRotationCapability` for the sending account
     * (`to_recover_account`) to the `RecoveryAddress::RecoveryAddress` resource under
     * `recovery_address`. After this transaction has been executed successfully the account at
     * `recovery_address` and the `to_recover_account` may rotate the authentication key of
     * `to_recover_account` (the sender of this transaction).
     *
     * The sending account of this transaction (`to_recover_account`) must not have previously given away its unique key
     * rotation capability, and must be a VASP account. The account at `recovery_address`
     * must also be a VASP account belonging to the same VASP as the `to_recover_account`.
     * Additionally the account at `recovery_address` must have already initialized itself as
     * a recovery account address using the `Script::create_recovery_address` transaction script.
     *
     * The sending account's (`to_recover_account`) key rotation capability is
     * removed in this transaction and stored in the `RecoveryAddress::RecoveryAddress`
     * resource stored under the account at `recovery_address`.
     *
     * # Parameters
     * | Name                 | Type      | Description                                                                                                |
     * | ------               | ------    | -------------                                                                                              |
     * | `to_recover_account` | `&signer` | The signer reference of the sending account of this transaction.                                           |
     * | `recovery_address`   | `address` | The account address where the `to_recover_account`'s `LibraAccount::KeyRotationCapability` will be stored. |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                               | Description                                                                                     |
     * | ----------------           | --------------                                             | -------------                                                                                   |
     * | `Errors::INVALID_STATE`    | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `to_recover_account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`. |
     * | `Errors::NOT_PUBLISHED`    | `RecoveryAddress::ERECOVERY_ADDRESS`                       | `recovery_address` does not have a `RecoveryAddress` resource published under it.               |
     * | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::EINVALID_KEY_ROTATION_DELEGATION`        | `to_recover_account` and `recovery_address` do not belong to the same VASP.                     |
     *
     * # Related Scripts
     * * `Script::create_recovery_address`
     * * `Script::rotate_authentication_key_with_recovery_address`
     */
    static encodeAddRecoveryRotationCapabilityScript(recovery_address: LibraTypes.AccountAddress): LibraTypes.Script;
    /**
     * # Summary
     * Adds a script hash to the transaction allowlist. This transaction
     * can only be sent by the Libra Root account. Scripts with this hash can be
     * sent afterward the successful execution of this script.
     *
     * # Technical Description
     *
     * The sending account (`lr_account`) must be the Libra Root account. The script allow
     * list must not already hold the script `hash` being added. The `sliding_nonce` must be
     * a valid nonce for the Libra Root account. After this transaction has executed
     * successfully a reconfiguration will be initiated, and the on-chain config
     * `LibraTransactionPublishingOption::LibraTransactionPublishingOption`'s
     * `script_allow_list` field will contain the new script `hash` and transactions
     * with this `hash` can be successfully sent to the network.
     *
     * # Parameters
     * | Name            | Type         | Description                                                                                     |
     * | ------          | ------       | -------------                                                                                   |
     * | `lr_account`    | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer. |
     * | `hash`          | `vector<u8>` | The hash of the script to be added to the script allowlist.                                     |
     * | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                                           | Description                                                                                |
     * | ----------------           | --------------                                                         | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                                         | A `SlidingNonce` resource is not published under `lr_account`.                             |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                                         | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                                         | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                                | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ELIBRA_ROOT`                                           | The sending account is not the Libra Root account.                                         |
     * | `Errors::REQUIRES_ROLE`    | `Roles::ELIBRA_ROOT`                                                   | The sending account is not the Libra Root account.                                         |
     * | `Errors::INVALID_ARGUMENT` | `LibraTransactionPublishingOption::EINVALID_SCRIPT_HASH`               | The script `hash` is an invalid length.                                                    |
     * | `Errors::INVALID_ARGUMENT` | `LibraTransactionPublishingOption::EALLOWLIST_ALREADY_CONTAINS_SCRIPT` | The on-chain allowlist already contains the script `hash`.                                 |
     */
    static encodeAddToScriptAllowListScript(hash: Uint8Array, sliding_nonce: BigInt): LibraTypes.Script;
    /**
     * # Summary
     * Adds a validator account to the validator set, and triggers a
     * reconfiguration of the system to admit the account to the validator set for the system. This
     * transaction can only be successfully called by the Libra Root account.
     *
     * # Technical Description
     * This script adds the account at `validator_address` to the validator set.
     * This transaction emits a `LibraConfig::NewEpochEvent` event and triggers a
     * reconfiguration. Once the reconfiguration triggered by this script's
     * execution has been performed, the account at the `validator_address` is
     * considered to be a validator in the network.
     *
     * This transaction script will fail if the `validator_address` address is already in the validator set
     * or does not have a `ValidatorConfig::ValidatorConfig` resource already published under it.
     *
     * # Parameters
     * | Name                | Type         | Description                                                                                                                        |
     * | ------              | ------       | -------------                                                                                                                      |
     * | `lr_account`        | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer.                                    |
     * | `sliding_nonce`     | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                         |
     * | `validator_name`    | `vector<u8>` | ASCII-encoded human name for the validator. Must match the human name in the `ValidatorConfig::ValidatorConfig` for the validator. |
     * | `validator_address` | `address`    | The validator account address to be added to the validator set.                                                                    |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                  | Description                                                                                                                               |
     * | ----------------           | --------------                                | -------------                                                                                                                             |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `lr_account`.                                                                            |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                                |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                                                                             |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                                                                         |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ELIBRA_ROOT`                  | The sending account is not the Libra Root account.                                                                                        |
     * | `Errors::REQUIRES_ROLE`    | `Roles::ELIBRA_ROOT`                          | The sending account is not the Libra Root account.                                                                                        |
     * | 0                          | 0                                             | The provided `validator_name` does not match the already-recorded human name for the validator.                                           |
     * | `Errors::INVALID_ARGUMENT` | `LibraSystem::EINVALID_PROSPECTIVE_VALIDATOR` | The validator to be added does not have a `ValidatorConfig::ValidatorConfig` resource published under it, or its `config` field is empty. |
     * | `Errors::INVALID_ARGUMENT` | `LibraSystem::EALREADY_A_VALIDATOR`           | The `validator_address` account is already a registered validator.                                                                        |
     *
     * # Related Scripts
     * * `Script::create_validator_account`
     * * `Script::create_validator_operator_account`
     * * `Script::register_validator_config`
     * * `Script::remove_validator_and_reconfigure`
     * * `Script::set_validator_operator`
     * * `Script::set_validator_operator_with_nonce_admin`
     * * `Script::set_validator_config_and_reconfigure`
     */
    static encodeAddValidatorAndReconfigureScript(sliding_nonce: BigInt, validator_name: Uint8Array, validator_address: LibraTypes.AccountAddress): LibraTypes.Script;
    /**
     * # Summary
     * Burns all coins held in the preburn resource at the specified
     * preburn address and removes them from the system. The sending account must
     * be the Treasury Compliance account.
     * The account that holds the preburn resource will normally be a Designated
     * Dealer, but there are no enforced requirements that it be one.
     *
     * # Technical Description
     * This transaction permanently destroys all the coins of `Token` type
     * stored in the `Libra::Preburn<Token>` resource published under the
     * `preburn_address` account address.
     *
     * This transaction will only succeed if the sending `account` has a
     * `Libra::BurnCapability<Token>`, and a `Libra::Preburn<Token>` resource
     * exists under `preburn_address`, with a non-zero `to_burn` field. After the successful execution
     * of this transaction the `total_value` field in the
     * `Libra::CurrencyInfo<Token>` resource published under `0xA550C18` will be
     * decremented by the value of the `to_burn` field of the preburn resource
     * under `preburn_address` immediately before this transaction, and the
     * `to_burn` field of the preburn resource will have a zero value.
     *
     * ## Events
     * The successful execution of this transaction will emit a `Libra::BurnEvent` on the event handle
     * held in the `Libra::CurrencyInfo<Token>` resource's `burn_events` published under
     * `0xA550C18`.
     *
     * # Parameters
     * | Name              | Type      | Description                                                                                                                  |
     * | ------            | ------    | -------------                                                                                                                |
     * | `Token`           | Type      | The Move type for the `Token` currency being burned. `Token` must be an already-registered currency on-chain.                |
     * | `tc_account`      | `&signer` | The signer reference of the sending account of this transaction, must have a burn capability for `Token` published under it. |
     * | `sliding_nonce`   | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                   |
     * | `preburn_address` | `address` | The address where the coins to-be-burned are currently held.                                                                 |
     *
     * # Common Abort Conditions
     * | Error Category                | Error Reason                            | Description                                                                                           |
     * | ----------------              | --------------                          | -------------                                                                                         |
     * | `Errors::NOT_PUBLISHED`       | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `account`.                                           |
     * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.            |
     * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                                         |
     * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                                     |
     * | `Errors::REQUIRES_CAPABILITY` | `Libra::EBURN_CAPABILITY`               | The sending `account` does not have a `Libra::BurnCapability<Token>` published under it.              |
     * | `Errors::NOT_PUBLISHED`       | `Libra::EPREBURN`                       | The account at `preburn_address` does not have a `Libra::Preburn<Token>` resource published under it. |
     * | `Errors::INVALID_STATE`       | `Libra::EPREBURN_EMPTY`                 | The `Libra::Preburn<Token>` resource is empty (has a value of 0).                                     |
     * | `Errors::NOT_PUBLISHED`       | `Libra::ECURRENCY_INFO`                 | The specified `Token` is not a registered currency on-chain.                                          |
     *
     * # Related Scripts
     * * `Script::burn_txn_fees`
     * * `Script::cancel_burn`
     * * `Script::preburn`
     */
    static encodeBurnScript(token: LibraTypes.TypeTag, sliding_nonce: BigInt, preburn_address: LibraTypes.AccountAddress): LibraTypes.Script;
    /**
     * # Summary
     * Burns the transaction fees collected in the `CoinType` currency so that the
     * Libra association may reclaim the backing coins off-chain. May only be sent
     * by the Treasury Compliance account.
     *
     * # Technical Description
     * Burns the transaction fees collected in `CoinType` so that the
     * association may reclaim the backing coins. Once this transaction has executed
     * successfully all transaction fees that will have been collected in
     * `CoinType` since the last time this script was called with that specific
     * currency. Both `balance` and `preburn` fields in the
     * `TransactionFee::TransactionFee<CoinType>` resource published under the `0xB1E55ED`
     * account address will have a value of 0 after the successful execution of this script.
     *
     * ## Events
     * The successful execution of this transaction will emit a `Libra::BurnEvent` on the event handle
     * held in the `Libra::CurrencyInfo<CoinType>` resource's `burn_events` published under
     * `0xA550C18`.
     *
     * # Parameters
     * | Name         | Type      | Description                                                                                                                                         |
     * | ------       | ------    | -------------                                                                                                                                       |
     * | `CoinType`   | Type      | The Move type for the `CoinType` being added to the sending account of the transaction. `CoinType` must be an already-registered currency on-chain. |
     * | `tc_account` | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.                                           |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                          | Description                                                 |
     * | ----------------           | --------------                        | -------------                                               |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE` | The sending account is not the Treasury Compliance account. |
     * | `Errors::NOT_PUBLISHED`    | `TransactionFee::ETRANSACTION_FEE`    | `CoinType` is not an accepted transaction fee currency.     |
     * | `Errors::INVALID_ARGUMENT` | `Libra::ECOIN`                        | The collected fees in `CoinType` are zero.                  |
     *
     * # Related Scripts
     * * `Script::burn`
     * * `Script::cancel_burn`
     */
    static encodeBurnTxnFeesScript(coin_type: LibraTypes.TypeTag): LibraTypes.Script;
    /**
     * # Summary
     * Cancels and returns all coins held in the preburn area under
     * `preburn_address` and returns the funds to the `preburn_address`'s balance.
     * Can only be successfully sent by an account with Treasury Compliance role.
     *
     * # Technical Description
     * Cancels and returns all coins held in the `Libra::Preburn<Token>` resource under the `preburn_address` and
     * return the funds to the `preburn_address` account's `LibraAccount::Balance<Token>`.
     * The transaction must be sent by an `account` with a `Libra::BurnCapability<Token>`
     * resource published under it. The account at `preburn_address` must have a
     * `Libra::Preburn<Token>` resource published under it, and its value must be nonzero. The transaction removes
     * the entire balance held in the `Libra::Preburn<Token>` resource, and returns it back to the account's
     * `LibraAccount::Balance<Token>` under `preburn_address`. Due to this, the account at
     * `preburn_address` must already have a balance in the `Token` currency published
     * before this script is called otherwise the transaction will fail.
     *
     * ## Events
     * The successful execution of this transaction will emit:
     * * A `Libra::CancelBurnEvent` on the event handle held in the `Libra::CurrencyInfo<Token>`
     * resource's `burn_events` published under `0xA550C18`.
     * * A `LibraAccount::ReceivedPaymentEvent` on the `preburn_address`'s
     * `LibraAccount::LibraAccount` `received_events` event handle with both the `payer` and `payee`
     * being `preburn_address`.
     *
     * # Parameters
     * | Name              | Type      | Description                                                                                                                          |
     * | ------            | ------    | -------------                                                                                                                        |
     * | `Token`           | Type      | The Move type for the `Token` currenty that burning is being cancelled for. `Token` must be an already-registered currency on-chain. |
     * | `account`         | `&signer` | The signer reference of the sending account of this transaction, must have a burn capability for `Token` published under it.         |
     * | `preburn_address` | `address` | The address where the coins to-be-burned are currently held.                                                                         |
     *
     * # Common Abort Conditions
     * | Error Category                | Error Reason                                     | Description                                                                                           |
     * | ----------------              | --------------                                   | -------------                                                                                         |
     * | `Errors::REQUIRES_CAPABILITY` | `Libra::EBURN_CAPABILITY`                        | The sending `account` does not have a `Libra::BurnCapability<Token>` published under it.              |
     * | `Errors::NOT_PUBLISHED`       | `Libra::EPREBURN`                                | The account at `preburn_address` does not have a `Libra::Preburn<Token>` resource published under it. |
     * | `Errors::NOT_PUBLISHED`       | `Libra::ECURRENCY_INFO`                          | The specified `Token` is not a registered currency on-chain.                                          |
     * | `Errors::INVALID_ARGUMENT`    | `LibraAccount::ECOIN_DEPOSIT_IS_ZERO`            | The value held in the preburn resource was zero.                                                      |
     * | `Errors::INVALID_ARGUMENT`    | `LibraAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE` | The account at `preburn_address` doesn't have a balance resource for `Token`.                         |
     * | `Errors::LIMIT_EXCEEDED`      | `LibraAccount::EDEPOSIT_EXCEEDS_LIMITS`          | The depositing of the funds held in the prebun area would exceed the `account`'s account limits.      |
     * | `Errors::INVALID_STATE`       | `DualAttestation::EPAYEE_COMPLIANCE_KEY_NOT_SET` | The `account` does not have a compliance key set on it but dual attestion checking was performed.     |
     *
     * # Related Scripts
     * * `Script::burn_txn_fees`
     * * `Script::burn`
     * * `Script::preburn`
     */
    static encodeCancelBurnScript(token: LibraTypes.TypeTag, preburn_address: LibraTypes.AccountAddress): LibraTypes.Script;
    /**
     * # Summary
     * Creates a Child VASP account with its parent being the sending account of the transaction.
     * The sender of the transaction must be a Parent VASP account.
     *
     * # Technical Description
     * Creates a `ChildVASP` account for the sender `parent_vasp` at `child_address` with a balance of
     * `child_initial_balance` in `CoinType` and an initial authentication key of
     * `auth_key_prefix | child_address`.
     *
     * If `add_all_currencies` is true, the child address will have a zero balance in all available
     * currencies in the system.
     *
     * The new account will be a child account of the transaction sender, which must be a
     * Parent VASP account. The child account will be recorded against the limit of
     * child accounts of the creating Parent VASP account.
     *
     * ## Events
     * Successful execution with a `child_initial_balance` greater than zero will emit:
     * * A `LibraAccount::SentPaymentEvent` with the `payer` field being the Parent VASP's address,
     * and payee field being `child_address`. This is emitted on the Parent VASP's
     * `LibraAccount::LibraAccount` `sent_events` handle.
     * * A `LibraAccount::ReceivedPaymentEvent` with the  `payer` field being the Parent VASP's address,
     * and payee field being `child_address`. This is emitted on the new Child VASPS's
     * `LibraAccount::LibraAccount` `received_events` handle.
     *
     * # Parameters
     * | Name                    | Type         | Description                                                                                                                                 |
     * | ------                  | ------       | -------------                                                                                                                               |
     * | `CoinType`              | Type         | The Move type for the `CoinType` that the child account should be created with. `CoinType` must be an already-registered currency on-chain. |
     * | `parent_vasp`           | `&signer`    | The signer reference of the sending account. Must be a Parent VASP account.                                                                 |
     * | `child_address`         | `address`    | Address of the to-be-created Child VASP account.                                                                                            |
     * | `auth_key_prefix`       | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                    |
     * | `add_all_currencies`    | `bool`       | Whether to publish balance resources for all known currencies when the account is created.                                                  |
     * | `child_initial_balance` | `u64`        | The initial balance in `CoinType` to give the child account when it's created.                                                              |
     *
     * # Common Abort Conditions
     * | Error Category              | Error Reason                                             | Description                                                                              |
     * | ----------------            | --------------                                           | -------------                                                                            |
     * | `Errors::INVALID_ARGUMENT`  | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY`            | The `auth_key_prefix` was not of length 32.                                              |
     * | `Errors::REQUIRES_ROLE`     | `Roles::EPARENT_VASP`                                    | The sending account wasn't a Parent VASP account.                                        |
     * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                                        | The `child_address` address is already taken.                                            |
     * | `Errors::LIMIT_EXCEEDED`    | `VASP::ETOO_MANY_CHILDREN`                               | The sending account has reached the maximum number of allowed child accounts.            |
     * | `Errors::NOT_PUBLISHED`     | `Libra::ECURRENCY_INFO`                                  | The `CoinType` is not a registered currency on-chain.                                    |
     * | `Errors::INVALID_STATE`     | `LibraAccount::EWITHDRAWAL_CAPABILITY_ALREADY_EXTRACTED` | The withdrawal capability for the sending account has already been extracted.            |
     * | `Errors::NOT_PUBLISHED`     | `LibraAccount::EPAYER_DOESNT_HOLD_CURRENCY`              | The sending account doesn't have a balance in `CoinType`.                                |
     * | `Errors::LIMIT_EXCEEDED`    | `LibraAccount::EINSUFFICIENT_BALANCE`                    | The sending account doesn't have at least `child_initial_balance` of `CoinType` balance. |
     * | `Errors::INVALID_ARGUMENT`  | `LibraAccount::ECANNOT_CREATE_AT_VM_RESERVED`            | The `child_address` is the reserved address 0x0.                                         |
     *
     * # Related Scripts
     * * `Script::create_parent_vasp_account`
     * * `Script::add_currency_to_account`
     * * `Script::rotate_authentication_key`
     * * `Script::add_recovery_rotation_capability`
     * * `Script::create_recovery_address`
     */
    static encodeCreateChildVaspAccountScript(coin_type: LibraTypes.TypeTag, child_address: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, add_all_currencies: boolean, child_initial_balance: BigInt): LibraTypes.Script;
    /**
     * # Summary
     * Creates a Designated Dealer account with the provided information, and initializes it with
     * default mint tiers. The transaction can only be sent by the Treasury Compliance account.
     *
     * # Technical Description
     * Creates an account with the Designated Dealer role at `addr` with authentication key
     * `auth_key_prefix` | `addr` and a 0 balance of type `Types`. If `add_all_currencies` is true,
     * 0 balances for all available currencies in the system will also be added. This can only be
     * invoked by an account with the TreasuryCompliance role.
     *
     * At the time of creation the account is also initialized with default mint tiers of (500_000,
     * 5000_000, 50_000_000, 500_000_000), and preburn areas for each currency that is added to the
     * account.
     *
     * # Parameters
     * | Name                 | Type         | Description                                                                                                                                         |
     * | ------               | ------       | -------------                                                                                                                                       |
     * | `Types`           | Type         | The Move type for the `Types` that the Designated Dealer should be initialized with. `Types` must be an already-registered currency on-chain. |
     * | `tc_account`         | `&signer`    | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.                                           |
     * | `sliding_nonce`      | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                                          |
     * | `addr`               | `address`    | Address of the to-be-created Designated Dealer account.                                                                                             |
     * | `auth_key_prefix`    | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                            |
     * | `human_name`         | `vector<u8>` | ASCII-encoded human name for the Designated Dealer.                                                                                                 |
     * | `add_all_currencies` | `bool`       | Whether to publish preburn, balance, and tier info resources for all known (SCS) currencies or just `Types` when the account is created.         |
     *
  
     * # Common Abort Conditions
     * | Error Category              | Error Reason                            | Description                                                                                |
     * | ----------------            | --------------                          | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |
     * | `Errors::REQUIRES_ROLE`     | `Roles::ETREASURY_COMPLIANCE`           | The sending account is not the Treasury Compliance account.                                |
     * | `Errors::NOT_PUBLISHED`     | `Libra::ECURRENCY_INFO`                 | The `Types` is not a registered currency on-chain.                                      |
     * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `addr` address is already taken.                                                       |
     *
     * # Related Scripts
     * * `Script::tiered_mint`
     * * `Script::peer_to_peer_with_metadata`
     * * `Script::rotate_dual_attestation_info`
     */
    static encodeCreateDesignatedDealerScript(currency: LibraTypes.TypeTag, sliding_nonce: BigInt, addr: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array, add_all_currencies: boolean): LibraTypes.Script;
    /**
     * # Summary
     * Creates a Parent VASP account with the specified human name. Must be called by the Treasury Compliance account.
     *
     * # Technical Description
     * Creates an account with the Parent VASP role at `address` with authentication key
     * `auth_key_prefix` | `new_account_address` and a 0 balance of type `CoinType`. If
     * `add_all_currencies` is true, 0 balances for all available currencies in the system will
     * also be added. This can only be invoked by an TreasuryCompliance account.
     * `sliding_nonce` is a unique nonce for operation, see `SlidingNonce` for details.
     *
     * # Parameters
     * | Name                  | Type         | Description                                                                                                                                                    |
     * | ------                | ------       | -------------                                                                                                                                                  |
     * | `CoinType`            | Type         | The Move type for the `CoinType` currency that the Parent VASP account should be initialized with. `CoinType` must be an already-registered currency on-chain. |
     * | `tc_account`          | `&signer`    | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.                                                      |
     * | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                                                     |
     * | `new_account_address` | `address`    | Address of the to-be-created Parent VASP account.                                                                                                              |
     * | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                                       |
     * | `human_name`          | `vector<u8>` | ASCII-encoded human name for the Parent VASP.                                                                                                                  |
     * | `add_all_currencies`  | `bool`       | Whether to publish balance resources for all known currencies when the account is created.                                                                     |
     *
     * # Common Abort Conditions
     * | Error Category              | Error Reason                            | Description                                                                                |
     * | ----------------            | --------------                          | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |
     * | `Errors::REQUIRES_ROLE`     | `Roles::ETREASURY_COMPLIANCE`           | The sending account is not the Treasury Compliance account.                                |
     * | `Errors::NOT_PUBLISHED`     | `Libra::ECURRENCY_INFO`                 | The `CoinType` is not a registered currency on-chain.                                      |
     * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |
     *
     * # Related Scripts
     * * `Script::create_child_vasp_account`
     * * `Script::add_currency_to_account`
     * * `Script::rotate_authentication_key`
     * * `Script::add_recovery_rotation_capability`
     * * `Script::create_recovery_address`
     * * `Script::rotate_dual_attestation_info`
     */
    static encodeCreateParentVaspAccountScript(coin_type: LibraTypes.TypeTag, sliding_nonce: BigInt, new_account_address: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array, add_all_currencies: boolean): LibraTypes.Script;
    /**
     * # Summary
     * Initializes the sending account as a recovery address that may be used by
     * the VASP that it belongs to. The sending account must be a VASP account.
     * Multiple recovery addresses can exist for a single VASP, but accounts in
     * each must be disjoint.
     *
     * # Technical Description
     * Publishes a `RecoveryAddress::RecoveryAddress` resource under `account`. It then
     * extracts the `LibraAccount::KeyRotationCapability` for `account` and adds
     * it to the resource. After the successful execution of this transaction
     * other accounts may add their key rotation to this resource so that `account`
     * may be used as a recovery account for those accounts.
     *
     * # Parameters
     * | Name      | Type      | Description                                           |
     * | ------    | ------    | -------------                                         |
     * | `account` | `&signer` | The signer of the sending account of the transaction. |
     *
     * # Common Abort Conditions
     * | Error Category              | Error Reason                                               | Description                                                                                   |
     * | ----------------            | --------------                                             | -------------                                                                                 |
     * | `Errors::INVALID_STATE`     | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`.          |
     * | `Errors::INVALID_ARGUMENT`  | `RecoveryAddress::ENOT_A_VASP`                             | `account` is not a VASP account.                                                              |
     * | `Errors::INVALID_ARGUMENT`  | `RecoveryAddress::EKEY_ROTATION_DEPENDENCY_CYCLE`          | A key rotation recovery cycle would be created by adding `account`'s key rotation capability. |
     * | `Errors::ALREADY_PUBLISHED` | `RecoveryAddress::ERECOVERY_ADDRESS`                       | A `RecoveryAddress::RecoveryAddress` resource has already been published under `account`.     |
     *
     * # Related Scripts
     * * `Script::add_recovery_rotation_capability`
     * * `Script::rotate_authentication_key_with_recovery_address`
     */
    static encodeCreateRecoveryAddressScript(): LibraTypes.Script;
    /**
     * # Summary
     * Creates a Validator account. This transaction can only be sent by the Libra
     * Root account.
     *
     * # Technical Description
     * Creates an account with a Validator role at `new_account_address`, with authentication key
     * `auth_key_prefix` | `new_account_address`. It publishes a
     * `ValidatorConfig::ValidatorConfig` resource with empty `config`, and
     * `operator_account` fields. The `human_name` field of the
     * `ValidatorConfig::ValidatorConfig` is set to the passed in `human_name`.
     * This script does not add the validator to the validator set or the system,
     * but only creates the account.
     *
     * # Parameters
     * | Name                  | Type         | Description                                                                                     |
     * | ------                | ------       | -------------                                                                                   |
     * | `lr_account`          | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer. |
     * | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |
     * | `new_account_address` | `address`    | Address of the to-be-created Validator account.                                                 |
     * | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.        |
     * | `human_name`          | `vector<u8>` | ASCII-encoded human name for the validator.                                                     |
     *
     * # Common Abort Conditions
     * | Error Category              | Error Reason                            | Description                                                                                |
     * | ----------------            | --------------                          | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `lr_account`.                             |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ELIBRA_ROOT`            | The sending account is not the Libra Root account.                                         |
     * | `Errors::REQUIRES_ROLE`     | `Roles::ELIBRA_ROOT`                    | The sending account is not the Libra Root account.                                         |
     * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |
     *
     * # Related Scripts
     * * `Script::add_validator_and_reconfigure`
     * * `Script::create_validator_operator_account`
     * * `Script::register_validator_config`
     * * `Script::remove_validator_and_reconfigure`
     * * `Script::set_validator_operator`
     * * `Script::set_validator_operator_with_nonce_admin`
     * * `Script::set_validator_config_and_reconfigure`
     */
    static encodeCreateValidatorAccountScript(sliding_nonce: BigInt, new_account_address: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Creates a Validator Operator account. This transaction can only be sent by the Libra
     * Root account.
     *
     * # Technical Description
     * Creates an account with a Validator Operator role at `new_account_address`, with authentication key
     * `auth_key_prefix` | `new_account_address`. It publishes a
     * `ValidatorOperatorConfig::ValidatorOperatorConfig` resource with the specified `human_name`.
     * This script does not assign the validator operator to any validator accounts but only creates the account.
     *
     * # Parameters
     * | Name                  | Type         | Description                                                                                     |
     * | ------                | ------       | -------------                                                                                   |
     * | `lr_account`          | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer. |
     * | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |
     * | `new_account_address` | `address`    | Address of the to-be-created Validator account.                                                 |
     * | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.        |
     * | `human_name`          | `vector<u8>` | ASCII-encoded human name for the validator.                                                     |
     *
     * # Common Abort Conditions
     * | Error Category              | Error Reason                            | Description                                                                                |
     * | ----------------            | --------------                          | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `lr_account`.                             |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ELIBRA_ROOT`            | The sending account is not the Libra Root account.                                         |
     * | `Errors::REQUIRES_ROLE`     | `Roles::ELIBRA_ROOT`                    | The sending account is not the Libra Root account.                                         |
     * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |
     *
     * # Related Scripts
     * * `Script::create_validator_account`
     * * `Script::add_validator_and_reconfigure`
     * * `Script::register_validator_config`
     * * `Script::remove_validator_and_reconfigure`
     * * `Script::set_validator_operator`
     * * `Script::set_validator_operator_with_nonce_admin`
     * * `Script::set_validator_config_and_reconfigure`
     */
    static encodeCreateValidatorOperatorAccountScript(sliding_nonce: BigInt, new_account_address: LibraTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Freezes the account at `address`. The sending account of this transaction
     * must be the Treasury Compliance account. The account being frozen cannot be
     * the Libra Root or Treasury Compliance account. After the successful
     * execution of this transaction no transactions may be sent from the frozen
     * account, and the frozen account may not send or receive coins.
     *
     * # Technical Description
     * Sets the `AccountFreezing::FreezingBit` to `true` and emits a
     * `AccountFreezing::FreezeAccountEvent`. The transaction sender must be the
     * Treasury Compliance account, but the account at `to_freeze_account` must
     * not be either `0xA550C18` (the Libra Root address), or `0xB1E55ED` (the
     * Treasury Compliance address). Note that this is a per-account property
     * e.g., freezing a Parent VASP will not effect the status any of its child
     * accounts and vice versa.
     *
  
     * ## Events
     * Successful execution of this transaction will emit a `AccountFreezing::FreezeAccountEvent` on
     * the `freeze_event_handle` held in the `AccountFreezing::FreezeEventsHolder` resource published
     * under `0xA550C18` with the `frozen_address` being the `to_freeze_account`.
     *
     * # Parameters
     * | Name                | Type      | Description                                                                                               |
     * | ------              | ------    | -------------                                                                                             |
     * | `tc_account`        | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account. |
     * | `sliding_nonce`     | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                |
     * | `to_freeze_account` | `address` | The account address to be frozen.                                                                         |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                 | Description                                                                                |
     * | ----------------           | --------------                               | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `tc_account`.                             |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`        | The sending account is not the Treasury Compliance account.                                |
     * | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`                | The sending account is not the Treasury Compliance account.                                |
     * | `Errors::INVALID_ARGUMENT` | `AccountFreezing::ECANNOT_FREEZE_TC`         | `to_freeze_account` was the Treasury Compliance account (`0xB1E55ED`).                     |
     * | `Errors::INVALID_ARGUMENT` | `AccountFreezing::ECANNOT_FREEZE_LIBRA_ROOT` | `to_freeze_account` was the Libra Root account (`0xA550C18`).                              |
     *
     * # Related Scripts
     * * `Scripts::unfreeze_account`
     */
    static encodeFreezeAccountScript(sliding_nonce: BigInt, to_freeze_account: LibraTypes.AccountAddress): LibraTypes.Script;
    /**
     * # Summary
     * Transfers a given number of coins in a specified currency from one account to another.
     * Transfers over a specified amount defined on-chain that are between two different VASPs, or
     * other accounts that have opted-in will be subject to on-chain checks to ensure the receiver has
     * agreed to receive the coins.  This transaction can be sent by any account that can hold a
     * balance, and to any account that can hold a balance. Both accounts must hold balances in the
     * currency being transacted.
     *
     * # Technical Description
     *
     * Transfers `amount` coins of type `Types` from `payer` to `payee` with (optional) associated
     * `metadata` and an (optional) `metadata_signature` on the message
     * `metadata` | `Signer::address_of(payer)` | `amount` | `DualAttestation::DOMAIN_SEPARATOR`.
     * The `metadata` and `metadata_signature` parameters are only required if `amount` >=
     * `DualAttestation::get_cur_microlibra_limit` LBR and `payer` and `payee` are distinct VASPs.
     * However, a transaction sender can opt in to dual attestation even when it is not required
     * (e.g., a DesignatedDealer -> VASP payment) by providing a non-empty `metadata_signature`.
     * Standardized `metadata` LCS format can be found in `libra_types::transaction::metadata::Metadata`.
     *
     * ## Events
     * Successful execution of this script emits two events:
     * * A `LibraAccount::SentPaymentEvent` on `payer`'s `LibraAccount::LibraAccount` `sent_events` handle; and
     * * A `LibraAccount::ReceivedPaymentEvent` on `payee`'s `LibraAccount::LibraAccount` `received_events` handle.
     *
     * # Parameters
     * | Name                 | Type         | Description                                                                                                                  |
     * | ------               | ------       | -------------                                                                                                                |
     * | `Types`           | Type         | The Move type for the `Types` being sent in this transaction. `Types` must be an already-registered currency on-chain. |
     * | `payer`              | `&signer`    | The signer reference of the sending account that coins are being transferred from.                                           |
     * | `payee`              | `address`    | The address of the account the coins are being transferred to.                                                               |
     * | `metadata`           | `vector<u8>` | Optional metadata about this payment.                                                                                        |
     * | `metadata_signature` | `vector<u8>` | Optional signature over `metadata` and payment information. See                                                              |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                     | Description                                                                                                                         |
     * | ----------------           | --------------                                   | -------------                                                                                                                       |
     * | `Errors::NOT_PUBLISHED`    | `LibraAccount::EPAYER_DOESNT_HOLD_CURRENCY`      | `payer` doesn't hold a balance in `Types`.                                                                                       |
     * | `Errors::LIMIT_EXCEEDED`   | `LibraAccount::EINSUFFICIENT_BALANCE`            | `amount` is greater than `payer`'s balance in `Types`.                                                                           |
     * | `Errors::INVALID_ARGUMENT` | `LibraAccount::ECOIN_DEPOSIT_IS_ZERO`            | `amount` is zero.                                                                                                                   |
     * | `Errors::NOT_PUBLISHED`    | `LibraAccount::EPAYEE_DOES_NOT_EXIST`            | No account exists at the `payee` address.                                                                                           |
     * | `Errors::INVALID_ARGUMENT` | `LibraAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE` | An account exists at `payee`, but it does not accept payments in `Types`.                                                        |
     * | `Errors::INVALID_STATE`    | `AccountFreezing::EACCOUNT_FROZEN`               | The `payee` account is frozen.                                                                                                      |
     * | `Errors::INVALID_ARGUMENT` | `DualAttestation::EMALFORMED_METADATA_SIGNATURE` | `metadata_signature` is not 64 bytes.                                                                                               |
     * | `Errors::INVALID_ARGUMENT` | `DualAttestation::EINVALID_METADATA_SIGNATURE`   | `metadata_signature` does not verify on the against the `payee'`s `DualAttestation::Credential` `compliance_public_key` public key. |
     * | `Errors::LIMIT_EXCEEDED`   | `LibraAccount::EWITHDRAWAL_EXCEEDS_LIMITS`       | `payer` has exceeded its daily withdrawal limits for the backing coins of LBR.                                                      |
     * | `Errors::LIMIT_EXCEEDED`   | `LibraAccount::EDEPOSIT_EXCEEDS_LIMITS`          | `payee` has exceeded its daily deposit limits for LBR.                                                                              |
     *
     * # Related Scripts
     * * `Script::create_child_vasp_account`
     * * `Script::create_parent_vasp_account`
     * * `Script::add_currency_to_account`
     */
    static encodePeerToPeerWithMetadataScript(currency: LibraTypes.TypeTag, payee: LibraTypes.AccountAddress, amount: BigInt, metadata: Uint8Array, metadata_signature: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Moves a specified number of coins in a given currency from the account's
     * balance to its preburn area after which the coins may be burned. This
     * transaction may be sent by any account that holds a balance and preburn area
     * in the specified currency.
     *
     * # Technical Description
     * Moves the specified `amount` of coins in `Token` currency from the sending `account`'s
     * `LibraAccount::Balance<Token>` to the `Libra::Preburn<Token>` published under the same
     * `account`. `account` must have both of these resources published under it at the start of this
     * transaction in order for it to execute successfully.
     *
     * ## Events
     * Successful execution of this script emits two events:
     * * `LibraAccount::SentPaymentEvent ` on `account`'s `LibraAccount::LibraAccount` `sent_events`
     * handle with the `payee` and `payer` fields being `account`'s address; and
     * * A `Libra::PreburnEvent` with `Token`'s currency code on the
     * `Libra::CurrencyInfo<Token`'s `preburn_events` handle for `Token` and with
     * `preburn_address` set to `account`'s address.
     *
     * # Parameters
     * | Name      | Type      | Description                                                                                                                      |
     * | ------    | ------    | -------------                                                                                                                    |
     * | `Token`   | Type      | The Move type for the `Token` currency being moved to the preburn area. `Token` must be an already-registered currency on-chain. |
     * | `account` | `&signer` | The signer reference of the sending account.                                                                                     |
     * | `amount`  | `u64`     | The amount in `Token` to be moved to the preburn area.                                                                           |
     *
     * # Common Abort Conditions
     * | Error Category           | Error Reason                                             | Description                                                                             |
     * | ----------------         | --------------                                           | -------------                                                                           |
     * | `Errors::NOT_PUBLISHED`  | `Libra::ECURRENCY_INFO`                                  | The `Token` is not a registered currency on-chain.                                      |
     * | `Errors::INVALID_STATE`  | `LibraAccount::EWITHDRAWAL_CAPABILITY_ALREADY_EXTRACTED` | The withdrawal capability for `account` has already been extracted.                     |
     * | `Errors::LIMIT_EXCEEDED` | `LibraAccount::EINSUFFICIENT_BALANCE`                    | `amount` is greater than `payer`'s balance in `Token`.                                  |
     * | `Errors::NOT_PUBLISHED`  | `LibraAccount::EPAYER_DOESNT_HOLD_CURRENCY`              | `account` doesn't hold a balance in `Token`.                                            |
     * | `Errors::NOT_PUBLISHED`  | `Libra::EPREBURN`                                        | `account` doesn't have a `Libra::Preburn<Token>` resource published under it.           |
     * | `Errors::INVALID_STATE`  | `Libra::EPREBURN_OCCUPIED`                               | The `value` field in the `Libra::Preburn<Token>` resource under the sender is non-zero. |
     *
     * # Related Scripts
     * * `Script::cancel_burn`
     * * `Script::burn`
     * * `Script::burn_txn_fees`
     */
    static encodePreburnScript(token: LibraTypes.TypeTag, amount: BigInt): LibraTypes.Script;
    /**
     * # Summary
     * Rotates the authentication key of the sending account to the
     * newly-specified public key and publishes a new shared authentication key
     * under the sender's account. Any account can send this transaction.
     *
     * # Technical Description
     * Rotates the authentication key of the sending account to `public_key`,
     * and publishes a `SharedEd25519PublicKey::SharedEd25519PublicKey` resource
     * containing the 32-byte ed25519 `public_key` and the `LibraAccount::KeyRotationCapability` for
     * `account` under `account`.
     *
     * # Parameters
     * | Name         | Type         | Description                                                                               |
     * | ------       | ------       | -------------                                                                             |
     * | `account`    | `&signer`    | The signer reference of the sending account of the transaction.                           |
     * | `public_key` | `vector<u8>` | 32-byte Ed25519 public key for `account`' authentication key to be rotated to and stored. |
     *
     * # Common Abort Conditions
     * | Error Category              | Error Reason                                               | Description                                                                                         |
     * | ----------------            | --------------                                             | -------------                                                                                       |
     * | `Errors::INVALID_STATE`     | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability` resource.       |
     * | `Errors::ALREADY_PUBLISHED` | `SharedEd25519PublicKey::ESHARED_KEY`                      | The `SharedEd25519PublicKey::SharedEd25519PublicKey` resource is already published under `account`. |
     * | `Errors::INVALID_ARGUMENT`  | `SharedEd25519PublicKey::EMALFORMED_PUBLIC_KEY`            | `public_key` is an invalid ed25519 public key.                                                      |
     *
     * # Related Scripts
     * * `Script::rotate_shared_ed25519_public_key`
     */
    static encodePublishSharedEd25519PublicKeyScript(public_key: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Updates a validator's configuration. This does not reconfigure the system and will not update
     * the configuration in the validator set that is seen by other validators in the network. Can
     * only be successfully sent by a Validator Operator account that is already registered with a
     * validator.
     *
     * # Technical Description
     * This updates the fields with corresponding names held in the `ValidatorConfig::ValidatorConfig`
     * config resource held under `validator_account`. It does not emit a `LibraConfig::NewEpochEvent`
     * so the copy of this config held in the validator set will not be updated, and the changes are
     * only "locally" under the `validator_account` account address.
     *
     * # Parameters
     * | Name                          | Type         | Description                                                                                                                  |
     * | ------                        | ------       | -------------                                                                                                                |
     * | `validator_operator_account`  | `&signer`    | Signer reference of the sending account. Must be the registered validator operator for the validator at `validator_address`. |
     * | `validator_account`           | `address`    | The address of the validator's `ValidatorConfig::ValidatorConfig` resource being updated.                                    |
     * | `consensus_pubkey`            | `vector<u8>` | New Ed25519 public key to be used in the updated `ValidatorConfig::ValidatorConfig`.                                         |
     * | `validator_network_addresses` | `vector<u8>` | New set of `validator_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.                       |
     * | `fullnode_network_addresses`  | `vector<u8>` | New set of `fullnode_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.                        |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                   | Description                                                                                           |
     * | ----------------           | --------------                                 | -------------                                                                                         |
     * | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`           | `validator_address` does not have a `ValidatorConfig::ValidatorConfig` resource published under it.   |
     * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_TRANSACTION_SENDER` | `validator_operator_account` is not the registered operator for the validator at `validator_address`. |
     * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_CONSENSUS_KEY`      | `consensus_pubkey` is not a valid ed25519 public key.                                                 |
     *
     * # Related Scripts
     * * `Script::create_validator_account`
     * * `Script::create_validator_operator_account`
     * * `Script::add_validator_and_reconfigure`
     * * `Script::remove_validator_and_reconfigure`
     * * `Script::set_validator_operator`
     * * `Script::set_validator_operator_with_nonce_admin`
     * * `Script::set_validator_config_and_reconfigure`
     */
    static encodeRegisterValidatorConfigScript(validator_account: LibraTypes.AccountAddress, consensus_pubkey: Uint8Array, validator_network_addresses: Uint8Array, fullnode_network_addresses: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * This script removes a validator account from the validator set, and triggers a reconfiguration
     * of the system to remove the validator from the system. This transaction can only be
     * successfully called by the Libra Root account.
     *
     * # Technical Description
     * This script removes the account at `validator_address` from the validator set. This transaction
     * emits a `LibraConfig::NewEpochEvent` event. Once the reconfiguration triggered by this event
     * has been performed, the account at `validator_address` is no longer considered to be a
     * validator in the network. This transaction will fail if the validator at `validator_address`
     * is not in the validator set.
     *
     * # Parameters
     * | Name                | Type         | Description                                                                                                                        |
     * | ------              | ------       | -------------                                                                                                                      |
     * | `lr_account`        | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer.                                    |
     * | `sliding_nonce`     | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                         |
     * | `validator_name`    | `vector<u8>` | ASCII-encoded human name for the validator. Must match the human name in the `ValidatorConfig::ValidatorConfig` for the validator. |
     * | `validator_address` | `address`    | The validator account address to be removed from the validator set.                                                                |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                            | Description                                                                                     |
     * | ----------------           | --------------                          | -------------                                                                                   |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `lr_account`.                                  |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.      |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                                   |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                               |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | The sending account is not the Libra Root account or Treasury Compliance account                |
     * | 0                          | 0                                       | The provided `validator_name` does not match the already-recorded human name for the validator. |
     * | `Errors::INVALID_ARGUMENT` | `LibraSystem::ENOT_AN_ACTIVE_VALIDATOR` | The validator to be removed is not in the validator set.                                        |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ELIBRA_ROOT`            | The sending account is not the Libra Root account.                                              |
     * | `Errors::REQUIRES_ROLE`    | `Roles::ELIBRA_ROOT`                    | The sending account is not the Libra Root account.                                              |
     *
     * # Related Scripts
     * * `Script::create_validator_account`
     * * `Script::create_validator_operator_account`
     * * `Script::register_validator_config`
     * * `Script::add_validator_and_reconfigure`
     * * `Script::set_validator_operator`
     * * `Script::set_validator_operator_with_nonce_admin`
     * * `Script::set_validator_config_and_reconfigure`
     */
    static encodeRemoveValidatorAndReconfigureScript(sliding_nonce: BigInt, validator_name: Uint8Array, validator_address: LibraTypes.AccountAddress): LibraTypes.Script;
    /**
     * # Summary
     * Rotates the transaction sender's authentication key to the supplied new authentication key. May
     * be sent by any account.
     *
     * # Technical Description
     * Rotate the `account`'s `LibraAccount::LibraAccount` `authentication_key` field to `new_key`.
     * `new_key` must be a valid ed25519 public key, and `account` must not have previously delegated
     * its `LibraAccount::KeyRotationCapability`.
     *
     * # Parameters
     * | Name      | Type         | Description                                                 |
     * | ------    | ------       | -------------                                               |
     * | `account` | `&signer`    | Signer reference of the sending account of the transaction. |
     * | `new_key` | `vector<u8>` | New ed25519 public key to be used for `account`.            |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                               | Description                                                                              |
     * | ----------------           | --------------                                             | -------------                                                                            |
     * | `Errors::INVALID_STATE`    | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`.     |
     * | `Errors::INVALID_ARGUMENT` | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                         |
     *
     * # Related Scripts
     * * `Script::rotate_authentication_key_with_nonce`
     * * `Script::rotate_authentication_key_with_nonce_admin`
     * * `Script::rotate_authentication_key_with_recovery_address`
     */
    static encodeRotateAuthenticationKeyScript(new_key: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Rotates the sender's authentication key to the supplied new authentication key. May be sent by
     * any account that has a sliding nonce resource published under it (usually this is Treasury
     * Compliance or Libra Root accounts).
     *
     * # Technical Description
     * Rotates the `account`'s `LibraAccount::LibraAccount` `authentication_key` field to `new_key`.
     * `new_key` must be a valid ed25519 public key, and `account` must not have previously delegated
     * its `LibraAccount::KeyRotationCapability`.
     *
     * # Parameters
     * | Name            | Type         | Description                                                                |
     * | ------          | ------       | -------------                                                              |
     * | `account`       | `&signer`    | Signer reference of the sending account of the transaction.                |
     * | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |
     * | `new_key`       | `vector<u8>` | New ed25519 public key to be used for `account`.                           |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                               | Description                                                                                |
     * | ----------------           | --------------                                             | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                             | A `SlidingNonce` resource is not published under `account`.                                |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                             | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                             | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                    | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::INVALID_STATE`    | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`.       |
     * | `Errors::INVALID_ARGUMENT` | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                           |
     *
     * # Related Scripts
     * * `Script::rotate_authentication_key`
     * * `Script::rotate_authentication_key_with_nonce_admin`
     * * `Script::rotate_authentication_key_with_recovery_address`
     */
    static encodeRotateAuthenticationKeyWithNonceScript(sliding_nonce: BigInt, new_key: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Rotates the specified account's authentication key to the supplied new authentication key. May
     * only be sent by the Libra Root account as a write set transaction.
     *
     * # Technical Description
     * Rotate the `account`'s `LibraAccount::LibraAccount` `authentication_key` field to `new_key`.
     * `new_key` must be a valid ed25519 public key, and `account` must not have previously delegated
     * its `LibraAccount::KeyRotationCapability`.
     *
     * # Parameters
     * | Name            | Type         | Description                                                                                                  |
     * | ------          | ------       | -------------                                                                                                |
     * | `lr_account`    | `&signer`    | The signer reference of the sending account of the write set transaction. May only be the Libra Root signer. |
     * | `account`       | `&signer`    | Signer reference of account specified in the `execute_as` field of the write set transaction.                |
     * | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction for Libra Root.                    |
     * | `new_key`       | `vector<u8>` | New ed25519 public key to be used for `account`.                                                             |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                               | Description                                                                                                |
     * | ----------------           | --------------                                             | -------------                                                                                              |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                             | A `SlidingNonce` resource is not published under `lr_account`.                                             |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                             | The `sliding_nonce` in `lr_account` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                             | The `sliding_nonce` in `lr_account` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                    | The `sliding_nonce` in` lr_account` has been previously recorded.                                          |
     * | `Errors::INVALID_STATE`    | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`.                       |
     * | `Errors::INVALID_ARGUMENT` | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                                           |
     *
     * # Related Scripts
     * * `Script::rotate_authentication_key`
     * * `Script::rotate_authentication_key_with_nonce`
     * * `Script::rotate_authentication_key_with_recovery_address`
     */
    static encodeRotateAuthenticationKeyWithNonceAdminScript(sliding_nonce: BigInt, new_key: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Rotates the authentication key of a specified account that is part of a recovery address to a
     * new authentication key. Only used for accounts that are part of a recovery address (see
     * `Script::add_recovery_rotation_capability` for account restrictions).
     *
     * # Technical Description
     * Rotates the authentication key of the `to_recover` account to `new_key` using the
     * `LibraAccount::KeyRotationCapability` stored in the `RecoveryAddress::RecoveryAddress` resource
     * published under `recovery_address`. This transaction can be sent either by the `to_recover`
     * account, or by the account where the `RecoveryAddress::RecoveryAddress` resource is published
     * that contains `to_recover`'s `LibraAccount::KeyRotationCapability`.
     *
     * # Parameters
     * | Name               | Type         | Description                                                                                                                    |
     * | ------             | ------       | -------------                                                                                                                  |
     * | `account`          | `&signer`    | Signer reference of the sending account of the transaction.                                                                    |
     * | `recovery_address` | `address`    | Address where `RecoveryAddress::RecoveryAddress` that holds `to_recover`'s `LibraAccount::KeyRotationCapability` is published. |
     * | `to_recover`       | `address`    | The address of the account whose authentication key will be updated.                                                           |
     * | `new_key`          | `vector<u8>` | New ed25519 public key to be used for the account at the `to_recover` address.                                                 |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                  | Description                                                                                                                                          |
     * | ----------------           | --------------                                | -------------                                                                                                                                        |
     * | `Errors::NOT_PUBLISHED`    | `RecoveryAddress::ERECOVERY_ADDRESS`          | `recovery_address` does not have a `RecoveryAddress::RecoveryAddress` resource published under it.                                                   |
     * | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::ECANNOT_ROTATE_KEY`         | The address of `account` is not `recovery_address` or `to_recover`.                                                                                  |
     * | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::EACCOUNT_NOT_RECOVERABLE`   | `to_recover`'s `LibraAccount::KeyRotationCapability`  is not in the `RecoveryAddress::RecoveryAddress`  resource published under `recovery_address`. |
     * | `Errors::INVALID_ARGUMENT` | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY` | `new_key` was an invalid length.                                                                                                                     |
     *
     * # Related Scripts
     * * `Script::rotate_authentication_key`
     * * `Script::rotate_authentication_key_with_nonce`
     * * `Script::rotate_authentication_key_with_nonce_admin`
     */
    static encodeRotateAuthenticationKeyWithRecoveryAddressScript(recovery_address: LibraTypes.AccountAddress, to_recover: LibraTypes.AccountAddress, new_key: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Updates the url used for off-chain communication, and the public key used to verify dual
     * attestation on-chain. Transaction can be sent by any account that has dual attestation
     * information published under it. In practice the only such accounts are Designated Dealers and
     * Parent VASPs.
     *
     * # Technical Description
     * Updates the `base_url` and `compliance_public_key` fields of the `DualAttestation::Credential`
     * resource published under `account`. The `new_key` must be a valid ed25519 public key.
     *
     * ## Events
     * Successful execution of this transaction emits two events:
     * * A `DualAttestation::ComplianceKeyRotationEvent` containing the new compliance public key, and
     * the blockchain time at which the key was updated emitted on the `DualAttestation::Credential`
     * `compliance_key_rotation_events` handle published under `account`; and
     * * A `DualAttestation::BaseUrlRotationEvent` containing the new base url to be used for
     * off-chain communication, and the blockchain time at which the url was updated emitted on the
     * `DualAttestation::Credential` `base_url_rotation_events` handle published under `account`.
     *
     * # Parameters
     * | Name      | Type         | Description                                                               |
     * | ------    | ------       | -------------                                                             |
     * | `account` | `&signer`    | Signer reference of the sending account of the transaction.               |
     * | `new_url` | `vector<u8>` | ASCII-encoded url to be used for off-chain communication with `account`.  |
     * | `new_key` | `vector<u8>` | New ed25519 public key to be used for on-chain dual attestation checking. |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                           | Description                                                                |
     * | ----------------           | --------------                         | -------------                                                              |
     * | `Errors::NOT_PUBLISHED`    | `DualAttestation::ECREDENTIAL`         | A `DualAttestation::Credential` resource is not published under `account`. |
     * | `Errors::INVALID_ARGUMENT` | `DualAttestation::EINVALID_PUBLIC_KEY` | `new_key` is not a valid ed25519 public key.                               |
     *
     * # Related Scripts
     * * `Script::create_parent_vasp_account`
     * * `Script::create_designated_dealer`
     * * `Script::rotate_dual_attestation_info`
     */
    static encodeRotateDualAttestationInfoScript(new_url: Uint8Array, new_key: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Rotates the authentication key in a `SharedEd25519PublicKey`. This transaction can be sent by
     * any account that has previously published a shared ed25519 public key using
     * `Script::publish_shared_ed25519_public_key`.
     *
     * # Technical Description
     * This first rotates the public key stored in `account`'s
     * `SharedEd25519PublicKey::SharedEd25519PublicKey` resource to `public_key`, after which it
     * rotates the authentication key using the capability stored in `account`'s
     * `SharedEd25519PublicKey::SharedEd25519PublicKey` to a new value derived from `public_key`
     *
     * # Parameters
     * | Name         | Type         | Description                                                     |
     * | ------       | ------       | -------------                                                   |
     * | `account`    | `&signer`    | The signer reference of the sending account of the transaction. |
     * | `public_key` | `vector<u8>` | 32-byte Ed25519 public key.                                     |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                    | Description                                                                                   |
     * | ----------------           | --------------                                  | -------------                                                                                 |
     * | `Errors::NOT_PUBLISHED`    | `SharedEd25519PublicKey::ESHARED_KEY`           | A `SharedEd25519PublicKey::SharedEd25519PublicKey` resource is not published under `account`. |
     * | `Errors::INVALID_ARGUMENT` | `SharedEd25519PublicKey::EMALFORMED_PUBLIC_KEY` | `public_key` is an invalid ed25519 public key.                                                |
     *
     * # Related Scripts
     * * `Script::publish_shared_ed25519_public_key`
     */
    static encodeRotateSharedEd25519PublicKeyScript(public_key: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Updates a validator's configuration, and triggers a reconfiguration of the system to update the
     * validator set with this new validator configuration.  Can only be successfully sent by a
     * Validator Operator account that is already registered with a validator.
     *
     * # Technical Description
     * This updates the fields with corresponding names held in the `ValidatorConfig::ValidatorConfig`
     * config resource held under `validator_account`. It then emits a `LibraConfig::NewEpochEvent` to
     * trigger a reconfiguration of the system.  This reconfiguration will update the validator set
     * on-chain with the updated `ValidatorConfig::ValidatorConfig`.
     *
     * # Parameters
     * | Name                          | Type         | Description                                                                                                                  |
     * | ------                        | ------       | -------------                                                                                                                |
     * | `validator_operator_account`  | `&signer`    | Signer reference of the sending account. Must be the registered validator operator for the validator at `validator_address`. |
     * | `validator_account`           | `address`    | The address of the validator's `ValidatorConfig::ValidatorConfig` resource being updated.                                    |
     * | `consensus_pubkey`            | `vector<u8>` | New Ed25519 public key to be used in the updated `ValidatorConfig::ValidatorConfig`.                                         |
     * | `validator_network_addresses` | `vector<u8>` | New set of `validator_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.                       |
     * | `fullnode_network_addresses`  | `vector<u8>` | New set of `fullnode_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.                        |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                   | Description                                                                                           |
     * | ----------------           | --------------                                 | -------------                                                                                         |
     * | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`           | `validator_address` does not have a `ValidatorConfig::ValidatorConfig` resource published under it.   |
     * | `Errors::REQUIRES_ROLE     | `Roles::EVALIDATOR_OPERATOR`                   | `validator_operator_account` does not have a Validator Operator role.                                 |
     * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_TRANSACTION_SENDER` | `validator_operator_account` is not the registered operator for the validator at `validator_address`. |
     * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_CONSENSUS_KEY`      | `consensus_pubkey` is not a valid ed25519 public key.                                                 |
     *
     * # Related Scripts
     * * `Script::create_validator_account`
     * * `Script::create_validator_operator_account`
     * * `Script::add_validator_and_reconfigure`
     * * `Script::remove_validator_and_reconfigure`
     * * `Script::set_validator_operator`
     * * `Script::set_validator_operator_with_nonce_admin`
     * * `Script::register_validator_config`
     */
    static encodeSetValidatorConfigAndReconfigureScript(validator_account: LibraTypes.AccountAddress, consensus_pubkey: Uint8Array, validator_network_addresses: Uint8Array, fullnode_network_addresses: Uint8Array): LibraTypes.Script;
    /**
     * # Summary
     * Sets the validator operator for a validator in the validator's configuration resource "locally"
     * and does not reconfigure the system. Changes from this transaction will not picked up by the
     * system until a reconfiguration of the system is triggered. May only be sent by an account with
     * Validator role.
     *
     * # Technical Description
     * Sets the account at `operator_account` address and with the specified `human_name` as an
     * operator for the sending validator account. The account at `operator_account` address must have
     * a Validator Operator role and have a `ValidatorOperatorConfig::ValidatorOperatorConfig`
     * resource published under it. The sending `account` must be a Validator and have a
     * `ValidatorConfig::ValidatorConfig` resource published under it. This script does not emit a
     * `LibraConfig::NewEpochEvent` and no reconfiguration of the system is initiated by this script.
     *
     * # Parameters
     * | Name               | Type         | Description                                                                                  |
     * | ------             | ------       | -------------                                                                                |
     * | `account`          | `&signer`    | The signer reference of the sending account of the transaction.                              |
     * | `operator_name`    | `vector<u8>` | Validator operator's human name.                                                             |
     * | `operator_account` | `address`    | Address of the validator operator account to be added as the `account` validator's operator. |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                          | Description                                                                                                                                                  |
     * | ----------------           | --------------                                        | -------------                                                                                                                                                |
     * | `Errors::NOT_PUBLISHED`    | `ValidatorOperatorConfig::EVALIDATOR_OPERATOR_CONFIG` | The `ValidatorOperatorConfig::ValidatorOperatorConfig` resource is not published under `operator_account`.                                                   |
     * | 0                          | 0                                                     | The `human_name` field of the `ValidatorOperatorConfig::ValidatorOperatorConfig` resource under `operator_account` does not match the provided `human_name`. |
     * | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR`                                   | `account` does not have a Validator account role.                                                                                                            |
     * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::ENOT_A_VALIDATOR_OPERATOR`          | The account at `operator_account` does not have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource.                                               |
     * | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`                  | A `ValidatorConfig::ValidatorConfig` is not published under `account`.                                                                                       |
     *
     * # Related Scripts
     * * `Script::create_validator_account`
     * * `Script::create_validator_operator_account`
     * * `Script::register_validator_config`
     * * `Script::remove_validator_and_reconfigure`
     * * `Script::add_validator_and_reconfigure`
     * * `Script::set_validator_operator_with_nonce_admin`
     * * `Script::set_validator_config_and_reconfigure`
     */
    static encodeSetValidatorOperatorScript(operator_name: Uint8Array, operator_account: LibraTypes.AccountAddress): LibraTypes.Script;
    /**
     * # Summary
     * Sets the validator operator for a validator in the validator's configuration resource "locally"
     * and does not reconfigure the system. Changes from this transaction will not picked up by the
     * system until a reconfiguration of the system is triggered. May only be sent by the Libra Root
     * account as a write set transaction.
     *
     * # Technical Description
     * Sets the account at `operator_account` address and with the specified `human_name` as an
     * operator for the validator `account`. The account at `operator_account` address must have a
     * Validator Operator role and have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource
     * published under it. The account represented by the `account` signer must be a Validator and
     * have a `ValidatorConfig::ValidatorConfig` resource published under it. No reconfiguration of
     * the system is initiated by this script.
     *
     * # Parameters
     * | Name               | Type         | Description                                                                                                  |
     * | ------             | ------       | -------------                                                                                                |
     * | `lr_account`       | `&signer`    | The signer reference of the sending account of the write set transaction. May only be the Libra Root signer. |
     * | `account`          | `&signer`    | Signer reference of account specified in the `execute_as` field of the write set transaction.                |
     * | `sliding_nonce`    | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction for Libra Root.                    |
     * | `operator_name`    | `vector<u8>` | Validator operator's human name.                                                                             |
     * | `operator_account` | `address`    | Address of the validator operator account to be added as the `account` validator's operator.                 |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                          | Description                                                                                                                                                  |
     * | ----------------           | --------------                                        | -------------                                                                                                                                                |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                        | A `SlidingNonce` resource is not published under `lr_account`.                                                                                               |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                        | The `sliding_nonce` in `lr_account` is too old and it's impossible to determine if it's duplicated or not.                                                   |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                        | The `sliding_nonce` in `lr_account` is too far in the future.                                                                                                |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`               | The `sliding_nonce` in` lr_account` has been previously recorded.                                                                                            |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                        | The sending account is not the Libra Root account or Treasury Compliance account                                                                             |
     * | `Errors::NOT_PUBLISHED`    | `ValidatorOperatorConfig::EVALIDATOR_OPERATOR_CONFIG` | The `ValidatorOperatorConfig::ValidatorOperatorConfig` resource is not published under `operator_account`.                                                   |
     * | 0                          | 0                                                     | The `human_name` field of the `ValidatorOperatorConfig::ValidatorOperatorConfig` resource under `operator_account` does not match the provided `human_name`. |
     * | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR`                                   | `account` does not have a Validator account role.                                                                                                            |
     * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::ENOT_A_VALIDATOR_OPERATOR`          | The account at `operator_account` does not have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource.                                               |
     * | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`                  | A `ValidatorConfig::ValidatorConfig` is not published under `account`.                                                                                       |
     *
     * # Related Scripts
     * * `Script::create_validator_account`
     * * `Script::create_validator_operator_account`
     * * `Script::register_validator_config`
     * * `Script::remove_validator_and_reconfigure`
     * * `Script::add_validator_and_reconfigure`
     * * `Script::set_validator_operator`
     * * `Script::set_validator_config_and_reconfigure`
     */
    static encodeSetValidatorOperatorWithNonceAdminScript(sliding_nonce: BigInt, operator_name: Uint8Array, operator_account: LibraTypes.AccountAddress): LibraTypes.Script;
    /**
     * # Summary
     * Mints a specified number of coins in a currency to a Designated Dealer. The sending account
     * must be the Treasury Compliance account, and coins can only be minted to a Designated Dealer
     * account.
     *
     * # Technical Description
     * Mints `mint_amount` of coins in the `CoinType` currency to Designated Dealer account at
     * `designated_dealer_address`. The `tier_index` parameter specifies which tier should be used to
     * check verify the off-chain approval policy, and is based in part on the on-chain tier values
     * for the specific Designated Dealer, and the number of `CoinType` coins that have been minted to
     * the dealer over the past 24 hours. Every Designated Dealer has 4 tiers for each currency that
     * they support. The sending `tc_account` must be the Treasury Compliance account, and the
     * receiver an authorized Designated Dealer account.
     *
     * ## Events
     * Successful execution of the transaction will emit two events:
     * * A `Libra::MintEvent` with the amount and currency code minted is emitted on the
     * `mint_event_handle` in the stored `Libra::CurrencyInfo<CoinType>` resource stored under
     * `0xA550C18`; and
     * * A `DesignatedDealer::ReceivedMintEvent` with the amount, currency code, and Designated
     * Dealer's address is emitted on the `mint_event_handle` in the stored `DesignatedDealer::Dealer`
     * resource published under the `designated_dealer_address`.
     *
     * # Parameters
     * | Name                        | Type      | Description                                                                                                |
     * | ------                      | ------    | -------------                                                                                              |
     * | `CoinType`                  | Type      | The Move type for the `CoinType` being minted. `CoinType` must be an already-registered currency on-chain. |
     * | `tc_account`                | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.  |
     * | `sliding_nonce`             | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                 |
     * | `designated_dealer_address` | `address` | The address of the Designated Dealer account being minted to.                                              |
     * | `mint_amount`               | `u64`     | The number of coins to be minted.                                                                          |
     * | `tier_index`                | `u64`     | The mint tier index to use for the Designated Dealer account.                                              |
     *
     * # Common Abort Conditions
     * | Error Category                | Error Reason                                 | Description                                                                                                                  |
     * | ----------------              | --------------                               | -------------                                                                                                                |
     * | `Errors::NOT_PUBLISHED`       | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `tc_account`.                                                               |
     * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                   |
     * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                                                                |
     * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                                                            |
     * | `Errors::REQUIRES_ADDRESS`    | `CoreAddresses::ETREASURY_COMPLIANCE`        | `tc_account` is not the Treasury Compliance account.                                                                         |
     * | `Errors::REQUIRES_ROLE`       | `Roles::ETREASURY_COMPLIANCE`                | `tc_account` is not the Treasury Compliance account.                                                                         |
     * | `Errors::INVALID_ARGUMENT`    | `DesignatedDealer::EINVALID_MINT_AMOUNT`     | `mint_amount` is zero.                                                                                                       |
     * | `Errors::NOT_PUBLISHED`       | `DesignatedDealer::EDEALER`                  | `DesignatedDealer::Dealer` or `DesignatedDealer::TierInfo<CoinType>` resource does not exist at `designated_dealer_address`. |
     * | `Errors::INVALID_ARGUMENT`    | `DesignatedDealer::EINVALID_TIER_INDEX`      | The `tier_index` is out of bounds.                                                                                           |
     * | `Errors::INVALID_ARGUMENT`    | `DesignatedDealer::EINVALID_AMOUNT_FOR_TIER` | `mint_amount` exceeds the maximum allowed amount for `tier_index`.                                                           |
     * | `Errors::REQUIRES_CAPABILITY` | `Libra::EMINT_CAPABILITY`                    | `tc_account` does not have a `Libra::MintCapability<CoinType>` resource published under it.                                  |
     * | `Errors::INVALID_STATE`       | `Libra::EMINTING_NOT_ALLOWED`                | Minting is not currently allowed for `CoinType` coins.                                                                       |
     * | `Errors::LIMIT_EXCEEDED`      | `LibraAccount::EDEPOSIT_EXCEEDS_LIMITS`      | The depositing of the funds would exceed the `account`'s account limits.                                                     |
     *
     * # Related Scripts
     * * `Script::create_designated_dealer`
     * * `Script::peer_to_peer_with_metadata`
     * * `Script::rotate_dual_attestation_info`
     */
    static encodeTieredMintScript(coin_type: LibraTypes.TypeTag, sliding_nonce: BigInt, designated_dealer_address: LibraTypes.AccountAddress, mint_amount: BigInt, tier_index: BigInt): LibraTypes.Script;
    /**
     * # Summary
     * Unfreezes the account at `address`. The sending account of this transaction must be the
     * Treasury Compliance account. After the successful execution of this transaction transactions
     * may be sent from the previously frozen account, and coins may be sent and received.
     *
     * # Technical Description
     * Sets the `AccountFreezing::FreezingBit` to `false` and emits a
     * `AccountFreezing::UnFreezeAccountEvent`. The transaction sender must be the Treasury Compliance
     * account. Note that this is a per-account property so unfreezing a Parent VASP will not effect
     * the status any of its child accounts and vice versa.
     *
     * ## Events
     * Successful execution of this script will emit a `AccountFreezing::UnFreezeAccountEvent` with
     * the `unfrozen_address` set the `to_unfreeze_account`'s address.
     *
     * # Parameters
     * | Name                  | Type      | Description                                                                                               |
     * | ------                | ------    | -------------                                                                                             |
     * | `tc_account`          | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account. |
     * | `sliding_nonce`       | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                |
     * | `to_unfreeze_account` | `address` | The account address to be frozen.                                                                         |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                            | Description                                                                                |
     * | ----------------           | --------------                          | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `account`.                                |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |
     *
     * # Related Scripts
     * * `Scripts::freeze_account`
     */
    static encodeUnfreezeAccountScript(sliding_nonce: BigInt, to_unfreeze_account: LibraTypes.AccountAddress): LibraTypes.Script;
    /**
     * # Summary
     * Update the dual attestation limit on-chain. Defined in terms of micro-LBR.  The transaction can
     * only be sent by the Treasury Compliance account.  After this transaction all inter-VASP
     * payments over this limit must be checked for dual attestation.
     *
     * # Technical Description
     * Updates the `micro_lbr_limit` field of the `DualAttestation::Limit` resource published under
     * `0xA550C18`. The amount is set in micro-LBR.
     *
     * # Parameters
     * | Name                  | Type      | Description                                                                                               |
     * | ------                | ------    | -------------                                                                                             |
     * | `tc_account`          | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account. |
     * | `sliding_nonce`       | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                |
     * | `new_micro_lbr_limit` | `u64`     | The new dual attestation limit to be used on-chain.                                                       |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                            | Description                                                                                |
     * | ----------------           | --------------                          | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | `tc_account` is not the Treasury Compliance account.                                       |
     *
     * # Related Scripts
     * * `Scripts::update_exchange_rate`
     * * `Scripts::update_minting_ability`
     */
    static encodeUpdateDualAttestationLimitScript(sliding_nonce: BigInt, new_micro_lbr_limit: BigInt): LibraTypes.Script;
    /**
     * # Summary
     * Update the rough on-chain exchange rate between a specified currency and LBR (as a conversion
     * to micro-LBR). The transaction can only be sent by the Treasury Compliance account. After this
     * transaction the updated exchange rate will be used for normalization of gas prices, and for
     * dual attestation checking.
     *
     * # Technical Description
     * Updates the on-chain exchange rate from the given `Types` to micro-LBR.  The exchange rate
     * is given by `new_exchange_rate_numerator/new_exchange_rate_denominator`.
     *
     * # Parameters
     * | Name                            | Type      | Description                                                                                                                        |
     * | ------                          | ------    | -------------                                                                                                                      |
     * | `Types`                      | Type      | The Move type for the `Types` whose exchange rate is being updated. `Types` must be an already-registered currency on-chain. |
     * | `tc_account`                    | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.                          |
     * | `sliding_nonce`                 | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for the transaction.                                                          |
     * | `new_exchange_rate_numerator`   | `u64`     | The numerator for the new to micro-LBR exchange rate for `Types`.                                                               |
     * | `new_exchange_rate_denominator` | `u64`     | The denominator for the new to micro-LBR exchange rate for `Types`.                                                             |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                            | Description                                                                                |
     * | ----------------           | --------------                          | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | `tc_account` is not the Treasury Compliance account.                                       |
     * | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`           | `tc_account` is not the Treasury Compliance account.                                       |
     * | `Errors::INVALID_ARGUMENT` | `FixedPoint32::EDENOMINATOR`            | `new_exchange_rate_denominator` is zero.                                                   |
     * | `Errors::INVALID_ARGUMENT` | `FixedPoint32::ERATIO_OUT_OF_RANGE`     | The quotient is unrepresentable as a `FixedPoint32`.                                       |
     * | `Errors::LIMIT_EXCEEDED`   | `FixedPoint32::ERATIO_OUT_OF_RANGE`     | The quotient is unrepresentable as a `FixedPoint32`.                                       |
     *
     * # Related Scripts
     * * `Scripts::update_dual_attestation_limit`
     * * `Scripts::update_minting_ability`
     */
    static encodeUpdateExchangeRateScript(currency: LibraTypes.TypeTag, sliding_nonce: BigInt, new_exchange_rate_numerator: BigInt, new_exchange_rate_denominator: BigInt): LibraTypes.Script;
    /**
     * # Summary
     * Updates the Libra major version that is stored on-chain and is used by the VM.  This
     * transaction can only be sent from the Libra Root account.
     *
     * # Technical Description
     * Updates the `LibraVersion` on-chain config and emits a `LibraConfig::NewEpochEvent` to trigger
     * a reconfiguration of the system. The `major` version that is passed in must be strictly greater
     * than the current major version held on-chain. The VM reads this information and can use it to
     * preserve backwards compatibility with previous major versions of the VM.
     *
     * # Parameters
     * | Name            | Type      | Description                                                                |
     * | ------          | ------    | -------------                                                              |
     * | `account`       | `&signer` | Signer reference of the sending account. Must be the Libra Root account.   |
     * | `sliding_nonce` | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |
     * | `major`         | `u64`     | The `major` version of the VM to be used from this transaction on.         |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                                  | Description                                                                                |
     * | ----------------           | --------------                                | -------------                                                                              |
     * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `account`.                                |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                              |
     * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                          |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ELIBRA_ROOT`                  | `account` is not the Libra Root account.                                                   |
     * | `Errors::INVALID_ARGUMENT` | `LibraVersion::EINVALID_MAJOR_VERSION_NUMBER` | `major` is less-than or equal to the current major version stored on-chain.                |
     */
    static encodeUpdateLibraVersionScript(sliding_nonce: BigInt, major: BigInt): LibraTypes.Script;
    /**
     * # Summary
     * Script to allow or disallow minting of new coins in a specified currency.  This transaction can
     * only be sent by the Treasury Compliance account.  Turning minting off for a currency will have
     * no effect on coins already in circulation, and coins may still be removed from the system.
     *
     * # Technical Description
     * This transaction sets the `can_mint` field of the `Libra::CurrencyInfo<Types>` resource
     * published under `0xA550C18` to the value of `allow_minting`. Minting of coins if allowed if
     * this field is set to `true` and minting of new coins in `Types` is disallowed otherwise.
     * This transaction needs to be sent by the Treasury Compliance account.
     *
     * # Parameters
     * | Name            | Type      | Description                                                                                                                          |
     * | ------          | ------    | -------------                                                                                                                        |
     * | `Types`      | Type      | The Move type for the `Types` whose minting ability is being updated. `Types` must be an already-registered currency on-chain. |
     * | `account`       | `&signer` | Signer reference of the sending account. Must be the Libra Root account.                                                             |
     * | `allow_minting` | `bool`    | Whether to allow minting of new coins in `Types`.                                                                                 |
     *
     * # Common Abort Conditions
     * | Error Category             | Error Reason                          | Description                                          |
     * | ----------------           | --------------                        | -------------                                        |
     * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE` | `tc_account` is not the Treasury Compliance account. |
     * | `Errors::NOT_PUBLISHED`    | `Libra::ECURRENCY_INFO`               | `Types` is not a registered currency on-chain.    |
     *
     * # Related Scripts
     * * `Scripts::update_dual_attestation_limit`
     * * `Scripts::update_exchange_rate`
     */
    static encodeUpdateMintingAbilityScript(currency: LibraTypes.TypeTag, allow_minting: boolean): LibraTypes.Script;
    static decodeAddCurrencyToAccountScript(script: LibraTypes.Script): ScriptCallVariantAddCurrencyToAccount;
    static decodeAddRecoveryRotationCapabilityScript(script: LibraTypes.Script): ScriptCallVariantAddRecoveryRotationCapability;
    static decodeAddToScriptAllowListScript(script: LibraTypes.Script): ScriptCallVariantAddToScriptAllowList;
    static decodeAddValidatorAndReconfigureScript(script: LibraTypes.Script): ScriptCallVariantAddValidatorAndReconfigure;
    static decodeBurnScript(script: LibraTypes.Script): ScriptCallVariantBurn;
    static decodeBurnTxnFeesScript(script: LibraTypes.Script): ScriptCallVariantBurnTxnFees;
    static decodeCancelBurnScript(script: LibraTypes.Script): ScriptCallVariantCancelBurn;
    static decodeCreateChildVaspAccountScript(script: LibraTypes.Script): ScriptCallVariantCreateChildVaspAccount;
    static decodeCreateDesignatedDealerScript(script: LibraTypes.Script): ScriptCallVariantCreateDesignatedDealer;
    static decodeCreateParentVaspAccountScript(script: LibraTypes.Script): ScriptCallVariantCreateParentVaspAccount;
    static decodeCreateRecoveryAddressScript(_script: LibraTypes.Script): ScriptCallVariantCreateRecoveryAddress;
    static decodeCreateValidatorAccountScript(script: LibraTypes.Script): ScriptCallVariantCreateValidatorAccount;
    static decodeCreateValidatorOperatorAccountScript(script: LibraTypes.Script): ScriptCallVariantCreateValidatorOperatorAccount;
    static decodeFreezeAccountScript(script: LibraTypes.Script): ScriptCallVariantFreezeAccount;
    static decodePeerToPeerWithMetadataScript(script: LibraTypes.Script): ScriptCallVariantPeerToPeerWithMetadata;
    static decodePreburnScript(script: LibraTypes.Script): ScriptCallVariantPreburn;
    static decodePublishSharedEd25519PublicKeyScript(script: LibraTypes.Script): ScriptCallVariantPublishSharedEd25519PublicKey;
    static decodeRegisterValidatorConfigScript(script: LibraTypes.Script): ScriptCallVariantRegisterValidatorConfig;
    static decodeRemoveValidatorAndReconfigureScript(script: LibraTypes.Script): ScriptCallVariantRemoveValidatorAndReconfigure;
    static decodeRotateAuthenticationKeyScript(script: LibraTypes.Script): ScriptCallVariantRotateAuthenticationKey;
    static decodeRotateAuthenticationKeyWithNonceScript(script: LibraTypes.Script): ScriptCallVariantRotateAuthenticationKeyWithNonce;
    static decodeRotateAuthenticationKeyWithNonceAdminScript(script: LibraTypes.Script): ScriptCallVariantRotateAuthenticationKeyWithNonceAdmin;
    static decodeRotateAuthenticationKeyWithRecoveryAddressScript(script: LibraTypes.Script): ScriptCallVariantRotateAuthenticationKeyWithRecoveryAddress;
    static decodeRotateDualAttestationInfoScript(script: LibraTypes.Script): ScriptCallVariantRotateDualAttestationInfo;
    static decodeRotateSharedEd25519PublicKeyScript(script: LibraTypes.Script): ScriptCallVariantRotateSharedEd25519PublicKey;
    static decodeSetValidatorConfigAndReconfigureScript(script: LibraTypes.Script): ScriptCallVariantSetValidatorConfigAndReconfigure;
    static decodeSetValidatorOperatorScript(script: LibraTypes.Script): ScriptCallVariantSetValidatorOperator;
    static decodeSetValidatorOperatorWithNonceAdminScript(script: LibraTypes.Script): ScriptCallVariantSetValidatorOperatorWithNonceAdmin;
    static decodeTieredMintScript(script: LibraTypes.Script): ScriptCallVariantTieredMint;
    static decodeUnfreezeAccountScript(script: LibraTypes.Script): ScriptCallVariantUnfreezeAccount;
    static decodeUpdateDualAttestationLimitScript(script: LibraTypes.Script): ScriptCallVariantUpdateDualAttestationLimit;
    static decodeUpdateExchangeRateScript(script: LibraTypes.Script): ScriptCallVariantUpdateExchangeRate;
    static decodeUpdateLibraVersionScript(script: LibraTypes.Script): ScriptCallVariantUpdateLibraVersion;
    static decodeUpdateMintingAbilityScript(script: LibraTypes.Script): ScriptCallVariantUpdateMintingAbility;
    static ADD_CURRENCY_TO_ACCOUNT_CODE: Uint8Array;
    static ADD_RECOVERY_ROTATION_CAPABILITY_CODE: Uint8Array;
    static ADD_TO_SCRIPT_ALLOW_LIST_CODE: Uint8Array;
    static ADD_VALIDATOR_AND_RECONFIGURE_CODE: Uint8Array;
    static BURN_CODE: Uint8Array;
    static BURN_TXN_FEES_CODE: Uint8Array;
    static CANCEL_BURN_CODE: Uint8Array;
    static CREATE_CHILD_VASP_ACCOUNT_CODE: Uint8Array;
    static CREATE_DESIGNATED_DEALER_CODE: Uint8Array;
    static CREATE_PARENT_VASP_ACCOUNT_CODE: Uint8Array;
    static CREATE_RECOVERY_ADDRESS_CODE: Uint8Array;
    static CREATE_VALIDATOR_ACCOUNT_CODE: Uint8Array;
    static CREATE_VALIDATOR_OPERATOR_ACCOUNT_CODE: Uint8Array;
    static FREEZE_ACCOUNT_CODE: Uint8Array;
    static PEER_TO_PEER_WITH_METADATA_CODE: Uint8Array;
    static PREBURN_CODE: Uint8Array;
    static PUBLISH_SHARED_ED25519_PUBLIC_KEY_CODE: Uint8Array;
    static REGISTER_VALIDATOR_CONFIG_CODE: Uint8Array;
    static REMOVE_VALIDATOR_AND_RECONFIGURE_CODE: Uint8Array;
    static ROTATE_AUTHENTICATION_KEY_CODE: Uint8Array;
    static ROTATE_AUTHENTICATION_KEY_WITH_NONCE_CODE: Uint8Array;
    static ROTATE_AUTHENTICATION_KEY_WITH_NONCE_ADMIN_CODE: Uint8Array;
    static ROTATE_AUTHENTICATION_KEY_WITH_RECOVERY_ADDRESS_CODE: Uint8Array;
    static ROTATE_DUAL_ATTESTATION_INFO_CODE: Uint8Array;
    static ROTATE_SHARED_ED25519_PUBLIC_KEY_CODE: Uint8Array;
    static SET_VALIDATOR_CONFIG_AND_RECONFIGURE_CODE: Uint8Array;
    static SET_VALIDATOR_OPERATOR_CODE: Uint8Array;
    static SET_VALIDATOR_OPERATOR_WITH_NONCE_ADMIN_CODE: Uint8Array;
    static TIERED_MINT_CODE: Uint8Array;
    static UNFREEZE_ACCOUNT_CODE: Uint8Array;
    static UPDATE_DUAL_ATTESTATION_LIMIT_CODE: Uint8Array;
    static UPDATE_EXCHANGE_RATE_CODE: Uint8Array;
    static UPDATE_LIBRA_VERSION_CODE: Uint8Array;
    static UPDATE_MINTING_ABILITY_CODE: Uint8Array;
    static ScriptArgs: {
        [name: string]: ScriptDef;
    };
}
export declare type ScriptDecoders = {
    User: {
        AddCurrencyToAccount: (type: string, currency: LibraTypes.TypeTagVariantStruct) => void;
        AddRecoveryRotationCapability: (type: string, recoveryAddress: LibraTypes.TransactionArgumentVariantAddress) => void;
        AddToScriptAllowList: (type: string, hash: LibraTypes.TransactionArgumentVariantU8Vector, slidingNonce: LibraTypes.TransactionArgumentVariantU64) => void;
        AddValidatorAndReconfigure: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, validatorName: LibraTypes.TransactionArgumentVariantU8Vector, validatorAddress: LibraTypes.TransactionArgumentVariantAddress) => void;
        Burn: (type: string, token: LibraTypes.TypeTagVariantStruct, slidingNonce: LibraTypes.TransactionArgumentVariantU64, preburnAddress: LibraTypes.TransactionArgumentVariantAddress) => void;
        BurnTxnFees: (type: string, coinType: LibraTypes.TypeTagVariantStruct) => void;
        CancelBurn: (type: string, token: LibraTypes.TypeTagVariantStruct, preburnAddress: LibraTypes.TransactionArgumentVariantAddress) => void;
        CreateChildVaspAccount: (type: string, coinType: LibraTypes.TypeTagVariantStruct, childAddress: LibraTypes.TransactionArgumentVariantAddress, authKeyPrefix: LibraTypes.TransactionArgumentVariantU8Vector, addAllCurrencies: LibraTypes.TransactionArgumentVariantBool, childInitialBalance: LibraTypes.TransactionArgumentVariantU64) => void;
        CreateDesignatedDealer: (type: string, currency: LibraTypes.TypeTagVariantStruct, slidingNonce: LibraTypes.TransactionArgumentVariantU64, addr: LibraTypes.TransactionArgumentVariantAddress, authKeyPrefix: LibraTypes.TransactionArgumentVariantU8Vector, humanName: LibraTypes.TransactionArgumentVariantU8Vector, addAllCurrencies: LibraTypes.TransactionArgumentVariantBool) => void;
        CreateParentVaspAccount: (type: string, coinType: LibraTypes.TypeTagVariantStruct, slidingNonce: LibraTypes.TransactionArgumentVariantU64, newAccountAddress: LibraTypes.TransactionArgumentVariantAddress, authKeyPrefix: LibraTypes.TransactionArgumentVariantU8Vector, humanName: LibraTypes.TransactionArgumentVariantU8Vector, addAllCurrencies: LibraTypes.TransactionArgumentVariantBool) => void;
        CreateRecoveryAddress: (type: string) => void;
        CreateValidatorAccount: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, newAccountAddress: LibraTypes.TransactionArgumentVariantAddress, authKeyPrefix: LibraTypes.TransactionArgumentVariantU8Vector, humanName: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        CreateValidatorOperatorAccount: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, newAccountAddress: LibraTypes.TransactionArgumentVariantAddress, authKeyPrefix: LibraTypes.TransactionArgumentVariantU8Vector, humanName: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        FreezeAccount: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, toFreezeAccount: LibraTypes.TransactionArgumentVariantAddress) => void;
        PeerToPeerWithMetadata: (type: string, currency: LibraTypes.TypeTagVariantStruct, payee: LibraTypes.TransactionArgumentVariantAddress, amount: LibraTypes.TransactionArgumentVariantU64, metadata: LibraTypes.TransactionArgumentVariantU8Vector, metadataSignature: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        Preburn: (type: string, token: LibraTypes.TypeTagVariantStruct, amount: LibraTypes.TransactionArgumentVariantU64) => void;
        PublishSharedEd25519PublicKey: (type: string, publicKey: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        RegisterValidatorConfig: (type: string, validatorAccount: LibraTypes.TransactionArgumentVariantAddress, consensusPubkey: LibraTypes.TransactionArgumentVariantU8Vector, validatorNetworkAddresses: LibraTypes.TransactionArgumentVariantU8Vector, fullnodeNetworkAddresses: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        RemoveValidatorAndReconfigure: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, validatorName: LibraTypes.TransactionArgumentVariantU8Vector, validatorAddress: LibraTypes.TransactionArgumentVariantAddress) => void;
        RotateAuthenticationKey: (type: string, newKey: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        RotateAuthenticationKeyWithNonce: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, newKey: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        RotateAuthenticationKeyWithNonceAdmin: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, newKey: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        RotateAuthenticationKeyWithRecoveryAddress: (type: string, recoveryAddress: LibraTypes.TransactionArgumentVariantAddress, toRecover: LibraTypes.TransactionArgumentVariantAddress, newKey: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        RotateDualAttestationInfo: (type: string, newUrl: LibraTypes.TransactionArgumentVariantU8Vector, newKey: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        RotateSharedEd25519PublicKey: (type: string, publicKey: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        SetValidatorConfigAndReconfigure: (type: string, validatorAccount: LibraTypes.TransactionArgumentVariantAddress, consensusPubkey: LibraTypes.TransactionArgumentVariantU8Vector, validatorNetworkAddresses: LibraTypes.TransactionArgumentVariantU8Vector, fullnodeNetworkAddresses: LibraTypes.TransactionArgumentVariantU8Vector) => void;
        SetValidatorOperator: (type: string, operatorName: LibraTypes.TransactionArgumentVariantU8Vector, operatorAccount: LibraTypes.TransactionArgumentVariantAddress) => void;
        SetValidatorOperatorWithNonceAdmin: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, operatorName: LibraTypes.TransactionArgumentVariantU8Vector, operatorAccount: LibraTypes.TransactionArgumentVariantAddress) => void;
        TieredMint: (type: string, coinType: LibraTypes.TypeTagVariantStruct, slidingNonce: LibraTypes.TransactionArgumentVariantU64, designatedDealerAddress: LibraTypes.TransactionArgumentVariantAddress, mintAmount: LibraTypes.TransactionArgumentVariantU64, tierIndex: LibraTypes.TransactionArgumentVariantU64) => void;
        UnfreezeAccount: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, toUnfreezeAccount: LibraTypes.TransactionArgumentVariantAddress) => void;
        UpdateDualAttestationLimit: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, newMicroLbrLimit: LibraTypes.TransactionArgumentVariantU64) => void;
        UpdateExchangeRate: (type: string, currency: LibraTypes.TypeTagVariantStruct, slidingNonce: LibraTypes.TransactionArgumentVariantU64, newExchangeRateNumerator: LibraTypes.TransactionArgumentVariantU64, newExchangeRateDenominator: LibraTypes.TransactionArgumentVariantU64) => void;
        UpdateLibraVersion: (type: string, slidingNonce: LibraTypes.TransactionArgumentVariantU64, major: LibraTypes.TransactionArgumentVariantU64) => void;
        UpdateMintingAbility: (type: string, currency: LibraTypes.TypeTagVariantStruct, allowMinting: LibraTypes.TransactionArgumentVariantBool) => void;
        default: (type: keyof ScriptDecoders['User']) => void;
    };
};
