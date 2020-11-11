export interface Amount {
    amount: BigInt;
    currency: string;
}
export interface Account {
    /**
     *  hex-encoded bytes
     */
    address: string;
    balances: Amount[];
    sequence_number: BigInt;
    /**
     *  hex-encoded bytes
     */
    authentication_key: string;
    /**
     *  hex-encoded bytes
     */
    sent_events_key: string;
    /**
     *  hex-encoded bytes
     */
    received_events_key: string;
    delegated_key_rotation_capability: boolean;
    delegated_withdrawal_capability: boolean;
    is_frozen: boolean;
    role?: AccountRole;
}
export interface AccountRole {
    type: string;
    parent_vasp_address?: string;
    human_name: string;
    base_url: string;
    expiration_time: BigInt;
    /**
     *  hex-encoded bytes
     */
    compliance_key: string;
    /**
     *  hex-encoded bytes
     */
    compliance_key_rotation_events_key?: string;
    /**
     *  hex-encoded bytes
     */
    base_url_rotation_events_key?: string;
    num_children: number;
    /**
     *  hex-encoded bytes
     */
    received_mint_events_key?: string;
    preburn_balances?: Amount[];
}
export interface Event {
    key: string;
    sequence_number: BigInt;
    transaction_version: BigInt;
    data?: EventData;
}
export interface EventData {
    type: string;
    /**
     *  burn, cancelburn, mint, preburn, receivedpayment, sentpayment, receivedmint events
     */
    amount?: Amount;
    /**
     *  burn, cancelburn, preburn events
     *  hex-encoded bytes
     */
    preburn_address?: string;
    /**
     *  to_lbr_exchange_rate_update event only
     */
    currency_code?: string;
    new_to_lbr_exchange_rate?: number;
    /**
     *  receivedpayment and sentpayment events
     *  hex-encoded bytes
     */
    sender: string;
    /**
     *  hex-encoded bytes
     */
    receiver: string;
    /**
     *  hex-encoded bytes
     */
    metadata: string;
    /**
     *  newepoch event only
     */
    epoch?: number;
    /**
     *  newblock event only
     */
    round?: number;
    /**
     *  hex-encoded bytes
     */
    proposer?: string;
    proposed_time?: number;
    /**
     *  receivedmint event only
     *  hex-encoded bytes
     */
    destination_address?: string;
    /**
     *  compliancekeyrotation event only
     *  hex-encoded bytes
     */
    new_compliance_public_key?: string;
    /**
     *  baseurlrotation event only
     */
    new_base_url?: string;
    /**
     *  compliancekeyrotation and baseurlrotation events
     */
    time_rotated_seconds?: number;
    /**
     * *
     *  createaccount event field.
     *  Hex-encoded account address bytes of the created account.
     */
    created_address?: string;
    /**
     * *
     *  createaccount event field.
     *  Role id of the created account, see [LIP-2](https://lip.libra.org/lip-2/#move-implementation)
     *  for more details
     */
    role_id?: number;
    /**
     * *
     *  admintransaction event field.
     *  The block time when this transaction is committed.
     *  It is created by validators.
     */
    committed_timestamp_secs?: number;
}
export interface Metadata {
    /**
     * *
     *  The block (ledger) version
     */
    version: BigInt;
    /**
     * *
     *  The block (ledger) timestamp, unit is microsecond
     */
    timestamp: BigInt;
    /**
     * *
     *  Chain ID of the Libra network
     */
    chain_id: number;
    /**
     * *
     *  List of allowed scripts hex-encoded hash bytes, server may not return this field
     *  if the allow list not found in on chain configuration.
     */
    script_hash_allow_list: string[];
    /**
     * *
     *  True for allowing publishing customized script, server may not return this field
     *  if the flag not found in on chain configuration.
     */
    module_publishing_allowed: boolean;
    /**
     * *
     *  Libra chain major version number.
     */
    libra_version: BigInt;
}
export interface Transaction {
    version: BigInt;
    transaction?: TransactionData;
    hash: string;
    /**
     *  hex-encoded lcs bytes
     */
    bytes: string;
    events: Event[];
    vm_status?: VMStatus;
    gas_used: BigInt;
}
export interface VMStatus {
    type: string;
    /**
     *  move_abort, execution_failure
     */
    location?: string;
    /**
     *  move_abort only
     */
    abort_code?: number;
    /**
     *  execution_failure only
     */
    function_index?: number;
    code_offset?: number;
}
export interface TransactionData {
    type: string;
    /**
     *  blockmetadata
     */
    timestamp_usecs?: BigInt;
    /**
     *  user
     */
    sender?: string;
    signature_scheme?: string;
    signature?: string;
    /**
     *  hex-encoded bytes
     */
    public_key?: string;
    sequence_number?: BigInt;
    chain_id?: number;
    max_gas_amount?: BigInt;
    gas_unit_price?: BigInt;
    gas_currency?: string;
    expiration_timestamp_secs?: BigInt;
    script_hash?: string;
    /**
     *  hex-encoded bytes
     */
    script_bytes?: string;
    script?: Script;
}
export interface Script {
    /**
     * *
     *  Name of the script code, see https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/doc/transaction_script_documentation.md for all available script names.
     *  Type is set as "unknown" if script code can't be recognized, or transaction payload is not a script.
     *  It is possible server side does not know the code and the code is valid.
     */
    type: string;
    /**
     * *
     *  Hex-encoded compiled move script bytes.
     */
    code: string;
    /**
     * *
     *  List of string value of the script arguments. Contains type information.
     *  Argument value to string formatting:
     *  - u8 value `12` => "{U8: 12}"
     *  - u64 value `12244` => "{U64: 12244}"
     *  - u128 value `12244` => "{U128: 12244}"
     *  - boolean value `true` => "{BOOL: true}"
     *  - Account address value => "{ADDRESS: <hex-encoded account address bytes>}"
     *  - List<u8> value => "{U8Vector:: 0x<hex-encoded bytes>}"
     */
    arguments: string[];
    /**
     * *
     *  List of type arguments, converted into string.
     */
    type_arguments: string[];
    /**
     * *
     *  hex-encoded receiver account address bytes
     */
    receiver: string;
    /**
     * *
     *  peer to peer transfer amount.
     */
    amount: BigInt;
    /**
     * *
     *  peer to peer transfer currency code.
     */
    currency: string;
    /**
     * *
     *  Metadata of the transaction, LCS serialized hex-encoded string.
     *  See [LIP-4](https://lip.libra.org/lip-4/) for more details.
     */
    metadata: string;
    /**
     * *
     *  Hex-encoded metadata signature, use this to validate metadata.
     *  See [LIP-4](https://lip.libra.org/lip-4/) for more details.
     */
    metadata_signature: string;
}
export interface CurrencyInfo {
    code: string;
    scaling_factor: number;
    fractional_part: number;
    to_lbr_exchange_rate: number;
    /**
     *  hex-encoded bytes
     */
    mint_events_key: string;
    /**
     *  hex-encoded bytes
     */
    burn_events_key: string;
    /**
     *  HEX-encoded bytes
     */
    preburn_events_key: string;
    /**
     *  hex-encoded bytes
     */
    cancel_burn_events_key: string;
    /**
     *  hex-encoded bytes
     */
    exchange_rate_update_events_key: string;
}
export interface StateProof {
    /**
     *  hex-encoded lcs bytes
     */
    ledger_info_with_signatures: string;
    /**
     *  hex-encoded lcs bytes
     */
    epoch_change_proof: string;
    /**
     *  hex-encoded lcs bytes
     */
    ledger_consistency_proof: string;
}
export interface AccountStateWithProof {
    version: BigInt;
    /**
     *  hex-encoded lcs bytes
     */
    blob: string;
    /**
     *  hex-encoded lcs bytes
     */
    proof?: AccountStateProof;
}
export interface AccountStateProof {
    /**
     *  hex-encoded lcs bytes
     */
    ledger_info_to_transaction_info_proof: string;
    /**
     *  hex-encoded lcs bytes
     */
    transaction_info: string;
    /**
     *  hex-encoded lcs bytes
     */
    transaction_info_to_account_proof: string;
}
