import { Serializer } from '../serde/serializer';
import { Deserializer } from '../serde/deserializer';
import { Optional, Seq, Tuple, ListTuple } from '../serde/types';
export declare class AccessPath {
    address: AccountAddress;
    path: Uint8Array;
    constructor(address: AccountAddress, path: Uint8Array);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): AccessPath;
}
export declare class AccountAddress {
    value: ListTuple<[number]>;
    constructor(value: ListTuple<[number]>);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): AccountAddress;
}
export declare class BlockMetadata {
    id: HashValue;
    round: BigInt;
    timestamp_usecs: BigInt;
    previous_block_votes: Seq<AccountAddress>;
    proposer: AccountAddress;
    constructor(id: HashValue, round: BigInt, timestamp_usecs: BigInt, previous_block_votes: Seq<AccountAddress>, proposer: AccountAddress);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): BlockMetadata;
}
export declare class ChainId {
    value: number;
    constructor(value: number);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): ChainId;
}
export declare class ChangeSet {
    write_set: WriteSet;
    events: Seq<ContractEvent>;
    constructor(write_set: WriteSet, events: Seq<ContractEvent>);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): ChangeSet;
}
export declare abstract class ContractEvent {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): ContractEvent;
}
export declare class ContractEventVariantV0 extends ContractEvent {
    value: ContractEventV0;
    constructor(value: ContractEventV0);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): ContractEventVariantV0;
}
export declare class ContractEventV0 {
    key: EventKey;
    sequence_number: BigInt;
    type_tag: TypeTag;
    event_data: Uint8Array;
    constructor(key: EventKey, sequence_number: BigInt, type_tag: TypeTag, event_data: Uint8Array);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): ContractEventV0;
}
export declare class Ed25519PublicKey {
    value: Uint8Array;
    constructor(value: Uint8Array);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): Ed25519PublicKey;
}
export declare class Ed25519Signature {
    value: Uint8Array;
    constructor(value: Uint8Array);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): Ed25519Signature;
}
export declare class EventKey {
    value: Uint8Array;
    constructor(value: Uint8Array);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): EventKey;
}
export declare abstract class GeneralMetadata {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): GeneralMetadata;
}
export declare class GeneralMetadataVariantGeneralMetadataVersion0 extends GeneralMetadata {
    value: GeneralMetadataV0;
    constructor(value: GeneralMetadataV0);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): GeneralMetadataVariantGeneralMetadataVersion0;
}
export declare class GeneralMetadataV0 {
    to_subaddress: Optional<Uint8Array>;
    from_subaddress: Optional<Uint8Array>;
    referenced_event: Optional<BigInt>;
    constructor(to_subaddress: Optional<Uint8Array>, from_subaddress: Optional<Uint8Array>, referenced_event: Optional<BigInt>);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): GeneralMetadataV0;
}
export declare class HashValue {
    value: Uint8Array;
    constructor(value: Uint8Array);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): HashValue;
}
export declare class Identifier {
    value: string;
    constructor(value: string);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): Identifier;
}
export declare abstract class Metadata {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): Metadata;
}
export declare class MetadataVariantUndefined extends Metadata {
    constructor();
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): MetadataVariantUndefined;
}
export declare class MetadataVariantGeneralMetadata extends Metadata {
    value: GeneralMetadata;
    constructor(value: GeneralMetadata);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): MetadataVariantGeneralMetadata;
}
export declare class MetadataVariantTravelRuleMetadata extends Metadata {
    value: TravelRuleMetadata;
    constructor(value: TravelRuleMetadata);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): MetadataVariantTravelRuleMetadata;
}
export declare class MetadataVariantUnstructuredBytesMetadata extends Metadata {
    value: UnstructuredBytesMetadata;
    constructor(value: UnstructuredBytesMetadata);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): MetadataVariantUnstructuredBytesMetadata;
}
export declare class Module {
    code: Uint8Array;
    constructor(code: Uint8Array);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): Module;
}
export declare class MultiEd25519PublicKey {
    value: Uint8Array;
    constructor(value: Uint8Array);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): MultiEd25519PublicKey;
}
export declare class MultiEd25519Signature {
    value: Uint8Array;
    constructor(value: Uint8Array);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): MultiEd25519Signature;
}
export declare class RawTransaction {
    sender: AccountAddress;
    sequence_number: BigInt;
    payload: TransactionPayload;
    max_gas_amount: BigInt;
    gas_unit_price: BigInt;
    gas_currency_code: string;
    expiration_timestamp_secs: BigInt;
    chain_id: ChainId;
    constructor(sender: AccountAddress, sequence_number: BigInt, payload: TransactionPayload, max_gas_amount: BigInt, gas_unit_price: BigInt, gas_currency_code: string, expiration_timestamp_secs: BigInt, chain_id: ChainId);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): RawTransaction;
}
export declare class Script {
    code: Uint8Array;
    ty_args: Seq<TypeTag>;
    args: Seq<TransactionArgument>;
    constructor(code: Uint8Array, ty_args: Seq<TypeTag>, args: Seq<TransactionArgument>);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): Script;
}
export declare class SignedTransaction {
    raw_txn: RawTransaction;
    authenticator: TransactionAuthenticator;
    constructor(raw_txn: RawTransaction, authenticator: TransactionAuthenticator);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): SignedTransaction;
}
export declare class StructTag {
    address: AccountAddress;
    module: Identifier;
    name: Identifier;
    type_params: Seq<TypeTag>;
    constructor(address: AccountAddress, module: Identifier, name: Identifier, type_params: Seq<TypeTag>);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): StructTag;
}
export declare abstract class Transaction {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): Transaction;
}
export declare class TransactionVariantUserTransaction extends Transaction {
    value: SignedTransaction;
    constructor(value: SignedTransaction);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionVariantUserTransaction;
}
export declare class TransactionVariantGenesisTransaction extends Transaction {
    value: WriteSetPayload;
    constructor(value: WriteSetPayload);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionVariantGenesisTransaction;
}
export declare class TransactionVariantBlockMetadata extends Transaction {
    value: BlockMetadata;
    constructor(value: BlockMetadata);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionVariantBlockMetadata;
}
export declare abstract class TransactionArgument {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): TransactionArgument;
}
export declare class TransactionArgumentVariantU8 extends TransactionArgument {
    value: number;
    constructor(value: number);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionArgumentVariantU8;
}
export declare class TransactionArgumentVariantU64 extends TransactionArgument {
    value: BigInt;
    constructor(value: BigInt);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionArgumentVariantU64;
}
export declare class TransactionArgumentVariantU128 extends TransactionArgument {
    value: BigInt;
    constructor(value: BigInt);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionArgumentVariantU128;
}
export declare class TransactionArgumentVariantAddress extends TransactionArgument {
    value: AccountAddress;
    constructor(value: AccountAddress);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionArgumentVariantAddress;
}
export declare class TransactionArgumentVariantU8Vector extends TransactionArgument {
    value: Uint8Array;
    constructor(value: Uint8Array);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionArgumentVariantU8Vector;
}
export declare class TransactionArgumentVariantBool extends TransactionArgument {
    value: boolean;
    constructor(value: boolean);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionArgumentVariantBool;
}
export declare abstract class TransactionAuthenticator {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): TransactionAuthenticator;
}
export declare class TransactionAuthenticatorVariantEd25519 extends TransactionAuthenticator {
    public_key: Ed25519PublicKey;
    signature: Ed25519Signature;
    constructor(public_key: Ed25519PublicKey, signature: Ed25519Signature);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionAuthenticatorVariantEd25519;
}
export declare class TransactionAuthenticatorVariantMultiEd25519 extends TransactionAuthenticator {
    public_key: MultiEd25519PublicKey;
    signature: MultiEd25519Signature;
    constructor(public_key: MultiEd25519PublicKey, signature: MultiEd25519Signature);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionAuthenticatorVariantMultiEd25519;
}
export declare abstract class TransactionPayload {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): TransactionPayload;
}
export declare class TransactionPayloadVariantWriteSet extends TransactionPayload {
    value: WriteSetPayload;
    constructor(value: WriteSetPayload);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionPayloadVariantWriteSet;
}
export declare class TransactionPayloadVariantScript extends TransactionPayload {
    value: Script;
    constructor(value: Script);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionPayloadVariantScript;
}
export declare class TransactionPayloadVariantModule extends TransactionPayload {
    value: Module;
    constructor(value: Module);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TransactionPayloadVariantModule;
}
export declare abstract class TravelRuleMetadata {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): TravelRuleMetadata;
}
export declare class TravelRuleMetadataVariantTravelRuleMetadataVersion0 extends TravelRuleMetadata {
    value: TravelRuleMetadataV0;
    constructor(value: TravelRuleMetadataV0);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TravelRuleMetadataVariantTravelRuleMetadataVersion0;
}
export declare class TravelRuleMetadataV0 {
    off_chain_reference_id: Optional<string>;
    constructor(off_chain_reference_id: Optional<string>);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): TravelRuleMetadataV0;
}
export declare abstract class TypeTag {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): TypeTag;
}
export declare class TypeTagVariantBool extends TypeTag {
    constructor();
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TypeTagVariantBool;
}
export declare class TypeTagVariantU8 extends TypeTag {
    constructor();
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TypeTagVariantU8;
}
export declare class TypeTagVariantU64 extends TypeTag {
    constructor();
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TypeTagVariantU64;
}
export declare class TypeTagVariantU128 extends TypeTag {
    constructor();
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TypeTagVariantU128;
}
export declare class TypeTagVariantAddress extends TypeTag {
    constructor();
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TypeTagVariantAddress;
}
export declare class TypeTagVariantSigner extends TypeTag {
    constructor();
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TypeTagVariantSigner;
}
export declare class TypeTagVariantVector extends TypeTag {
    value: TypeTag;
    constructor(value: TypeTag);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TypeTagVariantVector;
}
export declare class TypeTagVariantStruct extends TypeTag {
    value: StructTag;
    constructor(value: StructTag);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): TypeTagVariantStruct;
}
export declare class UnstructuredBytesMetadata {
    metadata: Optional<Uint8Array>;
    constructor(metadata: Optional<Uint8Array>);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): UnstructuredBytesMetadata;
}
export declare abstract class WriteOp {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): WriteOp;
}
export declare class WriteOpVariantDeletion extends WriteOp {
    constructor();
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): WriteOpVariantDeletion;
}
export declare class WriteOpVariantValue extends WriteOp {
    value: Uint8Array;
    constructor(value: Uint8Array);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): WriteOpVariantValue;
}
export declare class WriteSet {
    value: WriteSetMut;
    constructor(value: WriteSetMut);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): WriteSet;
}
export declare class WriteSetMut {
    write_set: Seq<Tuple<[AccessPath, WriteOp]>>;
    constructor(write_set: Seq<Tuple<[AccessPath, WriteOp]>>);
    serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): WriteSetMut;
}
export declare abstract class WriteSetPayload {
    abstract serialize(serializer: Serializer): void;
    static deserialize(deserializer: Deserializer): WriteSetPayload;
}
export declare class WriteSetPayloadVariantDirect extends WriteSetPayload {
    value: ChangeSet;
    constructor(value: ChangeSet);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): WriteSetPayloadVariantDirect;
}
export declare class WriteSetPayloadVariantScript extends WriteSetPayload {
    execute_as: AccountAddress;
    script: Script;
    constructor(execute_as: AccountAddress, script: Script);
    serialize(serializer: Serializer): void;
    static load(deserializer: Deserializer): WriteSetPayloadVariantScript;
}
export declare class Helpers {
    static serializeArray16U8Array(value: ListTuple<[number]>, serializer: Serializer): void;
    static deserializeArray16U8Array(deserializer: Deserializer): ListTuple<[number]>;
    static serializeOptionBytes(value: Optional<Uint8Array>, serializer: Serializer): void;
    static deserializeOptionBytes(deserializer: Deserializer): Optional<Uint8Array>;
    static serializeOptionStr(value: Optional<string>, serializer: Serializer): void;
    static deserializeOptionStr(deserializer: Deserializer): Optional<string>;
    static serializeOptionU64(value: Optional<BigInt>, serializer: Serializer): void;
    static deserializeOptionU64(deserializer: Deserializer): Optional<BigInt>;
    static serializeTuple2AccessPathWriteOp(value: Tuple<[AccessPath, WriteOp]>, serializer: Serializer): void;
    static deserializeTuple2AccessPathWriteOp(deserializer: Deserializer): Tuple<[AccessPath, WriteOp]>;
    static serializeVectorAccountAddress(value: Seq<AccountAddress>, serializer: Serializer): void;
    static deserializeVectorAccountAddress(deserializer: Deserializer): Seq<AccountAddress>;
    static serializeVectorContractEvent(value: Seq<ContractEvent>, serializer: Serializer): void;
    static deserializeVectorContractEvent(deserializer: Deserializer): Seq<ContractEvent>;
    static serializeVectorTransactionArgument(value: Seq<TransactionArgument>, serializer: Serializer): void;
    static deserializeVectorTransactionArgument(deserializer: Deserializer): Seq<TransactionArgument>;
    static serializeVectorTypeTag(value: Seq<TypeTag>, serializer: Serializer): void;
    static deserializeVectorTypeTag(deserializer: Deserializer): Seq<TypeTag>;
    static serializeVectorTuple2AccessPathWriteOp(value: Seq<Tuple<[AccessPath, WriteOp]>>, serializer: Serializer): void;
    static deserializeVectorTuple2AccessPathWriteOp(deserializer: Deserializer): Seq<Tuple<[AccessPath, WriteOp]>>;
}
