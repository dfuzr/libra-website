import * as LibraTypes from '../libraTypes';
/**
 * Structured representation of a call into a known Move script.
 */
export class ScriptCall {
}
export class ScriptCallVariantAddCurrencyToAccount extends ScriptCall {
    constructor(currency) {
        super();
        this.currency = currency;
    }
}
export class ScriptCallVariantAddRecoveryRotationCapability extends ScriptCall {
    constructor(recovery_address) {
        super();
        this.recovery_address = recovery_address;
    }
}
export class ScriptCallVariantAddToScriptAllowList extends ScriptCall {
    constructor(hash, sliding_nonce) {
        super();
        this.hash = hash;
        this.sliding_nonce = sliding_nonce;
    }
}
export class ScriptCallVariantAddValidatorAndReconfigure extends ScriptCall {
    constructor(sliding_nonce, validator_name, validator_address) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.validator_name = validator_name;
        this.validator_address = validator_address;
    }
}
export class ScriptCallVariantBurn extends ScriptCall {
    constructor(token, sliding_nonce, preburn_address) {
        super();
        this.token = token;
        this.sliding_nonce = sliding_nonce;
        this.preburn_address = preburn_address;
    }
}
export class ScriptCallVariantBurnTxnFees extends ScriptCall {
    constructor(coin_type) {
        super();
        this.coin_type = coin_type;
    }
}
export class ScriptCallVariantCancelBurn extends ScriptCall {
    constructor(token, preburn_address) {
        super();
        this.token = token;
        this.preburn_address = preburn_address;
    }
}
export class ScriptCallVariantCreateChildVaspAccount extends ScriptCall {
    constructor(coin_type, child_address, auth_key_prefix, add_all_currencies, child_initial_balance) {
        super();
        this.coin_type = coin_type;
        this.child_address = child_address;
        this.auth_key_prefix = auth_key_prefix;
        this.add_all_currencies = add_all_currencies;
        this.child_initial_balance = child_initial_balance;
    }
}
export class ScriptCallVariantCreateDesignatedDealer extends ScriptCall {
    constructor(currency, sliding_nonce, addr, auth_key_prefix, human_name, add_all_currencies) {
        super();
        this.currency = currency;
        this.sliding_nonce = sliding_nonce;
        this.addr = addr;
        this.auth_key_prefix = auth_key_prefix;
        this.human_name = human_name;
        this.add_all_currencies = add_all_currencies;
    }
}
export class ScriptCallVariantCreateParentVaspAccount extends ScriptCall {
    constructor(coin_type, sliding_nonce, new_account_address, auth_key_prefix, human_name, add_all_currencies) {
        super();
        this.coin_type = coin_type;
        this.sliding_nonce = sliding_nonce;
        this.new_account_address = new_account_address;
        this.auth_key_prefix = auth_key_prefix;
        this.human_name = human_name;
        this.add_all_currencies = add_all_currencies;
    }
}
export class ScriptCallVariantCreateRecoveryAddress extends ScriptCall {
    constructor() {
        super();
    }
}
export class ScriptCallVariantCreateValidatorAccount extends ScriptCall {
    constructor(sliding_nonce, new_account_address, auth_key_prefix, human_name) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.new_account_address = new_account_address;
        this.auth_key_prefix = auth_key_prefix;
        this.human_name = human_name;
    }
}
export class ScriptCallVariantCreateValidatorOperatorAccount extends ScriptCall {
    constructor(sliding_nonce, new_account_address, auth_key_prefix, human_name) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.new_account_address = new_account_address;
        this.auth_key_prefix = auth_key_prefix;
        this.human_name = human_name;
    }
}
export class ScriptCallVariantFreezeAccount extends ScriptCall {
    constructor(sliding_nonce, to_freeze_account) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.to_freeze_account = to_freeze_account;
    }
}
export class ScriptCallVariantPeerToPeerWithMetadata extends ScriptCall {
    constructor(currency, payee, amount, metadata, metadata_signature) {
        super();
        this.currency = currency;
        this.payee = payee;
        this.amount = amount;
        this.metadata = metadata;
        this.metadata_signature = metadata_signature;
    }
}
export class ScriptCallVariantPreburn extends ScriptCall {
    constructor(token, amount) {
        super();
        this.token = token;
        this.amount = amount;
    }
}
export class ScriptCallVariantPublishSharedEd25519PublicKey extends ScriptCall {
    constructor(public_key) {
        super();
        this.public_key = public_key;
    }
}
export class ScriptCallVariantRegisterValidatorConfig extends ScriptCall {
    constructor(validator_account, consensus_pubkey, validator_network_addresses, fullnode_network_addresses) {
        super();
        this.validator_account = validator_account;
        this.consensus_pubkey = consensus_pubkey;
        this.validator_network_addresses = validator_network_addresses;
        this.fullnode_network_addresses = fullnode_network_addresses;
    }
}
export class ScriptCallVariantRemoveValidatorAndReconfigure extends ScriptCall {
    constructor(sliding_nonce, validator_name, validator_address) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.validator_name = validator_name;
        this.validator_address = validator_address;
    }
}
export class ScriptCallVariantRotateAuthenticationKey extends ScriptCall {
    constructor(new_key) {
        super();
        this.new_key = new_key;
    }
}
export class ScriptCallVariantRotateAuthenticationKeyWithNonce extends ScriptCall {
    constructor(sliding_nonce, new_key) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.new_key = new_key;
    }
}
export class ScriptCallVariantRotateAuthenticationKeyWithNonceAdmin extends ScriptCall {
    constructor(sliding_nonce, new_key) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.new_key = new_key;
    }
}
export class ScriptCallVariantRotateAuthenticationKeyWithRecoveryAddress extends ScriptCall {
    constructor(recovery_address, to_recover, new_key) {
        super();
        this.recovery_address = recovery_address;
        this.to_recover = to_recover;
        this.new_key = new_key;
    }
}
export class ScriptCallVariantRotateDualAttestationInfo extends ScriptCall {
    constructor(new_url, new_key) {
        super();
        this.new_url = new_url;
        this.new_key = new_key;
    }
}
export class ScriptCallVariantRotateSharedEd25519PublicKey extends ScriptCall {
    constructor(public_key) {
        super();
        this.public_key = public_key;
    }
}
export class ScriptCallVariantSetValidatorConfigAndReconfigure extends ScriptCall {
    constructor(validator_account, consensus_pubkey, validator_network_addresses, fullnode_network_addresses) {
        super();
        this.validator_account = validator_account;
        this.consensus_pubkey = consensus_pubkey;
        this.validator_network_addresses = validator_network_addresses;
        this.fullnode_network_addresses = fullnode_network_addresses;
    }
}
export class ScriptCallVariantSetValidatorOperator extends ScriptCall {
    constructor(operator_name, operator_account) {
        super();
        this.operator_name = operator_name;
        this.operator_account = operator_account;
    }
}
export class ScriptCallVariantSetValidatorOperatorWithNonceAdmin extends ScriptCall {
    constructor(sliding_nonce, operator_name, operator_account) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.operator_name = operator_name;
        this.operator_account = operator_account;
    }
}
export class ScriptCallVariantTieredMint extends ScriptCall {
    constructor(coin_type, sliding_nonce, designated_dealer_address, mint_amount, tier_index) {
        super();
        this.coin_type = coin_type;
        this.sliding_nonce = sliding_nonce;
        this.designated_dealer_address = designated_dealer_address;
        this.mint_amount = mint_amount;
        this.tier_index = tier_index;
    }
}
export class ScriptCallVariantUnfreezeAccount extends ScriptCall {
    constructor(sliding_nonce, to_unfreeze_account) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.to_unfreeze_account = to_unfreeze_account;
    }
}
export class ScriptCallVariantUpdateDualAttestationLimit extends ScriptCall {
    constructor(sliding_nonce, new_micro_lbr_limit) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.new_micro_lbr_limit = new_micro_lbr_limit;
    }
}
export class ScriptCallVariantUpdateExchangeRate extends ScriptCall {
    constructor(currency, sliding_nonce, new_exchange_rate_numerator, new_exchange_rate_denominator) {
        super();
        this.currency = currency;
        this.sliding_nonce = sliding_nonce;
        this.new_exchange_rate_numerator = new_exchange_rate_numerator;
        this.new_exchange_rate_denominator = new_exchange_rate_denominator;
    }
}
export class ScriptCallVariantUpdateLibraVersion extends ScriptCall {
    constructor(sliding_nonce, major) {
        super();
        this.sliding_nonce = sliding_nonce;
        this.major = major;
    }
}
export class ScriptCallVariantUpdateMintingAbility extends ScriptCall {
    constructor(currency, allow_minting) {
        super();
        this.currency = currency;
        this.allow_minting = allow_minting;
    }
}
export var Types;
(function (Types) {
    Types[Types["Boolean"] = 0] = "Boolean";
    Types[Types["U8"] = 1] = "U8";
    Types[Types["U64"] = 2] = "U64";
    Types[Types["U128"] = 3] = "U128";
    Types[Types["Address"] = 4] = "Address";
    Types[Types["Array"] = 5] = "Array";
    Types[Types["Struct"] = 6] = "Struct";
})(Types || (Types = {}));
export class Stdlib {
    static fromHexString(hexString) {
        return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
    }
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
    static encodeAddCurrencyToAccountScript(currency) {
        const code = Stdlib.ADD_CURRENCY_TO_ACCOUNT_CODE;
        const tyArgs = [currency];
        const args = [];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeAddRecoveryRotationCapabilityScript(recovery_address) {
        const code = Stdlib.ADD_RECOVERY_ROTATION_CAPABILITY_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantAddress(recovery_address),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeAddToScriptAllowListScript(hash, sliding_nonce) {
        const code = Stdlib.ADD_TO_SCRIPT_ALLOW_LIST_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU8Vector(hash),
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeAddValidatorAndReconfigureScript(sliding_nonce, validator_name, validator_address) {
        const code = Stdlib.ADD_VALIDATOR_AND_RECONFIGURE_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantU8Vector(validator_name),
            new LibraTypes.TransactionArgumentVariantAddress(validator_address),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeBurnScript(token, sliding_nonce, preburn_address) {
        const code = Stdlib.BURN_CODE;
        const tyArgs = [token];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantAddress(preburn_address),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeBurnTxnFeesScript(coin_type) {
        const code = Stdlib.BURN_TXN_FEES_CODE;
        const tyArgs = [coin_type];
        const args = [];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeCancelBurnScript(token, preburn_address) {
        const code = Stdlib.CANCEL_BURN_CODE;
        const tyArgs = [token];
        const args = [
            new LibraTypes.TransactionArgumentVariantAddress(preburn_address),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeCreateChildVaspAccountScript(coin_type, child_address, auth_key_prefix, add_all_currencies, child_initial_balance) {
        const code = Stdlib.CREATE_CHILD_VASP_ACCOUNT_CODE;
        const tyArgs = [coin_type];
        const args = [
            new LibraTypes.TransactionArgumentVariantAddress(child_address),
            new LibraTypes.TransactionArgumentVariantU8Vector(auth_key_prefix),
            new LibraTypes.TransactionArgumentVariantBool(add_all_currencies),
            new LibraTypes.TransactionArgumentVariantU64(child_initial_balance),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeCreateDesignatedDealerScript(currency, sliding_nonce, addr, auth_key_prefix, human_name, add_all_currencies) {
        const code = Stdlib.CREATE_DESIGNATED_DEALER_CODE;
        const tyArgs = [currency];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantAddress(addr),
            new LibraTypes.TransactionArgumentVariantU8Vector(auth_key_prefix),
            new LibraTypes.TransactionArgumentVariantU8Vector(human_name),
            new LibraTypes.TransactionArgumentVariantBool(add_all_currencies),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeCreateParentVaspAccountScript(coin_type, sliding_nonce, new_account_address, auth_key_prefix, human_name, add_all_currencies) {
        const code = Stdlib.CREATE_PARENT_VASP_ACCOUNT_CODE;
        const tyArgs = [coin_type];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantAddress(new_account_address),
            new LibraTypes.TransactionArgumentVariantU8Vector(auth_key_prefix),
            new LibraTypes.TransactionArgumentVariantU8Vector(human_name),
            new LibraTypes.TransactionArgumentVariantBool(add_all_currencies),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeCreateRecoveryAddressScript() {
        const code = Stdlib.CREATE_RECOVERY_ADDRESS_CODE;
        const tyArgs = [];
        const args = [];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeCreateValidatorAccountScript(sliding_nonce, new_account_address, auth_key_prefix, human_name) {
        const code = Stdlib.CREATE_VALIDATOR_ACCOUNT_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantAddress(new_account_address),
            new LibraTypes.TransactionArgumentVariantU8Vector(auth_key_prefix),
            new LibraTypes.TransactionArgumentVariantU8Vector(human_name),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeCreateValidatorOperatorAccountScript(sliding_nonce, new_account_address, auth_key_prefix, human_name) {
        const code = Stdlib.CREATE_VALIDATOR_OPERATOR_ACCOUNT_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantAddress(new_account_address),
            new LibraTypes.TransactionArgumentVariantU8Vector(auth_key_prefix),
            new LibraTypes.TransactionArgumentVariantU8Vector(human_name),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeFreezeAccountScript(sliding_nonce, to_freeze_account) {
        const code = Stdlib.FREEZE_ACCOUNT_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantAddress(to_freeze_account),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodePeerToPeerWithMetadataScript(currency, payee, amount, metadata, metadata_signature) {
        const code = Stdlib.PEER_TO_PEER_WITH_METADATA_CODE;
        const tyArgs = [currency];
        const args = [
            new LibraTypes.TransactionArgumentVariantAddress(payee),
            new LibraTypes.TransactionArgumentVariantU64(amount),
            new LibraTypes.TransactionArgumentVariantU8Vector(metadata),
            new LibraTypes.TransactionArgumentVariantU8Vector(metadata_signature),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodePreburnScript(token, amount) {
        const code = Stdlib.PREBURN_CODE;
        const tyArgs = [token];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(amount),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodePublishSharedEd25519PublicKeyScript(public_key) {
        const code = Stdlib.PUBLISH_SHARED_ED25519_PUBLIC_KEY_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU8Vector(public_key),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeRegisterValidatorConfigScript(validator_account, consensus_pubkey, validator_network_addresses, fullnode_network_addresses) {
        const code = Stdlib.REGISTER_VALIDATOR_CONFIG_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantAddress(validator_account),
            new LibraTypes.TransactionArgumentVariantU8Vector(consensus_pubkey),
            new LibraTypes.TransactionArgumentVariantU8Vector(validator_network_addresses),
            new LibraTypes.TransactionArgumentVariantU8Vector(fullnode_network_addresses),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeRemoveValidatorAndReconfigureScript(sliding_nonce, validator_name, validator_address) {
        const code = Stdlib.REMOVE_VALIDATOR_AND_RECONFIGURE_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantU8Vector(validator_name),
            new LibraTypes.TransactionArgumentVariantAddress(validator_address),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeRotateAuthenticationKeyScript(new_key) {
        const code = Stdlib.ROTATE_AUTHENTICATION_KEY_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU8Vector(new_key),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeRotateAuthenticationKeyWithNonceScript(sliding_nonce, new_key) {
        const code = Stdlib.ROTATE_AUTHENTICATION_KEY_WITH_NONCE_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantU8Vector(new_key),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeRotateAuthenticationKeyWithNonceAdminScript(sliding_nonce, new_key) {
        const code = Stdlib.ROTATE_AUTHENTICATION_KEY_WITH_NONCE_ADMIN_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantU8Vector(new_key),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeRotateAuthenticationKeyWithRecoveryAddressScript(recovery_address, to_recover, new_key) {
        const code = Stdlib.ROTATE_AUTHENTICATION_KEY_WITH_RECOVERY_ADDRESS_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantAddress(recovery_address),
            new LibraTypes.TransactionArgumentVariantAddress(to_recover),
            new LibraTypes.TransactionArgumentVariantU8Vector(new_key),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeRotateDualAttestationInfoScript(new_url, new_key) {
        const code = Stdlib.ROTATE_DUAL_ATTESTATION_INFO_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU8Vector(new_url),
            new LibraTypes.TransactionArgumentVariantU8Vector(new_key),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeRotateSharedEd25519PublicKeyScript(public_key) {
        const code = Stdlib.ROTATE_SHARED_ED25519_PUBLIC_KEY_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU8Vector(public_key),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeSetValidatorConfigAndReconfigureScript(validator_account, consensus_pubkey, validator_network_addresses, fullnode_network_addresses) {
        const code = Stdlib.SET_VALIDATOR_CONFIG_AND_RECONFIGURE_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantAddress(validator_account),
            new LibraTypes.TransactionArgumentVariantU8Vector(consensus_pubkey),
            new LibraTypes.TransactionArgumentVariantU8Vector(validator_network_addresses),
            new LibraTypes.TransactionArgumentVariantU8Vector(fullnode_network_addresses),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeSetValidatorOperatorScript(operator_name, operator_account) {
        const code = Stdlib.SET_VALIDATOR_OPERATOR_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU8Vector(operator_name),
            new LibraTypes.TransactionArgumentVariantAddress(operator_account),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeSetValidatorOperatorWithNonceAdminScript(sliding_nonce, operator_name, operator_account) {
        const code = Stdlib.SET_VALIDATOR_OPERATOR_WITH_NONCE_ADMIN_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantU8Vector(operator_name),
            new LibraTypes.TransactionArgumentVariantAddress(operator_account),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeTieredMintScript(coin_type, sliding_nonce, designated_dealer_address, mint_amount, tier_index) {
        const code = Stdlib.TIERED_MINT_CODE;
        const tyArgs = [coin_type];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantAddress(designated_dealer_address),
            new LibraTypes.TransactionArgumentVariantU64(mint_amount),
            new LibraTypes.TransactionArgumentVariantU64(tier_index),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeUnfreezeAccountScript(sliding_nonce, to_unfreeze_account) {
        const code = Stdlib.UNFREEZE_ACCOUNT_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantAddress(to_unfreeze_account),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeUpdateDualAttestationLimitScript(sliding_nonce, new_micro_lbr_limit) {
        const code = Stdlib.UPDATE_DUAL_ATTESTATION_LIMIT_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantU64(new_micro_lbr_limit),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeUpdateExchangeRateScript(currency, sliding_nonce, new_exchange_rate_numerator, new_exchange_rate_denominator) {
        const code = Stdlib.UPDATE_EXCHANGE_RATE_CODE;
        const tyArgs = [currency];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantU64(new_exchange_rate_numerator),
            new LibraTypes.TransactionArgumentVariantU64(new_exchange_rate_denominator),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeUpdateLibraVersionScript(sliding_nonce, major) {
        const code = Stdlib.UPDATE_LIBRA_VERSION_CODE;
        const tyArgs = [];
        const args = [
            new LibraTypes.TransactionArgumentVariantU64(sliding_nonce),
            new LibraTypes.TransactionArgumentVariantU64(major),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
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
    static encodeUpdateMintingAbilityScript(currency, allow_minting) {
        const code = Stdlib.UPDATE_MINTING_ABILITY_CODE;
        const tyArgs = [currency];
        const args = [
            new LibraTypes.TransactionArgumentVariantBool(allow_minting),
        ];
        return new LibraTypes.Script(code, tyArgs, args);
    }
    static decodeAddCurrencyToAccountScript(script) {
        return new ScriptCallVariantAddCurrencyToAccount(script.ty_args[0]);
    }
    static decodeAddRecoveryRotationCapabilityScript(script) {
        return new ScriptCallVariantAddRecoveryRotationCapability(script.args[0].value);
    }
    static decodeAddToScriptAllowListScript(script) {
        return new ScriptCallVariantAddToScriptAllowList(script.args[0].value, script.args[1].value);
    }
    static decodeAddValidatorAndReconfigureScript(script) {
        return new ScriptCallVariantAddValidatorAndReconfigure(script.args[0].value, script.args[1].value, script.args[2].value);
    }
    static decodeBurnScript(script) {
        return new ScriptCallVariantBurn(script.ty_args[0], script.args[0].value, script.args[1].value);
    }
    static decodeBurnTxnFeesScript(script) {
        return new ScriptCallVariantBurnTxnFees(script.ty_args[0]);
    }
    static decodeCancelBurnScript(script) {
        return new ScriptCallVariantCancelBurn(script.ty_args[0], script.args[0].value);
    }
    static decodeCreateChildVaspAccountScript(script) {
        return new ScriptCallVariantCreateChildVaspAccount(script.ty_args[0], script.args[0].value, script.args[1].value, script.args[2].value, script.args[3].value);
    }
    static decodeCreateDesignatedDealerScript(script) {
        return new ScriptCallVariantCreateDesignatedDealer(script.ty_args[0], script.args[0].value, script.args[1].value, script.args[2].value, script.args[3].value, script.args[4].value);
    }
    static decodeCreateParentVaspAccountScript(script) {
        return new ScriptCallVariantCreateParentVaspAccount(script.ty_args[0], script.args[0].value, script.args[1].value, script.args[2].value, script.args[3].value, script.args[4].value);
    }
    static decodeCreateRecoveryAddressScript(_script) {
        return new ScriptCallVariantCreateRecoveryAddress();
    }
    static decodeCreateValidatorAccountScript(script) {
        return new ScriptCallVariantCreateValidatorAccount(script.args[0].value, script.args[1].value, script.args[2].value, script.args[3].value);
    }
    static decodeCreateValidatorOperatorAccountScript(script) {
        return new ScriptCallVariantCreateValidatorOperatorAccount(script.args[0].value, script.args[1].value, script.args[2].value, script.args[3].value);
    }
    static decodeFreezeAccountScript(script) {
        return new ScriptCallVariantFreezeAccount(script.args[0].value, script.args[1].value);
    }
    static decodePeerToPeerWithMetadataScript(script) {
        return new ScriptCallVariantPeerToPeerWithMetadata(script.ty_args[0], script.args[0].value, script.args[1].value, script.args[2].value, script.args[3].value);
    }
    static decodePreburnScript(script) {
        return new ScriptCallVariantPreburn(script.ty_args[0], script.args[0].value);
    }
    static decodePublishSharedEd25519PublicKeyScript(script) {
        return new ScriptCallVariantPublishSharedEd25519PublicKey(script.args[0].value);
    }
    static decodeRegisterValidatorConfigScript(script) {
        return new ScriptCallVariantRegisterValidatorConfig(script.args[0].value, script.args[1].value, script.args[2].value, script.args[3].value);
    }
    static decodeRemoveValidatorAndReconfigureScript(script) {
        return new ScriptCallVariantRemoveValidatorAndReconfigure(script.args[0].value, script.args[1].value, script.args[2].value);
    }
    static decodeRotateAuthenticationKeyScript(script) {
        return new ScriptCallVariantRotateAuthenticationKey(script.args[0].value);
    }
    static decodeRotateAuthenticationKeyWithNonceScript(script) {
        return new ScriptCallVariantRotateAuthenticationKeyWithNonce(script.args[0].value, script.args[1].value);
    }
    static decodeRotateAuthenticationKeyWithNonceAdminScript(script) {
        return new ScriptCallVariantRotateAuthenticationKeyWithNonceAdmin(script.args[0].value, script.args[1].value);
    }
    static decodeRotateAuthenticationKeyWithRecoveryAddressScript(script) {
        return new ScriptCallVariantRotateAuthenticationKeyWithRecoveryAddress(script.args[0].value, script.args[1].value, script.args[2].value);
    }
    static decodeRotateDualAttestationInfoScript(script) {
        return new ScriptCallVariantRotateDualAttestationInfo(script.args[0].value, script.args[1].value);
    }
    static decodeRotateSharedEd25519PublicKeyScript(script) {
        return new ScriptCallVariantRotateSharedEd25519PublicKey(script.args[0].value);
    }
    static decodeSetValidatorConfigAndReconfigureScript(script) {
        return new ScriptCallVariantSetValidatorConfigAndReconfigure(script.args[0].value, script.args[1].value, script.args[2].value, script.args[3].value);
    }
    static decodeSetValidatorOperatorScript(script) {
        return new ScriptCallVariantSetValidatorOperator(script.args[0].value, script.args[1].value);
    }
    static decodeSetValidatorOperatorWithNonceAdminScript(script) {
        return new ScriptCallVariantSetValidatorOperatorWithNonceAdmin(script.args[0].value, script.args[1].value, script.args[2].value);
    }
    static decodeTieredMintScript(script) {
        return new ScriptCallVariantTieredMint(script.ty_args[0], script.args[0].value, script.args[1].value, script.args[2].value, script.args[3].value);
    }
    static decodeUnfreezeAccountScript(script) {
        return new ScriptCallVariantUnfreezeAccount(script.args[0].value, script.args[1].value);
    }
    static decodeUpdateDualAttestationLimitScript(script) {
        return new ScriptCallVariantUpdateDualAttestationLimit(script.args[0].value, script.args[1].value);
    }
    static decodeUpdateExchangeRateScript(script) {
        return new ScriptCallVariantUpdateExchangeRate(script.ty_args[0], script.args[0].value, script.args[1].value, script.args[2].value);
    }
    static decodeUpdateLibraVersionScript(script) {
        return new ScriptCallVariantUpdateLibraVersion(script.args[0].value, script.args[1].value);
    }
    static decodeUpdateMintingAbilityScript(script) {
        return new ScriptCallVariantUpdateMintingAbility(script.ty_args[0], script.args[0].value);
    }
}
Stdlib.ADD_CURRENCY_TO_ACCOUNT_CODE = Stdlib.fromHexString('a11ceb0b0100000006010002030206040802050a0707111a082b100000000100010101000201060c000109000c4c696272614163636f756e740c6164645f63757272656e63790000000000000000000000000000000101010001030b00380002');
Stdlib.ADD_RECOVERY_ROTATION_CAPABILITY_CODE = Stdlib.fromHexString('a11ceb0b010000000601000402040403080a05120f07216b088c011000000001000201000003000100010402030001060c010800020800050002060c050c4c696272614163636f756e740f5265636f7665727941646472657373154b6579526f746174696f6e4361706162696c6974791f657874726163745f6b65795f726f746174696f6e5f6361706162696c697479176164645f726f746174696f6e5f6361706162696c69747900000000000000000000000000000001000403050b0011000a01110102');
Stdlib.ADD_TO_SCRIPT_ALLOW_LIST_CODE = Stdlib.fromHexString('a11ceb0b010000000501000403040a050e10071e5d087b10000000010002000100010302010002060c0a020002060c0303060c0a0203204c696272615472616e73616374696f6e5075626c697368696e674f7074696f6e0c536c6964696e674e6f6e6365186164645f746f5f7363726970745f616c6c6f775f6c697374157265636f72645f6e6f6e63655f6f725f61626f727400000000000000000000000000000001000301070a000a0211010b000b01110002');
Stdlib.ADD_VALIDATOR_AND_RECONFIGURE_CODE = Stdlib.fromHexString('a11ceb0b010000000501000603060f051518072d5c0889011000000001000201030001000204020300000504010002060c03000105010a0202060c0504060c030a02050201030b4c6962726153797374656d0c536c6964696e674e6f6e63650f56616c696461746f72436f6e666967157265636f72645f6e6f6e63655f6f725f61626f72740e6765745f68756d616e5f6e616d650d6164645f76616c696461746f7200000000000000000000000000000001000506120a000a0111000a0311010b02210c040b04030e0b0001060000000000000000270b000a03110202');
Stdlib.BURN_CODE = Stdlib.fromHexString('a11ceb0b010000000601000403040b040f0205111107222e085010000000010102000100000302010101010402060c030002060c0503060c0305010900054c696272610c536c6964696e674e6f6e6365157265636f72645f6e6f6e63655f6f725f61626f7274046275726e0000000000000000000000000000000101010301070a000a0111000b000a02380002');
Stdlib.BURN_TXN_FEES_CODE = Stdlib.fromHexString('a11ceb0b0100000006010002030206040802050a07071119082a100000000100010101000201060c000109000e5472616e73616374696f6e466565096275726e5f666565730000000000000000000000000000000101010001030b00380002');
Stdlib.CANCEL_BURN_CODE = Stdlib.fromHexString('a11ceb0b0100000006010002030206040802050a08071219082b100000000100010101000202060c05000109000c4c696272614163636f756e740b63616e63656c5f6275726e0000000000000000000000000000000101010001040b000a01380002');
Stdlib.CREATE_CHILD_VASP_ACCOUNT_CODE = Stdlib.fromHexString('a11ceb0b0100000008010002020204030616041c0405202307437b08be011006ce0104000000010100000200010101000302030000040401010100050301000006020604060c050a02010001060c0108000506080005030a020a0205060c050a0201030109000c4c696272614163636f756e741257697468647261774361706162696c697479196372656174655f6368696c645f766173705f6163636f756e741b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c697479000000000000000000000000000000010a02010001010503190a000a010b020a0338000a0406000000000000000024030a05160b0011010c050e050a010a040700070038010b05110305180b000102');
Stdlib.CREATE_DESIGNATED_DEALER_CODE = Stdlib.fromHexString('a11ceb0b010000000601000403040b040f0205111b072c49087510000000010102000100000302010101010402060c030005060c050a020a020106060c03050a020a02010109000c4c696272614163636f756e740c536c6964696e674e6f6e6365157265636f72645f6e6f6e63655f6f725f61626f7274186372656174655f64657369676e617465645f6465616c657200000000000000000000000000000001010103010a0a000a0111000b000a020b030b040a05380002');
Stdlib.CREATE_PARENT_VASP_ACCOUNT_CODE = Stdlib.fromHexString('a11ceb0b010000000601000403040b040f0205111b072c4b087710000000010102000100000302010101010402060c030005060c050a020a020106060c03050a020a02010109000c4c696272614163636f756e740c536c6964696e674e6f6e6365157265636f72645f6e6f6e63655f6f725f61626f72741a6372656174655f706172656e745f766173705f6163636f756e7400000000000000000000000000000001010103010a0a000a0111000b000a020b030b040a05380002');
Stdlib.CREATE_RECOVERY_ADDRESS_CODE = Stdlib.fromHexString('a11ceb0b010000000601000402040403080a05120c071e5b08791000000001000201000003000100010402030001060c01080002060c0800000c4c696272614163636f756e740f5265636f7665727941646472657373154b6579526f746174696f6e4361706162696c6974791f657874726163745f6b65795f726f746174696f6e5f6361706162696c697479077075626c69736800000000000000000000000000000001000003050a000b001100110102');
Stdlib.CREATE_VALIDATOR_ACCOUNT_CODE = Stdlib.fromHexString('a11ceb0b010000000501000403040a050e16072449086d10000000010102000100000302010002060c030004060c050a020a0205060c03050a020a020c4c696272614163636f756e740c536c6964696e674e6f6e6365157265636f72645f6e6f6e63655f6f725f61626f7274186372656174655f76616c696461746f725f6163636f756e7400000000000000000000000000000001000301090a000a0111000b000a020b030b04110102');
Stdlib.CREATE_VALIDATOR_OPERATOR_ACCOUNT_CODE = Stdlib.fromHexString('a11ceb0b010000000501000403040a050e16072452087610000000010102000100000302010002060c030004060c050a020a0205060c03050a020a020c4c696272614163636f756e740c536c6964696e674e6f6e6365157265636f72645f6e6f6e63655f6f725f61626f7274216372656174655f76616c696461746f725f6f70657261746f725f6163636f756e7400000000000000000000000000000001000301090a000a0111000b000a020b030b04110102');
Stdlib.FREEZE_ACCOUNT_CODE = Stdlib.fromHexString('a11ceb0b010000000501000403040a050e0e071c42085e10000000010002000100010302010002060c050002060c0303060c03050f4163636f756e74467265657a696e670c536c6964696e674e6f6e63650e667265657a655f6163636f756e74157265636f72645f6e6f6e63655f6f725f61626f727400000000000000000000000000000001000301070a000a0111010b000a02110002');
Stdlib.PEER_TO_PEER_WITH_METADATA_CODE = Stdlib.fromHexString('a11ceb0b010000000701000202020403061004160205181d0735610896011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000c4c696272614163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b05110202');
Stdlib.PREBURN_CODE = Stdlib.fromHexString('a11ceb0b0100000007010002020204030610041602051815072d60088d011000000001010000020001000003020301010004010300010501060c01080003060c060800030002060c030109000c4c696272614163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479077072656275726e1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010a0a0011000c020b000e020a0138000b02110202');
Stdlib.PUBLISH_SHARED_ED25519_PUBLIC_KEY_CODE = Stdlib.fromHexString('a11ceb0b0100000005010002030205050706070d1f082c100000000100010002060c0a020016536861726564456432353531395075626c69634b6579077075626c69736800000000000000000000000000000001000001040b000b01110002');
Stdlib.REGISTER_VALIDATOR_CONFIG_CODE = Stdlib.fromHexString('a11ceb0b010000000501000203020505070b07121b082d100000000100010005060c050a020a020a02000f56616c696461746f72436f6e6669670a7365745f636f6e66696700000000000000000000000000000001000001070b000a010b020b030b04110002');
Stdlib.REMOVE_VALIDATOR_AND_RECONFIGURE_CODE = Stdlib.fromHexString('a11ceb0b010000000501000603060f051518072d5f088c011000000001000201030001000204020300000504010002060c03000105010a0202060c0504060c030a02050201030b4c6962726153797374656d0c536c6964696e674e6f6e63650f56616c696461746f72436f6e666967157265636f72645f6e6f6e63655f6f725f61626f72740e6765745f68756d616e5f6e616d651072656d6f76655f76616c696461746f7200000000000000000000000000000001000506120a000a0111000a0311010b02210c040b04030e0b0001060000000000000000270b000a03110202');
Stdlib.ROTATE_AUTHENTICATION_KEY_CODE = Stdlib.fromHexString('a11ceb0b010000000601000202020403060f05151207277d08a4011000000001010000020001000003010200000403020001060c01080000020608000a0202060c0a020c4c696272614163636f756e74154b6579526f746174696f6e4361706162696c6974791f657874726163745f6b65795f726f746174696f6e5f6361706162696c6974791f726573746f72655f6b65795f726f746174696f6e5f6361706162696c69747919726f746174655f61757468656e7469636174696f6e5f6b657900000000000000000000000000000001000401090b0011000c020e020b0111020b02110102');
Stdlib.ROTATE_AUTHENTICATION_KEY_WITH_NONCE_CODE = Stdlib.fromHexString('a11ceb0b0100000006010004020404030814051c170733a00108d301100000000100030100010200010000040203000005030100000604010002060c030001060c010800020608000a0203060c030a020c4c696272614163636f756e740c536c6964696e674e6f6e6365157265636f72645f6e6f6e63655f6f725f61626f7274154b6579526f746174696f6e4361706162696c6974791f657874726163745f6b65795f726f746174696f6e5f6361706162696c6974791f726573746f72655f6b65795f726f746174696f6e5f6361706162696c69747919726f746174655f61757468656e7469636174696f6e5f6b6579000000000000000000000000000000010005030c0a000a0111000b0011010c030e030b0211030b03110202');
Stdlib.ROTATE_AUTHENTICATION_KEY_WITH_NONCE_ADMIN_CODE = Stdlib.fromHexString('a11ceb0b0100000006010004020404030814051c190735a00108d501100000000100030100010200010000040203000005030100000604010002060c030001060c010800020608000a0204060c060c030a020c4c696272614163636f756e740c536c6964696e674e6f6e6365157265636f72645f6e6f6e63655f6f725f61626f7274154b6579526f746174696f6e4361706162696c6974791f657874726163745f6b65795f726f746174696f6e5f6361706162696c6974791f726573746f72655f6b65795f726f746174696f6e5f6361706162696c69747919726f746174655f61757468656e7469636174696f6e5f6b6579000000000000000000000000000000010005030c0b000a0211000b0111010c040e040b0311030b04110202');
Stdlib.ROTATE_AUTHENTICATION_KEY_WITH_RECOVERY_ADDRESS_CODE = Stdlib.fromHexString('a11ceb0b0100000005010002030205050708070f2a0839100000000100010004060c05050a02000f5265636f766572794164647265737319726f746174655f61757468656e7469636174696f6e5f6b657900000000000000000000000000000001000001060b000a010a020b03110002');
Stdlib.ROTATE_DUAL_ATTESTATION_INFO_CODE = Stdlib.fromHexString('a11ceb0b010000000501000203020a050c0d07193d08561000000001000100000200010002060c0a020003060c0a020a020f4475616c4174746573746174696f6e0f726f746174655f626173655f75726c1c726f746174655f636f6d706c69616e63655f7075626c69635f6b657900000000000000000000000000000001000201070a000b0111000b000b02110102');
Stdlib.ROTATE_SHARED_ED25519_PUBLIC_KEY_CODE = Stdlib.fromHexString('a11ceb0b0100000005010002030205050706070d22082f100000000100010002060c0a020016536861726564456432353531395075626c69634b65790a726f746174655f6b657900000000000000000000000000000001000001040b000b01110002');
Stdlib.SET_VALIDATOR_CONFIG_AND_RECONFIGURE_CODE = Stdlib.fromHexString('a11ceb0b010000000501000403040a050e0f071d45086210000000010102000100000302010005060c050a020a020a020002060c050b4c6962726153797374656d0f56616c696461746f72436f6e6669670a7365745f636f6e6669671d7570646174655f636f6e6669675f616e645f7265636f6e666967757265000000000000000000000000000000010000010a0a000a010b020b030b0411000b000a01110102');
Stdlib.SET_VALIDATOR_OPERATOR_CODE = Stdlib.fromHexString('a11ceb0b010000000501000403040a050e1307214408651000000001010200010000030203000105010a0202060c050003060c0a02050201030f56616c696461746f72436f6e6669671756616c696461746f724f70657261746f72436f6e6669670e6765745f68756d616e5f6e616d650c7365745f6f70657261746f72000000000000000000000000000000010004050f0a0211000b01210c030b03030b0b0001060000000000000000270b000a02110102');
Stdlib.SET_VALIDATOR_OPERATOR_WITH_NONCE_ADMIN_CODE = Stdlib.fromHexString('a11ceb0b010000000501000603060f05151a072f670896011000000001000200030001000204020300010504010002060c03000105010a0202060c0505060c060c030a02050201030c536c6964696e674e6f6e63650f56616c696461746f72436f6e6669671756616c696461746f724f70657261746f72436f6e666967157265636f72645f6e6f6e63655f6f725f61626f72740e6765745f68756d616e5f6e616d650c7365745f6f70657261746f7200000000000000000000000000000001000506120b000a0211000a0411010b03210c050b05030e0b0101060000000000000000270b010a04110202');
Stdlib.TIERED_MINT_CODE = Stdlib.fromHexString('a11ceb0b010000000601000403040b040f0205111507263c086210000000010102000100000302010101010402060c030004060c05030305060c030503030109000c4c696272614163636f756e740c536c6964696e674e6f6e6365157265636f72645f6e6f6e63655f6f725f61626f72740b7469657265645f6d696e740000000000000000000000000000000101010301090a000a0111000b000a020a030a04380002');
Stdlib.UNFREEZE_ACCOUNT_CODE = Stdlib.fromHexString('a11ceb0b010000000501000403040a050e0e071c44086010000000010002000100010302010002060c050002060c0303060c03050f4163636f756e74467265657a696e670c536c6964696e674e6f6e636510756e667265657a655f6163636f756e74157265636f72645f6e6f6e63655f6f725f61626f727400000000000000000000000000000001000301070a000a0111010b000a02110002');
Stdlib.UPDATE_DUAL_ATTESTATION_LIMIT_CODE = Stdlib.fromHexString('a11ceb0b010000000501000403040a050e0a071848086010000000010002000100010300010002060c030003060c03030f4475616c4174746573746174696f6e0c536c6964696e674e6f6e6365147365745f6d6963726f6c696272615f6c696d6974157265636f72645f6e6f6e63655f6f725f61626f727400000000000000000000000000000001000201070a000a0111010b000a02110002');
Stdlib.UPDATE_EXCHANGE_RATE_CODE = Stdlib.fromHexString('a11ceb0b0100000007010006020604030a10041a02051c19073564089901100000000100020000020000030001000204020300010504030101020602030301080002060c030002060c080004060c0303030109000c4669786564506f696e743332054c696272610c536c6964696e674e6f6e6365146372656174655f66726f6d5f726174696f6e616c157265636f72645f6e6f6e63655f6f725f61626f7274187570646174655f6c62725f65786368616e67655f7261746500000000000000000000000000000001010105010b0a000a0111010a020a0311000c040b000b04380002');
Stdlib.UPDATE_LIBRA_VERSION_CODE = Stdlib.fromHexString('a11ceb0b010000000501000403040a050e0a071834084c10000000010002000100010300010002060c030003060c03030c4c6962726156657273696f6e0c536c6964696e674e6f6e636503736574157265636f72645f6e6f6e63655f6f725f61626f727400000000000000000000000000000001000201070a000a0111010b000a02110002');
Stdlib.UPDATE_MINTING_ABILITY_CODE = Stdlib.fromHexString('a11ceb0b0100000006010002030206040802050a0807121d082f100000000100010101000202060c0100010900054c69627261167570646174655f6d696e74696e675f6162696c6974790000000000000000000000000000000101010001040b000a01380002');
Stdlib.ScriptArgs = {
    AddCurrencyToAccount: {
        stdlibEncodeFunction: Stdlib.encodeAddCurrencyToAccountScript,
        stdlibDecodeFunction: Stdlib.decodeAddCurrencyToAccountScript,
        codeName: 'ADD_CURRENCY_TO_ACCOUNT',
        description: ' # Summary' +
            ' Adds a zero `Types` balance to the sending `account`. This will enable `account` to' +
            ' send, receive, and hold `Libra::Libra<Types>` coins. This transaction can be' +
            ' successfully sent by any account that is allowed to hold balances' +
            ' (e.g., VASP, Designated Dealer).' +
            '' +
            ' # Technical Description' +
            ' After the successful execution of this transaction the sending account will have a' +
            ' `LibraAccount::Balance<Types>` resource with zero balance published under it. Only' +
            ' accounts that can hold balances can send this transaction, the sending account cannot' +
            ' already have a `LibraAccount::Balance<Types>` published under it.' +
            '' +
            ' # Parameters' +
            ' | Name       | Type      | Description                                                                                                                                         |' +
            ' | ------     | ------    | -------------                                                                                                                                       |' +
            ' | `Types` | Type      | The Move type for the `Types` being added to the sending account of the transaction. `Types` must be an already-registered currency on-chain. |' +
            ' | `account`  | `&signer` | The signer of the sending account of the transaction.                                                                                               |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category              | Error Reason                             | Description                                                                |' +
            ' | ----------------            | --------------                           | -------------                                                              |' +
            ' | `Errors::NOT_PUBLISHED`     | `Libra::ECURRENCY_INFO`                  | The `Types` is not a registered currency on-chain.                      |' +
            " | `Errors::INVALID_ARGUMENT`  | `LibraAccount::EROLE_CANT_STORE_BALANCE` | The sending `account`'s role does not permit balances.                     |" +
            ' | `Errors::ALREADY_PUBLISHED` | `LibraAccount::EADD_EXISTING_CURRENCY`   | A balance for `Types` is already published under the sending `account`. |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_child_vasp_account`' +
            ' * `Script::create_parent_vasp_account`' +
            ' * `Script::peer_to_peer_with_metadata`',
        typeArgs: ['currency'],
        args: [],
    },
    AddRecoveryRotationCapability: {
        stdlibEncodeFunction: Stdlib.encodeAddRecoveryRotationCapabilityScript,
        stdlibDecodeFunction: Stdlib.decodeAddRecoveryRotationCapabilityScript,
        codeName: 'ADD_RECOVERY_ROTATION_CAPABILITY',
        description: ' # Summary' +
            ' Stores the sending accounts ability to rotate its authentication key with a designated recovery' +
            ' account. Both the sending and recovery accounts need to belong to the same VASP and' +
            ' both be VASP accounts. After this transaction both the sending account and the' +
            " specified recovery account can rotate the sender account's authentication key." +
            '' +
            ' # Technical Description' +
            ' Adds the `LibraAccount::KeyRotationCapability` for the sending account' +
            ' (`to_recover_account`) to the `RecoveryAddress::RecoveryAddress` resource under' +
            ' `recovery_address`. After this transaction has been executed successfully the account at' +
            ' `recovery_address` and the `to_recover_account` may rotate the authentication key of' +
            ' `to_recover_account` (the sender of this transaction).' +
            '' +
            ' The sending account of this transaction (`to_recover_account`) must not have previously given away its unique key' +
            ' rotation capability, and must be a VASP account. The account at `recovery_address`' +
            ' must also be a VASP account belonging to the same VASP as the `to_recover_account`.' +
            ' Additionally the account at `recovery_address` must have already initialized itself as' +
            ' a recovery account address using the `Script::create_recovery_address` transaction script.' +
            '' +
            " The sending account's (`to_recover_account`) key rotation capability is" +
            ' removed in this transaction and stored in the `RecoveryAddress::RecoveryAddress`' +
            ' resource stored under the account at `recovery_address`.' +
            '' +
            ' # Parameters' +
            ' | Name                 | Type      | Description                                                                                                |' +
            ' | ------               | ------    | -------------                                                                                              |' +
            ' | `to_recover_account` | `&signer` | The signer reference of the sending account of this transaction.                                           |' +
            " | `recovery_address`   | `address` | The account address where the `to_recover_account`'s `LibraAccount::KeyRotationCapability` will be stored. |" +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                               | Description                                                                                     |' +
            ' | ----------------           | --------------                                             | -------------                                                                                   |' +
            ' | `Errors::INVALID_STATE`    | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `to_recover_account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`. |' +
            ' | `Errors::NOT_PUBLISHED`    | `RecoveryAddress::ERECOVERY_ADDRESS`                       | `recovery_address` does not have a `RecoveryAddress` resource published under it.               |' +
            ' | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::EINVALID_KEY_ROTATION_DELEGATION`        | `to_recover_account` and `recovery_address` do not belong to the same VASP.                     |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_recovery_address`' +
            ' * `Script::rotate_authentication_key_with_recovery_address`',
        typeArgs: [],
        args: [{ name: 'recovery_address', type: { type: Types.Address } }],
    },
    AddToScriptAllowList: {
        stdlibEncodeFunction: Stdlib.encodeAddToScriptAllowListScript,
        stdlibDecodeFunction: Stdlib.decodeAddToScriptAllowListScript,
        codeName: 'ADD_TO_SCRIPT_ALLOW_LIST',
        description: ' # Summary' +
            ' Adds a script hash to the transaction allowlist. This transaction' +
            ' can only be sent by the Libra Root account. Scripts with this hash can be' +
            ' sent afterward the successful execution of this script.' +
            '' +
            ' # Technical Description' +
            '' +
            ' The sending account (`lr_account`) must be the Libra Root account. The script allow' +
            ' list must not already hold the script `hash` being added. The `sliding_nonce` must be' +
            ' a valid nonce for the Libra Root account. After this transaction has executed' +
            ' successfully a reconfiguration will be initiated, and the on-chain config' +
            " `LibraTransactionPublishingOption::LibraTransactionPublishingOption`'s" +
            ' `script_allow_list` field will contain the new script `hash` and transactions' +
            ' with this `hash` can be successfully sent to the network.' +
            '' +
            ' # Parameters' +
            ' | Name            | Type         | Description                                                                                     |' +
            ' | ------          | ------       | -------------                                                                                   |' +
            ' | `lr_account`    | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer. |' +
            ' | `hash`          | `vector<u8>` | The hash of the script to be added to the script allowlist.                                     |' +
            ' | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                                           | Description                                                                                |' +
            ' | ----------------           | --------------                                                         | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                                         | A `SlidingNonce` resource is not published under `lr_account`.                             |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                                         | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                                         | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                                | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ELIBRA_ROOT`                                           | The sending account is not the Libra Root account.                                         |' +
            ' | `Errors::REQUIRES_ROLE`    | `Roles::ELIBRA_ROOT`                                                   | The sending account is not the Libra Root account.                                         |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraTransactionPublishingOption::EINVALID_SCRIPT_HASH`               | The script `hash` is an invalid length.                                                    |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraTransactionPublishingOption::EALLOWLIST_ALREADY_CONTAINS_SCRIPT` | The on-chain allowlist already contains the script `hash`.                                 |',
        typeArgs: [],
        args: [
            {
                name: 'hash',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            { name: 'sliding_nonce', type: { type: Types.U64 } },
        ],
    },
    AddValidatorAndReconfigure: {
        stdlibEncodeFunction: Stdlib.encodeAddValidatorAndReconfigureScript,
        stdlibDecodeFunction: Stdlib.decodeAddValidatorAndReconfigureScript,
        codeName: 'ADD_VALIDATOR_AND_RECONFIGURE',
        description: ' # Summary' +
            ' Adds a validator account to the validator set, and triggers a' +
            ' reconfiguration of the system to admit the account to the validator set for the system. This' +
            ' transaction can only be successfully called by the Libra Root account.' +
            '' +
            ' # Technical Description' +
            ' This script adds the account at `validator_address` to the validator set.' +
            ' This transaction emits a `LibraConfig::NewEpochEvent` event and triggers a' +
            " reconfiguration. Once the reconfiguration triggered by this script's" +
            ' execution has been performed, the account at the `validator_address` is' +
            ' considered to be a validator in the network.' +
            '' +
            ' This transaction script will fail if the `validator_address` address is already in the validator set' +
            ' or does not have a `ValidatorConfig::ValidatorConfig` resource already published under it.' +
            '' +
            ' # Parameters' +
            ' | Name                | Type         | Description                                                                                                                        |' +
            ' | ------              | ------       | -------------                                                                                                                      |' +
            ' | `lr_account`        | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer.                                    |' +
            ' | `sliding_nonce`     | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                         |' +
            ' | `validator_name`    | `vector<u8>` | ASCII-encoded human name for the validator. Must match the human name in the `ValidatorConfig::ValidatorConfig` for the validator. |' +
            ' | `validator_address` | `address`    | The validator account address to be added to the validator set.                                                                    |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                  | Description                                                                                                                               |' +
            ' | ----------------           | --------------                                | -------------                                                                                                                             |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `lr_account`.                                                                            |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                                |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                                                                             |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                                                                         |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ELIBRA_ROOT`                  | The sending account is not the Libra Root account.                                                                                        |' +
            ' | `Errors::REQUIRES_ROLE`    | `Roles::ELIBRA_ROOT`                          | The sending account is not the Libra Root account.                                                                                        |' +
            ' | 0                          | 0                                             | The provided `validator_name` does not match the already-recorded human name for the validator.                                           |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraSystem::EINVALID_PROSPECTIVE_VALIDATOR` | The validator to be added does not have a `ValidatorConfig::ValidatorConfig` resource published under it, or its `config` field is empty. |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraSystem::EALREADY_A_VALIDATOR`           | The `validator_address` account is already a registered validator.                                                                        |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_validator_account`' +
            ' * `Script::create_validator_operator_account`' +
            ' * `Script::register_validator_config`' +
            ' * `Script::remove_validator_and_reconfigure`' +
            ' * `Script::set_validator_operator`' +
            ' * `Script::set_validator_operator_with_nonce_admin`' +
            ' * `Script::set_validator_config_and_reconfigure`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            {
                name: 'validator_name',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            { name: 'validator_address', type: { type: Types.Address } },
        ],
    },
    Burn: {
        stdlibEncodeFunction: Stdlib.encodeBurnScript,
        stdlibDecodeFunction: Stdlib.decodeBurnScript,
        codeName: 'BURN',
        description: ' # Summary' +
            ' Burns all coins held in the preburn resource at the specified' +
            ' preburn address and removes them from the system. The sending account must' +
            ' be the Treasury Compliance account.' +
            ' The account that holds the preburn resource will normally be a Designated' +
            ' Dealer, but there are no enforced requirements that it be one.' +
            '' +
            ' # Technical Description' +
            ' This transaction permanently destroys all the coins of `Token` type' +
            ' stored in the `Libra::Preburn<Token>` resource published under the' +
            ' `preburn_address` account address.' +
            '' +
            ' This transaction will only succeed if the sending `account` has a' +
            ' `Libra::BurnCapability<Token>`, and a `Libra::Preburn<Token>` resource' +
            ' exists under `preburn_address`, with a non-zero `to_burn` field. After the successful execution' +
            ' of this transaction the `total_value` field in the' +
            ' `Libra::CurrencyInfo<Token>` resource published under `0xA550C18` will be' +
            ' decremented by the value of the `to_burn` field of the preburn resource' +
            ' under `preburn_address` immediately before this transaction, and the' +
            ' `to_burn` field of the preburn resource will have a zero value.' +
            '' +
            ' ## Events' +
            ' The successful execution of this transaction will emit a `Libra::BurnEvent` on the event handle' +
            " held in the `Libra::CurrencyInfo<Token>` resource's `burn_events` published under" +
            ' `0xA550C18`.' +
            '' +
            ' # Parameters' +
            ' | Name              | Type      | Description                                                                                                                  |' +
            ' | ------            | ------    | -------------                                                                                                                |' +
            ' | `Token`           | Type      | The Move type for the `Token` currency being burned. `Token` must be an already-registered currency on-chain.                |' +
            ' | `tc_account`      | `&signer` | The signer reference of the sending account of this transaction, must have a burn capability for `Token` published under it. |' +
            ' | `sliding_nonce`   | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                   |' +
            ' | `preburn_address` | `address` | The address where the coins to-be-burned are currently held.                                                                 |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category                | Error Reason                            | Description                                                                                           |' +
            ' | ----------------              | --------------                          | -------------                                                                                         |' +
            ' | `Errors::NOT_PUBLISHED`       | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `account`.                                           |' +
            " | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.            |" +
            ' | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                                         |' +
            ' | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                                     |' +
            ' | `Errors::REQUIRES_CAPABILITY` | `Libra::EBURN_CAPABILITY`               | The sending `account` does not have a `Libra::BurnCapability<Token>` published under it.              |' +
            ' | `Errors::NOT_PUBLISHED`       | `Libra::EPREBURN`                       | The account at `preburn_address` does not have a `Libra::Preburn<Token>` resource published under it. |' +
            ' | `Errors::INVALID_STATE`       | `Libra::EPREBURN_EMPTY`                 | The `Libra::Preburn<Token>` resource is empty (has a value of 0).                                     |' +
            ' | `Errors::NOT_PUBLISHED`       | `Libra::ECURRENCY_INFO`                 | The specified `Token` is not a registered currency on-chain.                                          |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::burn_txn_fees`' +
            ' * `Script::cancel_burn`' +
            ' * `Script::preburn`',
        typeArgs: ['token'],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'preburn_address', type: { type: Types.Address } },
        ],
    },
    BurnTxnFees: {
        stdlibEncodeFunction: Stdlib.encodeBurnTxnFeesScript,
        stdlibDecodeFunction: Stdlib.decodeBurnTxnFeesScript,
        codeName: 'BURN_TXN_FEES',
        description: ' # Summary' +
            ' Burns the transaction fees collected in the `CoinType` currency so that the' +
            ' Libra association may reclaim the backing coins off-chain. May only be sent' +
            ' by the Treasury Compliance account.' +
            '' +
            ' # Technical Description' +
            ' Burns the transaction fees collected in `CoinType` so that the' +
            ' association may reclaim the backing coins. Once this transaction has executed' +
            ' successfully all transaction fees that will have been collected in' +
            ' `CoinType` since the last time this script was called with that specific' +
            ' currency. Both `balance` and `preburn` fields in the' +
            ' `TransactionFee::TransactionFee<CoinType>` resource published under the `0xB1E55ED`' +
            ' account address will have a value of 0 after the successful execution of this script.' +
            '' +
            ' ## Events' +
            ' The successful execution of this transaction will emit a `Libra::BurnEvent` on the event handle' +
            " held in the `Libra::CurrencyInfo<CoinType>` resource's `burn_events` published under" +
            ' `0xA550C18`.' +
            '' +
            ' # Parameters' +
            ' | Name         | Type      | Description                                                                                                                                         |' +
            ' | ------       | ------    | -------------                                                                                                                                       |' +
            ' | `CoinType`   | Type      | The Move type for the `CoinType` being added to the sending account of the transaction. `CoinType` must be an already-registered currency on-chain. |' +
            ' | `tc_account` | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.                                           |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                          | Description                                                 |' +
            ' | ----------------           | --------------                        | -------------                                               |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE` | The sending account is not the Treasury Compliance account. |' +
            ' | `Errors::NOT_PUBLISHED`    | `TransactionFee::ETRANSACTION_FEE`    | `CoinType` is not an accepted transaction fee currency.     |' +
            ' | `Errors::INVALID_ARGUMENT` | `Libra::ECOIN`                        | The collected fees in `CoinType` are zero.                  |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::burn`' +
            ' * `Script::cancel_burn`',
        typeArgs: ['coin_type'],
        args: [],
    },
    CancelBurn: {
        stdlibEncodeFunction: Stdlib.encodeCancelBurnScript,
        stdlibDecodeFunction: Stdlib.decodeCancelBurnScript,
        codeName: 'CANCEL_BURN',
        description: ' # Summary' +
            ' Cancels and returns all coins held in the preburn area under' +
            " `preburn_address` and returns the funds to the `preburn_address`'s balance." +
            ' Can only be successfully sent by an account with Treasury Compliance role.' +
            '' +
            ' # Technical Description' +
            ' Cancels and returns all coins held in the `Libra::Preburn<Token>` resource under the `preburn_address` and' +
            " return the funds to the `preburn_address` account's `LibraAccount::Balance<Token>`." +
            ' The transaction must be sent by an `account` with a `Libra::BurnCapability<Token>`' +
            ' resource published under it. The account at `preburn_address` must have a' +
            ' `Libra::Preburn<Token>` resource published under it, and its value must be nonzero. The transaction removes' +
            " the entire balance held in the `Libra::Preburn<Token>` resource, and returns it back to the account's" +
            ' `LibraAccount::Balance<Token>` under `preburn_address`. Due to this, the account at' +
            ' `preburn_address` must already have a balance in the `Token` currency published' +
            ' before this script is called otherwise the transaction will fail.' +
            '' +
            ' ## Events' +
            ' The successful execution of this transaction will emit:' +
            ' * A `Libra::CancelBurnEvent` on the event handle held in the `Libra::CurrencyInfo<Token>`' +
            " resource's `burn_events` published under `0xA550C18`." +
            " * A `LibraAccount::ReceivedPaymentEvent` on the `preburn_address`'s" +
            ' `LibraAccount::LibraAccount` `received_events` event handle with both the `payer` and `payee`' +
            ' being `preburn_address`.' +
            '' +
            ' # Parameters' +
            ' | Name              | Type      | Description                                                                                                                          |' +
            ' | ------            | ------    | -------------                                                                                                                        |' +
            ' | `Token`           | Type      | The Move type for the `Token` currenty that burning is being cancelled for. `Token` must be an already-registered currency on-chain. |' +
            ' | `account`         | `&signer` | The signer reference of the sending account of this transaction, must have a burn capability for `Token` published under it.         |' +
            ' | `preburn_address` | `address` | The address where the coins to-be-burned are currently held.                                                                         |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category                | Error Reason                                     | Description                                                                                           |' +
            ' | ----------------              | --------------                                   | -------------                                                                                         |' +
            ' | `Errors::REQUIRES_CAPABILITY` | `Libra::EBURN_CAPABILITY`                        | The sending `account` does not have a `Libra::BurnCapability<Token>` published under it.              |' +
            ' | `Errors::NOT_PUBLISHED`       | `Libra::EPREBURN`                                | The account at `preburn_address` does not have a `Libra::Preburn<Token>` resource published under it. |' +
            ' | `Errors::NOT_PUBLISHED`       | `Libra::ECURRENCY_INFO`                          | The specified `Token` is not a registered currency on-chain.                                          |' +
            ' | `Errors::INVALID_ARGUMENT`    | `LibraAccount::ECOIN_DEPOSIT_IS_ZERO`            | The value held in the preburn resource was zero.                                                      |' +
            " | `Errors::INVALID_ARGUMENT`    | `LibraAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE` | The account at `preburn_address` doesn't have a balance resource for `Token`.                         |" +
            " | `Errors::LIMIT_EXCEEDED`      | `LibraAccount::EDEPOSIT_EXCEEDS_LIMITS`          | The depositing of the funds held in the prebun area would exceed the `account`'s account limits.      |" +
            ' | `Errors::INVALID_STATE`       | `DualAttestation::EPAYEE_COMPLIANCE_KEY_NOT_SET` | The `account` does not have a compliance key set on it but dual attestion checking was performed.     |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::burn_txn_fees`' +
            ' * `Script::burn`' +
            ' * `Script::preburn`',
        typeArgs: ['token'],
        args: [{ name: 'preburn_address', type: { type: Types.Address } }],
    },
    CreateChildVaspAccount: {
        stdlibEncodeFunction: Stdlib.encodeCreateChildVaspAccountScript,
        stdlibDecodeFunction: Stdlib.decodeCreateChildVaspAccountScript,
        codeName: 'CREATE_CHILD_VASP_ACCOUNT',
        description: ' # Summary' +
            ' Creates a Child VASP account with its parent being the sending account of the transaction.' +
            ' The sender of the transaction must be a Parent VASP account.' +
            '' +
            ' # Technical Description' +
            ' Creates a `ChildVASP` account for the sender `parent_vasp` at `child_address` with a balance of' +
            ' `child_initial_balance` in `CoinType` and an initial authentication key of' +
            ' `auth_key_prefix | child_address`.' +
            '' +
            ' If `add_all_currencies` is true, the child address will have a zero balance in all available' +
            ' currencies in the system.' +
            '' +
            ' The new account will be a child account of the transaction sender, which must be a' +
            ' Parent VASP account. The child account will be recorded against the limit of' +
            ' child accounts of the creating Parent VASP account.' +
            '' +
            ' ## Events' +
            ' Successful execution with a `child_initial_balance` greater than zero will emit:' +
            " * A `LibraAccount::SentPaymentEvent` with the `payer` field being the Parent VASP's address," +
            " and payee field being `child_address`. This is emitted on the Parent VASP's" +
            ' `LibraAccount::LibraAccount` `sent_events` handle.' +
            " * A `LibraAccount::ReceivedPaymentEvent` with the  `payer` field being the Parent VASP's address," +
            " and payee field being `child_address`. This is emitted on the new Child VASPS's" +
            ' `LibraAccount::LibraAccount` `received_events` handle.' +
            '' +
            ' # Parameters' +
            ' | Name                    | Type         | Description                                                                                                                                 |' +
            ' | ------                  | ------       | -------------                                                                                                                               |' +
            ' | `CoinType`              | Type         | The Move type for the `CoinType` that the child account should be created with. `CoinType` must be an already-registered currency on-chain. |' +
            ' | `parent_vasp`           | `&signer`    | The signer reference of the sending account. Must be a Parent VASP account.                                                                 |' +
            ' | `child_address`         | `address`    | Address of the to-be-created Child VASP account.                                                                                            |' +
            ' | `auth_key_prefix`       | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                    |' +
            ' | `add_all_currencies`    | `bool`       | Whether to publish balance resources for all known currencies when the account is created.                                                  |' +
            " | `child_initial_balance` | `u64`        | The initial balance in `CoinType` to give the child account when it's created.                                                              |" +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category              | Error Reason                                             | Description                                                                              |' +
            ' | ----------------            | --------------                                           | -------------                                                                            |' +
            ' | `Errors::INVALID_ARGUMENT`  | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY`            | The `auth_key_prefix` was not of length 32.                                              |' +
            " | `Errors::REQUIRES_ROLE`     | `Roles::EPARENT_VASP`                                    | The sending account wasn't a Parent VASP account.                                        |" +
            ' | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                                        | The `child_address` address is already taken.                                            |' +
            ' | `Errors::LIMIT_EXCEEDED`    | `VASP::ETOO_MANY_CHILDREN`                               | The sending account has reached the maximum number of allowed child accounts.            |' +
            ' | `Errors::NOT_PUBLISHED`     | `Libra::ECURRENCY_INFO`                                  | The `CoinType` is not a registered currency on-chain.                                    |' +
            ' | `Errors::INVALID_STATE`     | `LibraAccount::EWITHDRAWAL_CAPABILITY_ALREADY_EXTRACTED` | The withdrawal capability for the sending account has already been extracted.            |' +
            " | `Errors::NOT_PUBLISHED`     | `LibraAccount::EPAYER_DOESNT_HOLD_CURRENCY`              | The sending account doesn't have a balance in `CoinType`.                                |" +
            " | `Errors::LIMIT_EXCEEDED`    | `LibraAccount::EINSUFFICIENT_BALANCE`                    | The sending account doesn't have at least `child_initial_balance` of `CoinType` balance. |" +
            ' | `Errors::INVALID_ARGUMENT`  | `LibraAccount::ECANNOT_CREATE_AT_VM_RESERVED`            | The `child_address` is the reserved address 0x0.                                         |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_parent_vasp_account`' +
            ' * `Script::add_currency_to_account`' +
            ' * `Script::rotate_authentication_key`' +
            ' * `Script::add_recovery_rotation_capability`' +
            ' * `Script::create_recovery_address`',
        typeArgs: ['coin_type'],
        args: [
            { name: 'child_address', type: { type: Types.Address } },
            {
                name: 'auth_key_prefix',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            { name: 'add_all_currencies', type: { type: Types.Boolean } },
            { name: 'child_initial_balance', type: { type: Types.U64 } },
        ],
    },
    CreateDesignatedDealer: {
        stdlibEncodeFunction: Stdlib.encodeCreateDesignatedDealerScript,
        stdlibDecodeFunction: Stdlib.decodeCreateDesignatedDealerScript,
        codeName: 'CREATE_DESIGNATED_DEALER',
        description: ' # Summary' +
            ' Creates a Designated Dealer account with the provided information, and initializes it with' +
            ' default mint tiers. The transaction can only be sent by the Treasury Compliance account.' +
            '' +
            ' # Technical Description' +
            ' Creates an account with the Designated Dealer role at `addr` with authentication key' +
            ' `auth_key_prefix` | `addr` and a 0 balance of type `Types`. If `add_all_currencies` is true,' +
            ' 0 balances for all available currencies in the system will also be added. This can only be' +
            ' invoked by an account with the TreasuryCompliance role.' +
            '' +
            ' At the time of creation the account is also initialized with default mint tiers of (500_000,' +
            ' 5000_000, 50_000_000, 500_000_000), and preburn areas for each currency that is added to the' +
            ' account.' +
            '' +
            ' # Parameters' +
            ' | Name                 | Type         | Description                                                                                                                                         |' +
            ' | ------               | ------       | -------------                                                                                                                                       |' +
            ' | `Types`           | Type         | The Move type for the `Types` that the Designated Dealer should be initialized with. `Types` must be an already-registered currency on-chain. |' +
            ' | `tc_account`         | `&signer`    | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.                                           |' +
            ' | `sliding_nonce`      | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                                          |' +
            ' | `addr`               | `address`    | Address of the to-be-created Designated Dealer account.                                                                                             |' +
            ' | `auth_key_prefix`    | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                            |' +
            ' | `human_name`         | `vector<u8>` | ASCII-encoded human name for the Designated Dealer.                                                                                                 |' +
            ' | `add_all_currencies` | `bool`       | Whether to publish preburn, balance, and tier info resources for all known (SCS) currencies or just `Types` when the account is created.         |' +
            '' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category              | Error Reason                            | Description                                                                                |' +
            ' | ----------------            | --------------                          | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |' +
            " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |' +
            ' | `Errors::REQUIRES_ROLE`     | `Roles::ETREASURY_COMPLIANCE`           | The sending account is not the Treasury Compliance account.                                |' +
            ' | `Errors::NOT_PUBLISHED`     | `Libra::ECURRENCY_INFO`                 | The `Types` is not a registered currency on-chain.                                      |' +
            ' | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `addr` address is already taken.                                                       |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::tiered_mint`' +
            ' * `Script::peer_to_peer_with_metadata`' +
            ' * `Script::rotate_dual_attestation_info`',
        typeArgs: ['currency'],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'addr', type: { type: Types.Address } },
            {
                name: 'auth_key_prefix',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'human_name',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            { name: 'add_all_currencies', type: { type: Types.Boolean } },
        ],
    },
    CreateParentVaspAccount: {
        stdlibEncodeFunction: Stdlib.encodeCreateParentVaspAccountScript,
        stdlibDecodeFunction: Stdlib.decodeCreateParentVaspAccountScript,
        codeName: 'CREATE_PARENT_VASP_ACCOUNT',
        description: ' # Summary' +
            ' Creates a Parent VASP account with the specified human name. Must be called by the Treasury Compliance account.' +
            '' +
            ' # Technical Description' +
            ' Creates an account with the Parent VASP role at `address` with authentication key' +
            ' `auth_key_prefix` | `new_account_address` and a 0 balance of type `CoinType`. If' +
            ' `add_all_currencies` is true, 0 balances for all available currencies in the system will' +
            ' also be added. This can only be invoked by an TreasuryCompliance account.' +
            ' `sliding_nonce` is a unique nonce for operation, see `SlidingNonce` for details.' +
            '' +
            ' # Parameters' +
            ' | Name                  | Type         | Description                                                                                                                                                    |' +
            ' | ------                | ------       | -------------                                                                                                                                                  |' +
            ' | `CoinType`            | Type         | The Move type for the `CoinType` currency that the Parent VASP account should be initialized with. `CoinType` must be an already-registered currency on-chain. |' +
            ' | `tc_account`          | `&signer`    | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.                                                      |' +
            ' | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                                                     |' +
            ' | `new_account_address` | `address`    | Address of the to-be-created Parent VASP account.                                                                                                              |' +
            ' | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                                       |' +
            ' | `human_name`          | `vector<u8>` | ASCII-encoded human name for the Parent VASP.                                                                                                                  |' +
            ' | `add_all_currencies`  | `bool`       | Whether to publish balance resources for all known currencies when the account is created.                                                                     |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category              | Error Reason                            | Description                                                                                |' +
            ' | ----------------            | --------------                          | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |' +
            " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |' +
            ' | `Errors::REQUIRES_ROLE`     | `Roles::ETREASURY_COMPLIANCE`           | The sending account is not the Treasury Compliance account.                                |' +
            ' | `Errors::NOT_PUBLISHED`     | `Libra::ECURRENCY_INFO`                 | The `CoinType` is not a registered currency on-chain.                                      |' +
            ' | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_child_vasp_account`' +
            ' * `Script::add_currency_to_account`' +
            ' * `Script::rotate_authentication_key`' +
            ' * `Script::add_recovery_rotation_capability`' +
            ' * `Script::create_recovery_address`' +
            ' * `Script::rotate_dual_attestation_info`',
        typeArgs: ['coin_type'],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'new_account_address', type: { type: Types.Address } },
            {
                name: 'auth_key_prefix',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'human_name',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            { name: 'add_all_currencies', type: { type: Types.Boolean } },
        ],
    },
    CreateRecoveryAddress: {
        stdlibEncodeFunction: Stdlib.encodeCreateRecoveryAddressScript,
        stdlibDecodeFunction: Stdlib.decodeCreateRecoveryAddressScript,
        codeName: 'CREATE_RECOVERY_ADDRESS',
        description: ' # Summary' +
            ' Initializes the sending account as a recovery address that may be used by' +
            ' the VASP that it belongs to. The sending account must be a VASP account.' +
            ' Multiple recovery addresses can exist for a single VASP, but accounts in' +
            ' each must be disjoint.' +
            '' +
            ' # Technical Description' +
            ' Publishes a `RecoveryAddress::RecoveryAddress` resource under `account`. It then' +
            ' extracts the `LibraAccount::KeyRotationCapability` for `account` and adds' +
            ' it to the resource. After the successful execution of this transaction' +
            ' other accounts may add their key rotation to this resource so that `account`' +
            ' may be used as a recovery account for those accounts.' +
            '' +
            ' # Parameters' +
            ' | Name      | Type      | Description                                           |' +
            ' | ------    | ------    | -------------                                         |' +
            ' | `account` | `&signer` | The signer of the sending account of the transaction. |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category              | Error Reason                                               | Description                                                                                   |' +
            ' | ----------------            | --------------                                             | -------------                                                                                 |' +
            ' | `Errors::INVALID_STATE`     | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`.          |' +
            ' | `Errors::INVALID_ARGUMENT`  | `RecoveryAddress::ENOT_A_VASP`                             | `account` is not a VASP account.                                                              |' +
            " | `Errors::INVALID_ARGUMENT`  | `RecoveryAddress::EKEY_ROTATION_DEPENDENCY_CYCLE`          | A key rotation recovery cycle would be created by adding `account`'s key rotation capability. |" +
            ' | `Errors::ALREADY_PUBLISHED` | `RecoveryAddress::ERECOVERY_ADDRESS`                       | A `RecoveryAddress::RecoveryAddress` resource has already been published under `account`.     |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::add_recovery_rotation_capability`' +
            ' * `Script::rotate_authentication_key_with_recovery_address`',
        typeArgs: [],
        args: [],
    },
    CreateValidatorAccount: {
        stdlibEncodeFunction: Stdlib.encodeCreateValidatorAccountScript,
        stdlibDecodeFunction: Stdlib.decodeCreateValidatorAccountScript,
        codeName: 'CREATE_VALIDATOR_ACCOUNT',
        description: ' # Summary' +
            ' Creates a Validator account. This transaction can only be sent by the Libra' +
            ' Root account.' +
            '' +
            ' # Technical Description' +
            ' Creates an account with a Validator role at `new_account_address`, with authentication key' +
            ' `auth_key_prefix` | `new_account_address`. It publishes a' +
            ' `ValidatorConfig::ValidatorConfig` resource with empty `config`, and' +
            ' `operator_account` fields. The `human_name` field of the' +
            ' `ValidatorConfig::ValidatorConfig` is set to the passed in `human_name`.' +
            ' This script does not add the validator to the validator set or the system,' +
            ' but only creates the account.' +
            '' +
            ' # Parameters' +
            ' | Name                  | Type         | Description                                                                                     |' +
            ' | ------                | ------       | -------------                                                                                   |' +
            ' | `lr_account`          | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer. |' +
            ' | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |' +
            ' | `new_account_address` | `address`    | Address of the to-be-created Validator account.                                                 |' +
            ' | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.        |' +
            ' | `human_name`          | `vector<u8>` | ASCII-encoded human name for the validator.                                                     |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category              | Error Reason                            | Description                                                                                |' +
            ' | ----------------            | --------------                          | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `lr_account`.                             |' +
            " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ELIBRA_ROOT`            | The sending account is not the Libra Root account.                                         |' +
            ' | `Errors::REQUIRES_ROLE`     | `Roles::ELIBRA_ROOT`                    | The sending account is not the Libra Root account.                                         |' +
            ' | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::add_validator_and_reconfigure`' +
            ' * `Script::create_validator_operator_account`' +
            ' * `Script::register_validator_config`' +
            ' * `Script::remove_validator_and_reconfigure`' +
            ' * `Script::set_validator_operator`' +
            ' * `Script::set_validator_operator_with_nonce_admin`' +
            ' * `Script::set_validator_config_and_reconfigure`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'new_account_address', type: { type: Types.Address } },
            {
                name: 'auth_key_prefix',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'human_name',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    CreateValidatorOperatorAccount: {
        stdlibEncodeFunction: Stdlib.encodeCreateValidatorOperatorAccountScript,
        stdlibDecodeFunction: Stdlib.decodeCreateValidatorOperatorAccountScript,
        codeName: 'CREATE_VALIDATOR_OPERATOR_ACCOUNT',
        description: ' # Summary' +
            ' Creates a Validator Operator account. This transaction can only be sent by the Libra' +
            ' Root account.' +
            '' +
            ' # Technical Description' +
            ' Creates an account with a Validator Operator role at `new_account_address`, with authentication key' +
            ' `auth_key_prefix` | `new_account_address`. It publishes a' +
            ' `ValidatorOperatorConfig::ValidatorOperatorConfig` resource with the specified `human_name`.' +
            ' This script does not assign the validator operator to any validator accounts but only creates the account.' +
            '' +
            ' # Parameters' +
            ' | Name                  | Type         | Description                                                                                     |' +
            ' | ------                | ------       | -------------                                                                                   |' +
            ' | `lr_account`          | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer. |' +
            ' | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |' +
            ' | `new_account_address` | `address`    | Address of the to-be-created Validator account.                                                 |' +
            ' | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.        |' +
            ' | `human_name`          | `vector<u8>` | ASCII-encoded human name for the validator.                                                     |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category              | Error Reason                            | Description                                                                                |' +
            ' | ----------------            | --------------                          | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `lr_account`.                             |' +
            " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ELIBRA_ROOT`            | The sending account is not the Libra Root account.                                         |' +
            ' | `Errors::REQUIRES_ROLE`     | `Roles::ELIBRA_ROOT`                    | The sending account is not the Libra Root account.                                         |' +
            ' | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_validator_account`' +
            ' * `Script::add_validator_and_reconfigure`' +
            ' * `Script::register_validator_config`' +
            ' * `Script::remove_validator_and_reconfigure`' +
            ' * `Script::set_validator_operator`' +
            ' * `Script::set_validator_operator_with_nonce_admin`' +
            ' * `Script::set_validator_config_and_reconfigure`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'new_account_address', type: { type: Types.Address } },
            {
                name: 'auth_key_prefix',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'human_name',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    FreezeAccount: {
        stdlibEncodeFunction: Stdlib.encodeFreezeAccountScript,
        stdlibDecodeFunction: Stdlib.decodeFreezeAccountScript,
        codeName: 'FREEZE_ACCOUNT',
        description: ' # Summary' +
            ' Freezes the account at `address`. The sending account of this transaction' +
            ' must be the Treasury Compliance account. The account being frozen cannot be' +
            ' the Libra Root or Treasury Compliance account. After the successful' +
            ' execution of this transaction no transactions may be sent from the frozen' +
            ' account, and the frozen account may not send or receive coins.' +
            '' +
            ' # Technical Description' +
            ' Sets the `AccountFreezing::FreezingBit` to `true` and emits a' +
            ' `AccountFreezing::FreezeAccountEvent`. The transaction sender must be the' +
            ' Treasury Compliance account, but the account at `to_freeze_account` must' +
            ' not be either `0xA550C18` (the Libra Root address), or `0xB1E55ED` (the' +
            ' Treasury Compliance address). Note that this is a per-account property' +
            ' e.g., freezing a Parent VASP will not effect the status any of its child' +
            ' accounts and vice versa.' +
            '' +
            '' +
            ' ## Events' +
            ' Successful execution of this transaction will emit a `AccountFreezing::FreezeAccountEvent` on' +
            ' the `freeze_event_handle` held in the `AccountFreezing::FreezeEventsHolder` resource published' +
            ' under `0xA550C18` with the `frozen_address` being the `to_freeze_account`.' +
            '' +
            ' # Parameters' +
            ' | Name                | Type      | Description                                                                                               |' +
            ' | ------              | ------    | -------------                                                                                             |' +
            ' | `tc_account`        | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account. |' +
            ' | `sliding_nonce`     | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                |' +
            ' | `to_freeze_account` | `address` | The account address to be frozen.                                                                         |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                 | Description                                                                                |' +
            ' | ----------------           | --------------                               | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `tc_account`.                             |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`        | The sending account is not the Treasury Compliance account.                                |' +
            ' | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`                | The sending account is not the Treasury Compliance account.                                |' +
            ' | `Errors::INVALID_ARGUMENT` | `AccountFreezing::ECANNOT_FREEZE_TC`         | `to_freeze_account` was the Treasury Compliance account (`0xB1E55ED`).                     |' +
            ' | `Errors::INVALID_ARGUMENT` | `AccountFreezing::ECANNOT_FREEZE_LIBRA_ROOT` | `to_freeze_account` was the Libra Root account (`0xA550C18`).                              |' +
            '' +
            ' # Related Scripts' +
            ' * `Scripts::unfreeze_account`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'to_freeze_account', type: { type: Types.Address } },
        ],
    },
    PeerToPeerWithMetadata: {
        stdlibEncodeFunction: Stdlib.encodePeerToPeerWithMetadataScript,
        stdlibDecodeFunction: Stdlib.decodePeerToPeerWithMetadataScript,
        codeName: 'PEER_TO_PEER_WITH_METADATA',
        description: ' # Summary' +
            ' Transfers a given number of coins in a specified currency from one account to another.' +
            ' Transfers over a specified amount defined on-chain that are between two different VASPs, or' +
            ' other accounts that have opted-in will be subject to on-chain checks to ensure the receiver has' +
            ' agreed to receive the coins.  This transaction can be sent by any account that can hold a' +
            ' balance, and to any account that can hold a balance. Both accounts must hold balances in the' +
            ' currency being transacted.' +
            '' +
            ' # Technical Description' +
            '' +
            ' Transfers `amount` coins of type `Types` from `payer` to `payee` with (optional) associated' +
            ' `metadata` and an (optional) `metadata_signature` on the message' +
            ' `metadata` | `Signer::address_of(payer)` | `amount` | `DualAttestation::DOMAIN_SEPARATOR`.' +
            ' The `metadata` and `metadata_signature` parameters are only required if `amount` >=' +
            ' `DualAttestation::get_cur_microlibra_limit` LBR and `payer` and `payee` are distinct VASPs.' +
            ' However, a transaction sender can opt in to dual attestation even when it is not required' +
            ' (e.g., a DesignatedDealer -> VASP payment) by providing a non-empty `metadata_signature`.' +
            ' Standardized `metadata` LCS format can be found in `libra_types::transaction::metadata::Metadata`.' +
            '' +
            ' ## Events' +
            ' Successful execution of this script emits two events:' +
            " * A `LibraAccount::SentPaymentEvent` on `payer`'s `LibraAccount::LibraAccount` `sent_events` handle; and" +
            " * A `LibraAccount::ReceivedPaymentEvent` on `payee`'s `LibraAccount::LibraAccount` `received_events` handle." +
            '' +
            ' # Parameters' +
            ' | Name                 | Type         | Description                                                                                                                  |' +
            ' | ------               | ------       | -------------                                                                                                                |' +
            ' | `Types`           | Type         | The Move type for the `Types` being sent in this transaction. `Types` must be an already-registered currency on-chain. |' +
            ' | `payer`              | `&signer`    | The signer reference of the sending account that coins are being transferred from.                                           |' +
            ' | `payee`              | `address`    | The address of the account the coins are being transferred to.                                                               |' +
            ' | `metadata`           | `vector<u8>` | Optional metadata about this payment.                                                                                        |' +
            ' | `metadata_signature` | `vector<u8>` | Optional signature over `metadata` and payment information. See                                                              |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                     | Description                                                                                                                         |' +
            ' | ----------------           | --------------                                   | -------------                                                                                                                       |' +
            " | `Errors::NOT_PUBLISHED`    | `LibraAccount::EPAYER_DOESNT_HOLD_CURRENCY`      | `payer` doesn't hold a balance in `Types`.                                                                                       |" +
            " | `Errors::LIMIT_EXCEEDED`   | `LibraAccount::EINSUFFICIENT_BALANCE`            | `amount` is greater than `payer`'s balance in `Types`.                                                                           |" +
            ' | `Errors::INVALID_ARGUMENT` | `LibraAccount::ECOIN_DEPOSIT_IS_ZERO`            | `amount` is zero.                                                                                                                   |' +
            ' | `Errors::NOT_PUBLISHED`    | `LibraAccount::EPAYEE_DOES_NOT_EXIST`            | No account exists at the `payee` address.                                                                                           |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE` | An account exists at `payee`, but it does not accept payments in `Types`.                                                        |' +
            ' | `Errors::INVALID_STATE`    | `AccountFreezing::EACCOUNT_FROZEN`               | The `payee` account is frozen.                                                                                                      |' +
            ' | `Errors::INVALID_ARGUMENT` | `DualAttestation::EMALFORMED_METADATA_SIGNATURE` | `metadata_signature` is not 64 bytes.                                                                                               |' +
            " | `Errors::INVALID_ARGUMENT` | `DualAttestation::EINVALID_METADATA_SIGNATURE`   | `metadata_signature` does not verify on the against the `payee'`s `DualAttestation::Credential` `compliance_public_key` public key. |" +
            ' | `Errors::LIMIT_EXCEEDED`   | `LibraAccount::EWITHDRAWAL_EXCEEDS_LIMITS`       | `payer` has exceeded its daily withdrawal limits for the backing coins of LBR.                                                      |' +
            ' | `Errors::LIMIT_EXCEEDED`   | `LibraAccount::EDEPOSIT_EXCEEDS_LIMITS`          | `payee` has exceeded its daily deposit limits for LBR.                                                                              |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_child_vasp_account`' +
            ' * `Script::create_parent_vasp_account`' +
            ' * `Script::add_currency_to_account`',
        typeArgs: ['currency'],
        args: [
            { name: 'payee', type: { type: Types.Address } },
            { name: 'amount', type: { type: Types.U64 } },
            {
                name: 'metadata',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'metadata_signature',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    Preburn: {
        stdlibEncodeFunction: Stdlib.encodePreburnScript,
        stdlibDecodeFunction: Stdlib.decodePreburnScript,
        codeName: 'PREBURN',
        description: ' # Summary' +
            " Moves a specified number of coins in a given currency from the account's" +
            ' balance to its preburn area after which the coins may be burned. This' +
            ' transaction may be sent by any account that holds a balance and preburn area' +
            ' in the specified currency.' +
            '' +
            ' # Technical Description' +
            " Moves the specified `amount` of coins in `Token` currency from the sending `account`'s" +
            ' `LibraAccount::Balance<Token>` to the `Libra::Preburn<Token>` published under the same' +
            ' `account`. `account` must have both of these resources published under it at the start of this' +
            ' transaction in order for it to execute successfully.' +
            '' +
            ' ## Events' +
            ' Successful execution of this script emits two events:' +
            " * `LibraAccount::SentPaymentEvent ` on `account`'s `LibraAccount::LibraAccount` `sent_events`" +
            " handle with the `payee` and `payer` fields being `account`'s address; and" +
            " * A `Libra::PreburnEvent` with `Token`'s currency code on the" +
            " `Libra::CurrencyInfo<Token`'s `preburn_events` handle for `Token` and with" +
            " `preburn_address` set to `account`'s address." +
            '' +
            ' # Parameters' +
            ' | Name      | Type      | Description                                                                                                                      |' +
            ' | ------    | ------    | -------------                                                                                                                    |' +
            ' | `Token`   | Type      | The Move type for the `Token` currency being moved to the preburn area. `Token` must be an already-registered currency on-chain. |' +
            ' | `account` | `&signer` | The signer reference of the sending account.                                                                                     |' +
            ' | `amount`  | `u64`     | The amount in `Token` to be moved to the preburn area.                                                                           |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category           | Error Reason                                             | Description                                                                             |' +
            ' | ----------------         | --------------                                           | -------------                                                                           |' +
            ' | `Errors::NOT_PUBLISHED`  | `Libra::ECURRENCY_INFO`                                  | The `Token` is not a registered currency on-chain.                                      |' +
            ' | `Errors::INVALID_STATE`  | `LibraAccount::EWITHDRAWAL_CAPABILITY_ALREADY_EXTRACTED` | The withdrawal capability for `account` has already been extracted.                     |' +
            " | `Errors::LIMIT_EXCEEDED` | `LibraAccount::EINSUFFICIENT_BALANCE`                    | `amount` is greater than `payer`'s balance in `Token`.                                  |" +
            " | `Errors::NOT_PUBLISHED`  | `LibraAccount::EPAYER_DOESNT_HOLD_CURRENCY`              | `account` doesn't hold a balance in `Token`.                                            |" +
            " | `Errors::NOT_PUBLISHED`  | `Libra::EPREBURN`                                        | `account` doesn't have a `Libra::Preburn<Token>` resource published under it.           |" +
            ' | `Errors::INVALID_STATE`  | `Libra::EPREBURN_OCCUPIED`                               | The `value` field in the `Libra::Preburn<Token>` resource under the sender is non-zero. |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::cancel_burn`' +
            ' * `Script::burn`' +
            ' * `Script::burn_txn_fees`',
        typeArgs: ['token'],
        args: [{ name: 'amount', type: { type: Types.U64 } }],
    },
    PublishSharedEd25519PublicKey: {
        stdlibEncodeFunction: Stdlib.encodePublishSharedEd25519PublicKeyScript,
        stdlibDecodeFunction: Stdlib.decodePublishSharedEd25519PublicKeyScript,
        codeName: 'PUBLISH_SHARED_ED25519_PUBLIC_KEY',
        description: ' # Summary' +
            ' Rotates the authentication key of the sending account to the' +
            ' newly-specified public key and publishes a new shared authentication key' +
            " under the sender's account. Any account can send this transaction." +
            '' +
            ' # Technical Description' +
            ' Rotates the authentication key of the sending account to `public_key`,' +
            ' and publishes a `SharedEd25519PublicKey::SharedEd25519PublicKey` resource' +
            ' containing the 32-byte ed25519 `public_key` and the `LibraAccount::KeyRotationCapability` for' +
            ' `account` under `account`.' +
            '' +
            ' # Parameters' +
            ' | Name         | Type         | Description                                                                               |' +
            ' | ------       | ------       | -------------                                                                             |' +
            ' | `account`    | `&signer`    | The signer reference of the sending account of the transaction.                           |' +
            " | `public_key` | `vector<u8>` | 32-byte Ed25519 public key for `account`' authentication key to be rotated to and stored. |" +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category              | Error Reason                                               | Description                                                                                         |' +
            ' | ----------------            | --------------                                             | -------------                                                                                       |' +
            ' | `Errors::INVALID_STATE`     | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability` resource.       |' +
            ' | `Errors::ALREADY_PUBLISHED` | `SharedEd25519PublicKey::ESHARED_KEY`                      | The `SharedEd25519PublicKey::SharedEd25519PublicKey` resource is already published under `account`. |' +
            ' | `Errors::INVALID_ARGUMENT`  | `SharedEd25519PublicKey::EMALFORMED_PUBLIC_KEY`            | `public_key` is an invalid ed25519 public key.                                                      |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::rotate_shared_ed25519_public_key`',
        typeArgs: [],
        args: [
            {
                name: 'public_key',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    RegisterValidatorConfig: {
        stdlibEncodeFunction: Stdlib.encodeRegisterValidatorConfigScript,
        stdlibDecodeFunction: Stdlib.decodeRegisterValidatorConfigScript,
        codeName: 'REGISTER_VALIDATOR_CONFIG',
        description: ' # Summary' +
            " Updates a validator's configuration. This does not reconfigure the system and will not update" +
            ' the configuration in the validator set that is seen by other validators in the network. Can' +
            ' only be successfully sent by a Validator Operator account that is already registered with a' +
            ' validator.' +
            '' +
            ' # Technical Description' +
            ' This updates the fields with corresponding names held in the `ValidatorConfig::ValidatorConfig`' +
            ' config resource held under `validator_account`. It does not emit a `LibraConfig::NewEpochEvent`' +
            ' so the copy of this config held in the validator set will not be updated, and the changes are' +
            ' only "locally" under the `validator_account` account address.' +
            '' +
            ' # Parameters' +
            ' | Name                          | Type         | Description                                                                                                                  |' +
            ' | ------                        | ------       | -------------                                                                                                                |' +
            ' | `validator_operator_account`  | `&signer`    | Signer reference of the sending account. Must be the registered validator operator for the validator at `validator_address`. |' +
            " | `validator_account`           | `address`    | The address of the validator's `ValidatorConfig::ValidatorConfig` resource being updated.                                    |" +
            ' | `consensus_pubkey`            | `vector<u8>` | New Ed25519 public key to be used in the updated `ValidatorConfig::ValidatorConfig`.                                         |' +
            ' | `validator_network_addresses` | `vector<u8>` | New set of `validator_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.                       |' +
            ' | `fullnode_network_addresses`  | `vector<u8>` | New set of `fullnode_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.                        |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                   | Description                                                                                           |' +
            ' | ----------------           | --------------                                 | -------------                                                                                         |' +
            ' | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`           | `validator_address` does not have a `ValidatorConfig::ValidatorConfig` resource published under it.   |' +
            ' | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_TRANSACTION_SENDER` | `validator_operator_account` is not the registered operator for the validator at `validator_address`. |' +
            ' | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_CONSENSUS_KEY`      | `consensus_pubkey` is not a valid ed25519 public key.                                                 |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_validator_account`' +
            ' * `Script::create_validator_operator_account`' +
            ' * `Script::add_validator_and_reconfigure`' +
            ' * `Script::remove_validator_and_reconfigure`' +
            ' * `Script::set_validator_operator`' +
            ' * `Script::set_validator_operator_with_nonce_admin`' +
            ' * `Script::set_validator_config_and_reconfigure`',
        typeArgs: [],
        args: [
            { name: 'validator_account', type: { type: Types.Address } },
            {
                name: 'consensus_pubkey',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'validator_network_addresses',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'fullnode_network_addresses',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    RemoveValidatorAndReconfigure: {
        stdlibEncodeFunction: Stdlib.encodeRemoveValidatorAndReconfigureScript,
        stdlibDecodeFunction: Stdlib.decodeRemoveValidatorAndReconfigureScript,
        codeName: 'REMOVE_VALIDATOR_AND_RECONFIGURE',
        description: ' # Summary' +
            ' This script removes a validator account from the validator set, and triggers a reconfiguration' +
            ' of the system to remove the validator from the system. This transaction can only be' +
            ' successfully called by the Libra Root account.' +
            '' +
            ' # Technical Description' +
            ' This script removes the account at `validator_address` from the validator set. This transaction' +
            ' emits a `LibraConfig::NewEpochEvent` event. Once the reconfiguration triggered by this event' +
            ' has been performed, the account at `validator_address` is no longer considered to be a' +
            ' validator in the network. This transaction will fail if the validator at `validator_address`' +
            ' is not in the validator set.' +
            '' +
            ' # Parameters' +
            ' | Name                | Type         | Description                                                                                                                        |' +
            ' | ------              | ------       | -------------                                                                                                                      |' +
            ' | `lr_account`        | `&signer`    | The signer reference of the sending account of this transaction. Must be the Libra Root signer.                                    |' +
            ' | `sliding_nonce`     | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                         |' +
            ' | `validator_name`    | `vector<u8>` | ASCII-encoded human name for the validator. Must match the human name in the `ValidatorConfig::ValidatorConfig` for the validator. |' +
            ' | `validator_address` | `address`    | The validator account address to be removed from the validator set.                                                                |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                            | Description                                                                                     |' +
            ' | ----------------           | --------------                          | -------------                                                                                   |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `lr_account`.                                  |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.      |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                                   |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                               |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | The sending account is not the Libra Root account or Treasury Compliance account                |' +
            ' | 0                          | 0                                       | The provided `validator_name` does not match the already-recorded human name for the validator. |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraSystem::ENOT_AN_ACTIVE_VALIDATOR` | The validator to be removed is not in the validator set.                                        |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ELIBRA_ROOT`            | The sending account is not the Libra Root account.                                              |' +
            ' | `Errors::REQUIRES_ROLE`    | `Roles::ELIBRA_ROOT`                    | The sending account is not the Libra Root account.                                              |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_validator_account`' +
            ' * `Script::create_validator_operator_account`' +
            ' * `Script::register_validator_config`' +
            ' * `Script::add_validator_and_reconfigure`' +
            ' * `Script::set_validator_operator`' +
            ' * `Script::set_validator_operator_with_nonce_admin`' +
            ' * `Script::set_validator_config_and_reconfigure`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            {
                name: 'validator_name',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            { name: 'validator_address', type: { type: Types.Address } },
        ],
    },
    RotateAuthenticationKey: {
        stdlibEncodeFunction: Stdlib.encodeRotateAuthenticationKeyScript,
        stdlibDecodeFunction: Stdlib.decodeRotateAuthenticationKeyScript,
        codeName: 'ROTATE_AUTHENTICATION_KEY',
        description: ' # Summary' +
            " Rotates the transaction sender's authentication key to the supplied new authentication key. May" +
            ' be sent by any account.' +
            '' +
            ' # Technical Description' +
            " Rotate the `account`'s `LibraAccount::LibraAccount` `authentication_key` field to `new_key`." +
            ' `new_key` must be a valid ed25519 public key, and `account` must not have previously delegated' +
            ' its `LibraAccount::KeyRotationCapability`.' +
            '' +
            ' # Parameters' +
            ' | Name      | Type         | Description                                                 |' +
            ' | ------    | ------       | -------------                                               |' +
            ' | `account` | `&signer`    | Signer reference of the sending account of the transaction. |' +
            ' | `new_key` | `vector<u8>` | New ed25519 public key to be used for `account`.            |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                               | Description                                                                              |' +
            ' | ----------------           | --------------                                             | -------------                                                                            |' +
            ' | `Errors::INVALID_STATE`    | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`.     |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                         |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::rotate_authentication_key_with_nonce`' +
            ' * `Script::rotate_authentication_key_with_nonce_admin`' +
            ' * `Script::rotate_authentication_key_with_recovery_address`',
        typeArgs: [],
        args: [
            {
                name: 'new_key',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    RotateAuthenticationKeyWithNonce: {
        stdlibEncodeFunction: Stdlib.encodeRotateAuthenticationKeyWithNonceScript,
        stdlibDecodeFunction: Stdlib.decodeRotateAuthenticationKeyWithNonceScript,
        codeName: 'ROTATE_AUTHENTICATION_KEY_WITH_NONCE',
        description: ' # Summary' +
            " Rotates the sender's authentication key to the supplied new authentication key. May be sent by" +
            ' any account that has a sliding nonce resource published under it (usually this is Treasury' +
            ' Compliance or Libra Root accounts).' +
            '' +
            ' # Technical Description' +
            " Rotates the `account`'s `LibraAccount::LibraAccount` `authentication_key` field to `new_key`." +
            ' `new_key` must be a valid ed25519 public key, and `account` must not have previously delegated' +
            ' its `LibraAccount::KeyRotationCapability`.' +
            '' +
            ' # Parameters' +
            ' | Name            | Type         | Description                                                                |' +
            ' | ------          | ------       | -------------                                                              |' +
            ' | `account`       | `&signer`    | Signer reference of the sending account of the transaction.                |' +
            ' | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |' +
            ' | `new_key`       | `vector<u8>` | New ed25519 public key to be used for `account`.                           |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                               | Description                                                                                |' +
            ' | ----------------           | --------------                                             | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                             | A `SlidingNonce` resource is not published under `account`.                                |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                             | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                             | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                    | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::INVALID_STATE`    | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`.       |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                           |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::rotate_authentication_key`' +
            ' * `Script::rotate_authentication_key_with_nonce_admin`' +
            ' * `Script::rotate_authentication_key_with_recovery_address`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            {
                name: 'new_key',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    RotateAuthenticationKeyWithNonceAdmin: {
        stdlibEncodeFunction: Stdlib.encodeRotateAuthenticationKeyWithNonceAdminScript,
        stdlibDecodeFunction: Stdlib.decodeRotateAuthenticationKeyWithNonceAdminScript,
        codeName: 'ROTATE_AUTHENTICATION_KEY_WITH_NONCE_ADMIN',
        description: ' # Summary' +
            " Rotates the specified account's authentication key to the supplied new authentication key. May" +
            ' only be sent by the Libra Root account as a write set transaction.' +
            '' +
            ' # Technical Description' +
            " Rotate the `account`'s `LibraAccount::LibraAccount` `authentication_key` field to `new_key`." +
            ' `new_key` must be a valid ed25519 public key, and `account` must not have previously delegated' +
            ' its `LibraAccount::KeyRotationCapability`.' +
            '' +
            ' # Parameters' +
            ' | Name            | Type         | Description                                                                                                  |' +
            ' | ------          | ------       | -------------                                                                                                |' +
            ' | `lr_account`    | `&signer`    | The signer reference of the sending account of the write set transaction. May only be the Libra Root signer. |' +
            ' | `account`       | `&signer`    | Signer reference of account specified in the `execute_as` field of the write set transaction.                |' +
            ' | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction for Libra Root.                    |' +
            ' | `new_key`       | `vector<u8>` | New ed25519 public key to be used for `account`.                                                             |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                               | Description                                                                                                |' +
            ' | ----------------           | --------------                                             | -------------                                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                             | A `SlidingNonce` resource is not published under `lr_account`.                                             |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                             | The `sliding_nonce` in `lr_account` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                             | The `sliding_nonce` in `lr_account` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                    | The `sliding_nonce` in` lr_account` has been previously recorded.                                          |' +
            ' | `Errors::INVALID_STATE`    | `LibraAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `LibraAccount::KeyRotationCapability`.                       |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                                           |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::rotate_authentication_key`' +
            ' * `Script::rotate_authentication_key_with_nonce`' +
            ' * `Script::rotate_authentication_key_with_recovery_address`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            {
                name: 'new_key',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    RotateAuthenticationKeyWithRecoveryAddress: {
        stdlibEncodeFunction: Stdlib.encodeRotateAuthenticationKeyWithRecoveryAddressScript,
        stdlibDecodeFunction: Stdlib.decodeRotateAuthenticationKeyWithRecoveryAddressScript,
        codeName: 'ROTATE_AUTHENTICATION_KEY_WITH_RECOVERY_ADDRESS',
        description: ' # Summary' +
            ' Rotates the authentication key of a specified account that is part of a recovery address to a' +
            ' new authentication key. Only used for accounts that are part of a recovery address (see' +
            ' `Script::add_recovery_rotation_capability` for account restrictions).' +
            '' +
            ' # Technical Description' +
            ' Rotates the authentication key of the `to_recover` account to `new_key` using the' +
            ' `LibraAccount::KeyRotationCapability` stored in the `RecoveryAddress::RecoveryAddress` resource' +
            ' published under `recovery_address`. This transaction can be sent either by the `to_recover`' +
            ' account, or by the account where the `RecoveryAddress::RecoveryAddress` resource is published' +
            " that contains `to_recover`'s `LibraAccount::KeyRotationCapability`." +
            '' +
            ' # Parameters' +
            ' | Name               | Type         | Description                                                                                                                    |' +
            ' | ------             | ------       | -------------                                                                                                                  |' +
            ' | `account`          | `&signer`    | Signer reference of the sending account of the transaction.                                                                    |' +
            " | `recovery_address` | `address`    | Address where `RecoveryAddress::RecoveryAddress` that holds `to_recover`'s `LibraAccount::KeyRotationCapability` is published. |" +
            ' | `to_recover`       | `address`    | The address of the account whose authentication key will be updated.                                                           |' +
            ' | `new_key`          | `vector<u8>` | New ed25519 public key to be used for the account at the `to_recover` address.                                                 |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                  | Description                                                                                                                                          |' +
            ' | ----------------           | --------------                                | -------------                                                                                                                                        |' +
            ' | `Errors::NOT_PUBLISHED`    | `RecoveryAddress::ERECOVERY_ADDRESS`          | `recovery_address` does not have a `RecoveryAddress::RecoveryAddress` resource published under it.                                                   |' +
            ' | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::ECANNOT_ROTATE_KEY`         | The address of `account` is not `recovery_address` or `to_recover`.                                                                                  |' +
            " | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::EACCOUNT_NOT_RECOVERABLE`   | `to_recover`'s `LibraAccount::KeyRotationCapability`  is not in the `RecoveryAddress::RecoveryAddress`  resource published under `recovery_address`. |" +
            ' | `Errors::INVALID_ARGUMENT` | `LibraAccount::EMALFORMED_AUTHENTICATION_KEY` | `new_key` was an invalid length.                                                                                                                     |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::rotate_authentication_key`' +
            ' * `Script::rotate_authentication_key_with_nonce`' +
            ' * `Script::rotate_authentication_key_with_nonce_admin`',
        typeArgs: [],
        args: [
            { name: 'recovery_address', type: { type: Types.Address } },
            { name: 'to_recover', type: { type: Types.Address } },
            {
                name: 'new_key',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    RotateDualAttestationInfo: {
        stdlibEncodeFunction: Stdlib.encodeRotateDualAttestationInfoScript,
        stdlibDecodeFunction: Stdlib.decodeRotateDualAttestationInfoScript,
        codeName: 'ROTATE_DUAL_ATTESTATION_INFO',
        description: ' # Summary' +
            ' Updates the url used for off-chain communication, and the public key used to verify dual' +
            ' attestation on-chain. Transaction can be sent by any account that has dual attestation' +
            ' information published under it. In practice the only such accounts are Designated Dealers and' +
            ' Parent VASPs.' +
            '' +
            ' # Technical Description' +
            ' Updates the `base_url` and `compliance_public_key` fields of the `DualAttestation::Credential`' +
            ' resource published under `account`. The `new_key` must be a valid ed25519 public key.' +
            '' +
            ' ## Events' +
            ' Successful execution of this transaction emits two events:' +
            ' * A `DualAttestation::ComplianceKeyRotationEvent` containing the new compliance public key, and' +
            ' the blockchain time at which the key was updated emitted on the `DualAttestation::Credential`' +
            ' `compliance_key_rotation_events` handle published under `account`; and' +
            ' * A `DualAttestation::BaseUrlRotationEvent` containing the new base url to be used for' +
            ' off-chain communication, and the blockchain time at which the url was updated emitted on the' +
            ' `DualAttestation::Credential` `base_url_rotation_events` handle published under `account`.' +
            '' +
            ' # Parameters' +
            ' | Name      | Type         | Description                                                               |' +
            ' | ------    | ------       | -------------                                                             |' +
            ' | `account` | `&signer`    | Signer reference of the sending account of the transaction.               |' +
            ' | `new_url` | `vector<u8>` | ASCII-encoded url to be used for off-chain communication with `account`.  |' +
            ' | `new_key` | `vector<u8>` | New ed25519 public key to be used for on-chain dual attestation checking. |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                           | Description                                                                |' +
            ' | ----------------           | --------------                         | -------------                                                              |' +
            ' | `Errors::NOT_PUBLISHED`    | `DualAttestation::ECREDENTIAL`         | A `DualAttestation::Credential` resource is not published under `account`. |' +
            ' | `Errors::INVALID_ARGUMENT` | `DualAttestation::EINVALID_PUBLIC_KEY` | `new_key` is not a valid ed25519 public key.                               |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_parent_vasp_account`' +
            ' * `Script::create_designated_dealer`' +
            ' * `Script::rotate_dual_attestation_info`',
        typeArgs: [],
        args: [
            {
                name: 'new_url',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'new_key',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    RotateSharedEd25519PublicKey: {
        stdlibEncodeFunction: Stdlib.encodeRotateSharedEd25519PublicKeyScript,
        stdlibDecodeFunction: Stdlib.decodeRotateSharedEd25519PublicKeyScript,
        codeName: 'ROTATE_SHARED_ED25519_PUBLIC_KEY',
        description: ' # Summary' +
            ' Rotates the authentication key in a `SharedEd25519PublicKey`. This transaction can be sent by' +
            ' any account that has previously published a shared ed25519 public key using' +
            ' `Script::publish_shared_ed25519_public_key`.' +
            '' +
            ' # Technical Description' +
            " This first rotates the public key stored in `account`'s" +
            ' `SharedEd25519PublicKey::SharedEd25519PublicKey` resource to `public_key`, after which it' +
            " rotates the authentication key using the capability stored in `account`'s" +
            ' `SharedEd25519PublicKey::SharedEd25519PublicKey` to a new value derived from `public_key`' +
            '' +
            ' # Parameters' +
            ' | Name         | Type         | Description                                                     |' +
            ' | ------       | ------       | -------------                                                   |' +
            ' | `account`    | `&signer`    | The signer reference of the sending account of the transaction. |' +
            ' | `public_key` | `vector<u8>` | 32-byte Ed25519 public key.                                     |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                    | Description                                                                                   |' +
            ' | ----------------           | --------------                                  | -------------                                                                                 |' +
            ' | `Errors::NOT_PUBLISHED`    | `SharedEd25519PublicKey::ESHARED_KEY`           | A `SharedEd25519PublicKey::SharedEd25519PublicKey` resource is not published under `account`. |' +
            ' | `Errors::INVALID_ARGUMENT` | `SharedEd25519PublicKey::EMALFORMED_PUBLIC_KEY` | `public_key` is an invalid ed25519 public key.                                                |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::publish_shared_ed25519_public_key`',
        typeArgs: [],
        args: [
            {
                name: 'public_key',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    SetValidatorConfigAndReconfigure: {
        stdlibEncodeFunction: Stdlib.encodeSetValidatorConfigAndReconfigureScript,
        stdlibDecodeFunction: Stdlib.decodeSetValidatorConfigAndReconfigureScript,
        codeName: 'SET_VALIDATOR_CONFIG_AND_RECONFIGURE',
        description: ' # Summary' +
            " Updates a validator's configuration, and triggers a reconfiguration of the system to update the" +
            ' validator set with this new validator configuration.  Can only be successfully sent by a' +
            ' Validator Operator account that is already registered with a validator.' +
            '' +
            ' # Technical Description' +
            ' This updates the fields with corresponding names held in the `ValidatorConfig::ValidatorConfig`' +
            ' config resource held under `validator_account`. It then emits a `LibraConfig::NewEpochEvent` to' +
            ' trigger a reconfiguration of the system.  This reconfiguration will update the validator set' +
            ' on-chain with the updated `ValidatorConfig::ValidatorConfig`.' +
            '' +
            ' # Parameters' +
            ' | Name                          | Type         | Description                                                                                                                  |' +
            ' | ------                        | ------       | -------------                                                                                                                |' +
            ' | `validator_operator_account`  | `&signer`    | Signer reference of the sending account. Must be the registered validator operator for the validator at `validator_address`. |' +
            " | `validator_account`           | `address`    | The address of the validator's `ValidatorConfig::ValidatorConfig` resource being updated.                                    |" +
            ' | `consensus_pubkey`            | `vector<u8>` | New Ed25519 public key to be used in the updated `ValidatorConfig::ValidatorConfig`.                                         |' +
            ' | `validator_network_addresses` | `vector<u8>` | New set of `validator_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.                       |' +
            ' | `fullnode_network_addresses`  | `vector<u8>` | New set of `fullnode_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.                        |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                   | Description                                                                                           |' +
            ' | ----------------           | --------------                                 | -------------                                                                                         |' +
            ' | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`           | `validator_address` does not have a `ValidatorConfig::ValidatorConfig` resource published under it.   |' +
            ' | `Errors::REQUIRES_ROLE     | `Roles::EVALIDATOR_OPERATOR`                   | `validator_operator_account` does not have a Validator Operator role.                                 |' +
            ' | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_TRANSACTION_SENDER` | `validator_operator_account` is not the registered operator for the validator at `validator_address`. |' +
            ' | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_CONSENSUS_KEY`      | `consensus_pubkey` is not a valid ed25519 public key.                                                 |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_validator_account`' +
            ' * `Script::create_validator_operator_account`' +
            ' * `Script::add_validator_and_reconfigure`' +
            ' * `Script::remove_validator_and_reconfigure`' +
            ' * `Script::set_validator_operator`' +
            ' * `Script::set_validator_operator_with_nonce_admin`' +
            ' * `Script::register_validator_config`',
        typeArgs: [],
        args: [
            { name: 'validator_account', type: { type: Types.Address } },
            {
                name: 'consensus_pubkey',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'validator_network_addresses',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            {
                name: 'fullnode_network_addresses',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
        ],
    },
    SetValidatorOperator: {
        stdlibEncodeFunction: Stdlib.encodeSetValidatorOperatorScript,
        stdlibDecodeFunction: Stdlib.decodeSetValidatorOperatorScript,
        codeName: 'SET_VALIDATOR_OPERATOR',
        description: ' # Summary' +
            ' Sets the validator operator for a validator in the validator\'s configuration resource "locally"' +
            ' and does not reconfigure the system. Changes from this transaction will not picked up by the' +
            ' system until a reconfiguration of the system is triggered. May only be sent by an account with' +
            ' Validator role.' +
            '' +
            ' # Technical Description' +
            ' Sets the account at `operator_account` address and with the specified `human_name` as an' +
            ' operator for the sending validator account. The account at `operator_account` address must have' +
            ' a Validator Operator role and have a `ValidatorOperatorConfig::ValidatorOperatorConfig`' +
            ' resource published under it. The sending `account` must be a Validator and have a' +
            ' `ValidatorConfig::ValidatorConfig` resource published under it. This script does not emit a' +
            ' `LibraConfig::NewEpochEvent` and no reconfiguration of the system is initiated by this script.' +
            '' +
            ' # Parameters' +
            ' | Name               | Type         | Description                                                                                  |' +
            ' | ------             | ------       | -------------                                                                                |' +
            ' | `account`          | `&signer`    | The signer reference of the sending account of the transaction.                              |' +
            " | `operator_name`    | `vector<u8>` | Validator operator's human name.                                                             |" +
            " | `operator_account` | `address`    | Address of the validator operator account to be added as the `account` validator's operator. |" +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                          | Description                                                                                                                                                  |' +
            ' | ----------------           | --------------                                        | -------------                                                                                                                                                |' +
            ' | `Errors::NOT_PUBLISHED`    | `ValidatorOperatorConfig::EVALIDATOR_OPERATOR_CONFIG` | The `ValidatorOperatorConfig::ValidatorOperatorConfig` resource is not published under `operator_account`.                                                   |' +
            ' | 0                          | 0                                                     | The `human_name` field of the `ValidatorOperatorConfig::ValidatorOperatorConfig` resource under `operator_account` does not match the provided `human_name`. |' +
            ' | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR`                                   | `account` does not have a Validator account role.                                                                                                            |' +
            ' | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::ENOT_A_VALIDATOR_OPERATOR`          | The account at `operator_account` does not have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource.                                               |' +
            ' | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`                  | A `ValidatorConfig::ValidatorConfig` is not published under `account`.                                                                                       |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_validator_account`' +
            ' * `Script::create_validator_operator_account`' +
            ' * `Script::register_validator_config`' +
            ' * `Script::remove_validator_and_reconfigure`' +
            ' * `Script::add_validator_and_reconfigure`' +
            ' * `Script::set_validator_operator_with_nonce_admin`' +
            ' * `Script::set_validator_config_and_reconfigure`',
        typeArgs: [],
        args: [
            {
                name: 'operator_name',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            { name: 'operator_account', type: { type: Types.Address } },
        ],
    },
    SetValidatorOperatorWithNonceAdmin: {
        stdlibEncodeFunction: Stdlib.encodeSetValidatorOperatorWithNonceAdminScript,
        stdlibDecodeFunction: Stdlib.decodeSetValidatorOperatorWithNonceAdminScript,
        codeName: 'SET_VALIDATOR_OPERATOR_WITH_NONCE_ADMIN',
        description: ' # Summary' +
            ' Sets the validator operator for a validator in the validator\'s configuration resource "locally"' +
            ' and does not reconfigure the system. Changes from this transaction will not picked up by the' +
            ' system until a reconfiguration of the system is triggered. May only be sent by the Libra Root' +
            ' account as a write set transaction.' +
            '' +
            ' # Technical Description' +
            ' Sets the account at `operator_account` address and with the specified `human_name` as an' +
            ' operator for the validator `account`. The account at `operator_account` address must have a' +
            ' Validator Operator role and have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource' +
            ' published under it. The account represented by the `account` signer must be a Validator and' +
            ' have a `ValidatorConfig::ValidatorConfig` resource published under it. No reconfiguration of' +
            ' the system is initiated by this script.' +
            '' +
            ' # Parameters' +
            ' | Name               | Type         | Description                                                                                                  |' +
            ' | ------             | ------       | -------------                                                                                                |' +
            ' | `lr_account`       | `&signer`    | The signer reference of the sending account of the write set transaction. May only be the Libra Root signer. |' +
            ' | `account`          | `&signer`    | Signer reference of account specified in the `execute_as` field of the write set transaction.                |' +
            ' | `sliding_nonce`    | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction for Libra Root.                    |' +
            " | `operator_name`    | `vector<u8>` | Validator operator's human name.                                                                             |" +
            " | `operator_account` | `address`    | Address of the validator operator account to be added as the `account` validator's operator.                 |" +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                          | Description                                                                                                                                                  |' +
            ' | ----------------           | --------------                                        | -------------                                                                                                                                                |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                        | A `SlidingNonce` resource is not published under `lr_account`.                                                                                               |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                        | The `sliding_nonce` in `lr_account` is too old and it's impossible to determine if it's duplicated or not.                                                   |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                        | The `sliding_nonce` in `lr_account` is too far in the future.                                                                                                |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`               | The `sliding_nonce` in` lr_account` has been previously recorded.                                                                                            |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                        | The sending account is not the Libra Root account or Treasury Compliance account                                                                             |' +
            ' | `Errors::NOT_PUBLISHED`    | `ValidatorOperatorConfig::EVALIDATOR_OPERATOR_CONFIG` | The `ValidatorOperatorConfig::ValidatorOperatorConfig` resource is not published under `operator_account`.                                                   |' +
            ' | 0                          | 0                                                     | The `human_name` field of the `ValidatorOperatorConfig::ValidatorOperatorConfig` resource under `operator_account` does not match the provided `human_name`. |' +
            ' | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR`                                   | `account` does not have a Validator account role.                                                                                                            |' +
            ' | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::ENOT_A_VALIDATOR_OPERATOR`          | The account at `operator_account` does not have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource.                                               |' +
            ' | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`                  | A `ValidatorConfig::ValidatorConfig` is not published under `account`.                                                                                       |' +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_validator_account`' +
            ' * `Script::create_validator_operator_account`' +
            ' * `Script::register_validator_config`' +
            ' * `Script::remove_validator_and_reconfigure`' +
            ' * `Script::add_validator_and_reconfigure`' +
            ' * `Script::set_validator_operator`' +
            ' * `Script::set_validator_config_and_reconfigure`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            {
                name: 'operator_name',
                type: { type: Types.Array, arrayType: { type: Types.U8 } },
            },
            { name: 'operator_account', type: { type: Types.Address } },
        ],
    },
    TieredMint: {
        stdlibEncodeFunction: Stdlib.encodeTieredMintScript,
        stdlibDecodeFunction: Stdlib.decodeTieredMintScript,
        codeName: 'TIERED_MINT',
        description: ' # Summary' +
            ' Mints a specified number of coins in a currency to a Designated Dealer. The sending account' +
            ' must be the Treasury Compliance account, and coins can only be minted to a Designated Dealer' +
            ' account.' +
            '' +
            ' # Technical Description' +
            ' Mints `mint_amount` of coins in the `CoinType` currency to Designated Dealer account at' +
            ' `designated_dealer_address`. The `tier_index` parameter specifies which tier should be used to' +
            ' check verify the off-chain approval policy, and is based in part on the on-chain tier values' +
            ' for the specific Designated Dealer, and the number of `CoinType` coins that have been minted to' +
            ' the dealer over the past 24 hours. Every Designated Dealer has 4 tiers for each currency that' +
            ' they support. The sending `tc_account` must be the Treasury Compliance account, and the' +
            ' receiver an authorized Designated Dealer account.' +
            '' +
            ' ## Events' +
            ' Successful execution of the transaction will emit two events:' +
            ' * A `Libra::MintEvent` with the amount and currency code minted is emitted on the' +
            ' `mint_event_handle` in the stored `Libra::CurrencyInfo<CoinType>` resource stored under' +
            ' `0xA550C18`; and' +
            ' * A `DesignatedDealer::ReceivedMintEvent` with the amount, currency code, and Designated' +
            " Dealer's address is emitted on the `mint_event_handle` in the stored `DesignatedDealer::Dealer`" +
            ' resource published under the `designated_dealer_address`.' +
            '' +
            ' # Parameters' +
            ' | Name                        | Type      | Description                                                                                                |' +
            ' | ------                      | ------    | -------------                                                                                              |' +
            ' | `CoinType`                  | Type      | The Move type for the `CoinType` being minted. `CoinType` must be an already-registered currency on-chain. |' +
            ' | `tc_account`                | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.  |' +
            ' | `sliding_nonce`             | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                 |' +
            ' | `designated_dealer_address` | `address` | The address of the Designated Dealer account being minted to.                                              |' +
            ' | `mint_amount`               | `u64`     | The number of coins to be minted.                                                                          |' +
            ' | `tier_index`                | `u64`     | The mint tier index to use for the Designated Dealer account.                                              |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category                | Error Reason                                 | Description                                                                                                                  |' +
            ' | ----------------              | --------------                               | -------------                                                                                                                |' +
            ' | `Errors::NOT_PUBLISHED`       | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `tc_account`.                                                               |' +
            " | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                   |" +
            ' | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                                                                |' +
            ' | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                                                            |' +
            ' | `Errors::REQUIRES_ADDRESS`    | `CoreAddresses::ETREASURY_COMPLIANCE`        | `tc_account` is not the Treasury Compliance account.                                                                         |' +
            ' | `Errors::REQUIRES_ROLE`       | `Roles::ETREASURY_COMPLIANCE`                | `tc_account` is not the Treasury Compliance account.                                                                         |' +
            ' | `Errors::INVALID_ARGUMENT`    | `DesignatedDealer::EINVALID_MINT_AMOUNT`     | `mint_amount` is zero.                                                                                                       |' +
            ' | `Errors::NOT_PUBLISHED`       | `DesignatedDealer::EDEALER`                  | `DesignatedDealer::Dealer` or `DesignatedDealer::TierInfo<CoinType>` resource does not exist at `designated_dealer_address`. |' +
            ' | `Errors::INVALID_ARGUMENT`    | `DesignatedDealer::EINVALID_TIER_INDEX`      | The `tier_index` is out of bounds.                                                                                           |' +
            ' | `Errors::INVALID_ARGUMENT`    | `DesignatedDealer::EINVALID_AMOUNT_FOR_TIER` | `mint_amount` exceeds the maximum allowed amount for `tier_index`.                                                           |' +
            ' | `Errors::REQUIRES_CAPABILITY` | `Libra::EMINT_CAPABILITY`                    | `tc_account` does not have a `Libra::MintCapability<CoinType>` resource published under it.                                  |' +
            ' | `Errors::INVALID_STATE`       | `Libra::EMINTING_NOT_ALLOWED`                | Minting is not currently allowed for `CoinType` coins.                                                                       |' +
            " | `Errors::LIMIT_EXCEEDED`      | `LibraAccount::EDEPOSIT_EXCEEDS_LIMITS`      | The depositing of the funds would exceed the `account`'s account limits.                                                     |" +
            '' +
            ' # Related Scripts' +
            ' * `Script::create_designated_dealer`' +
            ' * `Script::peer_to_peer_with_metadata`' +
            ' * `Script::rotate_dual_attestation_info`',
        typeArgs: ['coin_type'],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'designated_dealer_address', type: { type: Types.Address } },
            { name: 'mint_amount', type: { type: Types.U64 } },
            { name: 'tier_index', type: { type: Types.U64 } },
        ],
    },
    UnfreezeAccount: {
        stdlibEncodeFunction: Stdlib.encodeUnfreezeAccountScript,
        stdlibDecodeFunction: Stdlib.decodeUnfreezeAccountScript,
        codeName: 'UNFREEZE_ACCOUNT',
        description: ' # Summary' +
            ' Unfreezes the account at `address`. The sending account of this transaction must be the' +
            ' Treasury Compliance account. After the successful execution of this transaction transactions' +
            ' may be sent from the previously frozen account, and coins may be sent and received.' +
            '' +
            ' # Technical Description' +
            ' Sets the `AccountFreezing::FreezingBit` to `false` and emits a' +
            ' `AccountFreezing::UnFreezeAccountEvent`. The transaction sender must be the Treasury Compliance' +
            ' account. Note that this is a per-account property so unfreezing a Parent VASP will not effect' +
            ' the status any of its child accounts and vice versa.' +
            '' +
            ' ## Events' +
            ' Successful execution of this script will emit a `AccountFreezing::UnFreezeAccountEvent` with' +
            " the `unfrozen_address` set the `to_unfreeze_account`'s address." +
            '' +
            ' # Parameters' +
            ' | Name                  | Type      | Description                                                                                               |' +
            ' | ------                | ------    | -------------                                                                                             |' +
            ' | `tc_account`          | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account. |' +
            ' | `sliding_nonce`       | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                |' +
            ' | `to_unfreeze_account` | `address` | The account address to be frozen.                                                                         |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                            | Description                                                                                |' +
            ' | ----------------           | --------------                          | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `account`.                                |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |' +
            '' +
            ' # Related Scripts' +
            ' * `Scripts::freeze_account`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'to_unfreeze_account', type: { type: Types.Address } },
        ],
    },
    UpdateDualAttestationLimit: {
        stdlibEncodeFunction: Stdlib.encodeUpdateDualAttestationLimitScript,
        stdlibDecodeFunction: Stdlib.decodeUpdateDualAttestationLimitScript,
        codeName: 'UPDATE_DUAL_ATTESTATION_LIMIT',
        description: ' # Summary' +
            ' Update the dual attestation limit on-chain. Defined in terms of micro-LBR.  The transaction can' +
            ' only be sent by the Treasury Compliance account.  After this transaction all inter-VASP' +
            ' payments over this limit must be checked for dual attestation.' +
            '' +
            ' # Technical Description' +
            ' Updates the `micro_lbr_limit` field of the `DualAttestation::Limit` resource published under' +
            ' `0xA550C18`. The amount is set in micro-LBR.' +
            '' +
            ' # Parameters' +
            ' | Name                  | Type      | Description                                                                                               |' +
            ' | ------                | ------    | -------------                                                                                             |' +
            ' | `tc_account`          | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account. |' +
            ' | `sliding_nonce`       | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                |' +
            ' | `new_micro_lbr_limit` | `u64`     | The new dual attestation limit to be used on-chain.                                                       |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                            | Description                                                                                |' +
            ' | ----------------           | --------------                          | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | `tc_account` is not the Treasury Compliance account.                                       |' +
            '' +
            ' # Related Scripts' +
            ' * `Scripts::update_exchange_rate`' +
            ' * `Scripts::update_minting_ability`',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'new_micro_lbr_limit', type: { type: Types.U64 } },
        ],
    },
    UpdateExchangeRate: {
        stdlibEncodeFunction: Stdlib.encodeUpdateExchangeRateScript,
        stdlibDecodeFunction: Stdlib.decodeUpdateExchangeRateScript,
        codeName: 'UPDATE_EXCHANGE_RATE',
        description: ' # Summary' +
            ' Update the rough on-chain exchange rate between a specified currency and LBR (as a conversion' +
            ' to micro-LBR). The transaction can only be sent by the Treasury Compliance account. After this' +
            ' transaction the updated exchange rate will be used for normalization of gas prices, and for' +
            ' dual attestation checking.' +
            '' +
            ' # Technical Description' +
            ' Updates the on-chain exchange rate from the given `Types` to micro-LBR.  The exchange rate' +
            ' is given by `new_exchange_rate_numerator/new_exchange_rate_denominator`.' +
            '' +
            ' # Parameters' +
            ' | Name                            | Type      | Description                                                                                                                        |' +
            ' | ------                          | ------    | -------------                                                                                                                      |' +
            ' | `Types`                      | Type      | The Move type for the `Types` whose exchange rate is being updated. `Types` must be an already-registered currency on-chain. |' +
            ' | `tc_account`                    | `&signer` | The signer reference of the sending account of this transaction. Must be the Treasury Compliance account.                          |' +
            ' | `sliding_nonce`                 | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for the transaction.                                                          |' +
            ' | `new_exchange_rate_numerator`   | `u64`     | The numerator for the new to micro-LBR exchange rate for `Types`.                                                               |' +
            ' | `new_exchange_rate_denominator` | `u64`     | The denominator for the new to micro-LBR exchange rate for `Types`.                                                             |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                            | Description                                                                                |' +
            ' | ----------------           | --------------                          | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | `tc_account` is not the Treasury Compliance account.                                       |' +
            ' | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`           | `tc_account` is not the Treasury Compliance account.                                       |' +
            ' | `Errors::INVALID_ARGUMENT` | `FixedPoint32::EDENOMINATOR`            | `new_exchange_rate_denominator` is zero.                                                   |' +
            ' | `Errors::INVALID_ARGUMENT` | `FixedPoint32::ERATIO_OUT_OF_RANGE`     | The quotient is unrepresentable as a `FixedPoint32`.                                       |' +
            ' | `Errors::LIMIT_EXCEEDED`   | `FixedPoint32::ERATIO_OUT_OF_RANGE`     | The quotient is unrepresentable as a `FixedPoint32`.                                       |' +
            '' +
            ' # Related Scripts' +
            ' * `Scripts::update_dual_attestation_limit`' +
            ' * `Scripts::update_minting_ability`',
        typeArgs: ['currency'],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'new_exchange_rate_numerator', type: { type: Types.U64 } },
            { name: 'new_exchange_rate_denominator', type: { type: Types.U64 } },
        ],
    },
    UpdateLibraVersion: {
        stdlibEncodeFunction: Stdlib.encodeUpdateLibraVersionScript,
        stdlibDecodeFunction: Stdlib.decodeUpdateLibraVersionScript,
        codeName: 'UPDATE_LIBRA_VERSION',
        description: '  # Summary' +
            ' Updates the Libra major version that is stored on-chain and is used by the VM.  This' +
            ' transaction can only be sent from the Libra Root account.' +
            '' +
            ' # Technical Description' +
            ' Updates the `LibraVersion` on-chain config and emits a `LibraConfig::NewEpochEvent` to trigger' +
            ' a reconfiguration of the system. The `major` version that is passed in must be strictly greater' +
            ' than the current major version held on-chain. The VM reads this information and can use it to' +
            ' preserve backwards compatibility with previous major versions of the VM.' +
            '' +
            ' # Parameters' +
            ' | Name            | Type      | Description                                                                |' +
            ' | ------          | ------    | -------------                                                              |' +
            ' | `account`       | `&signer` | Signer reference of the sending account. Must be the Libra Root account.   |' +
            ' | `sliding_nonce` | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |' +
            ' | `major`         | `u64`     | The `major` version of the VM to be used from this transaction on.         |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                                  | Description                                                                                |' +
            ' | ----------------           | --------------                                | -------------                                                                              |' +
            ' | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `account`.                                |' +
            " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                              |' +
            ' | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                          |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ELIBRA_ROOT`                  | `account` is not the Libra Root account.                                                   |' +
            ' | `Errors::INVALID_ARGUMENT` | `LibraVersion::EINVALID_MAJOR_VERSION_NUMBER` | `major` is less-than or equal to the current major version stored on-chain.                |',
        typeArgs: [],
        args: [
            { name: 'sliding_nonce', type: { type: Types.U64 } },
            { name: 'major', type: { type: Types.U64 } },
        ],
    },
    UpdateMintingAbility: {
        stdlibEncodeFunction: Stdlib.encodeUpdateMintingAbilityScript,
        stdlibDecodeFunction: Stdlib.decodeUpdateMintingAbilityScript,
        codeName: 'UPDATE_MINTING_ABILITY',
        description: ' # Summary' +
            ' Script to allow or disallow minting of new coins in a specified currency.  This transaction can' +
            ' only be sent by the Treasury Compliance account.  Turning minting off for a currency will have' +
            ' no effect on coins already in circulation, and coins may still be removed from the system.' +
            '' +
            ' # Technical Description' +
            ' This transaction sets the `can_mint` field of the `Libra::CurrencyInfo<Types>` resource' +
            ' published under `0xA550C18` to the value of `allow_minting`. Minting of coins if allowed if' +
            ' this field is set to `true` and minting of new coins in `Types` is disallowed otherwise.' +
            ' This transaction needs to be sent by the Treasury Compliance account.' +
            '' +
            ' # Parameters' +
            ' | Name            | Type      | Description                                                                                                                          |' +
            ' | ------          | ------    | -------------                                                                                                                        |' +
            ' | `Types`      | Type      | The Move type for the `Types` whose minting ability is being updated. `Types` must be an already-registered currency on-chain. |' +
            ' | `account`       | `&signer` | Signer reference of the sending account. Must be the Libra Root account.                                                             |' +
            ' | `allow_minting` | `bool`    | Whether to allow minting of new coins in `Types`.                                                                                 |' +
            '' +
            ' # Common Abort Conditions' +
            ' | Error Category             | Error Reason                          | Description                                          |' +
            ' | ----------------           | --------------                        | -------------                                        |' +
            ' | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE` | `tc_account` is not the Treasury Compliance account. |' +
            ' | `Errors::NOT_PUBLISHED`    | `Libra::ECURRENCY_INFO`               | `Types` is not a registered currency on-chain.    |' +
            '' +
            ' # Related Scripts' +
            ' * `Scripts::update_dual_attestation_limit`' +
            ' * `Scripts::update_exchange_rate`',
        typeArgs: ['currency'],
        args: [{ name: 'allow_minting', type: { type: Types.Boolean } }],
    },
};
