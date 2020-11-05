"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helpers = exports.WriteSetPayloadVariantScript = exports.WriteSetPayloadVariantDirect = exports.WriteSetPayload = exports.WriteSetMut = exports.WriteSet = exports.WriteOpVariantValue = exports.WriteOpVariantDeletion = exports.WriteOp = exports.UnstructuredBytesMetadata = exports.TypeTagVariantStruct = exports.TypeTagVariantVector = exports.TypeTagVariantSigner = exports.TypeTagVariantAddress = exports.TypeTagVariantU128 = exports.TypeTagVariantU64 = exports.TypeTagVariantU8 = exports.TypeTagVariantBool = exports.TypeTag = exports.TravelRuleMetadataV0 = exports.TravelRuleMetadataVariantTravelRuleMetadataVersion0 = exports.TravelRuleMetadata = exports.TransactionPayloadVariantModule = exports.TransactionPayloadVariantScript = exports.TransactionPayloadVariantWriteSet = exports.TransactionPayload = exports.TransactionAuthenticatorVariantMultiEd25519 = exports.TransactionAuthenticatorVariantEd25519 = exports.TransactionAuthenticator = exports.TransactionArgumentVariantBool = exports.TransactionArgumentVariantU8Vector = exports.TransactionArgumentVariantAddress = exports.TransactionArgumentVariantU128 = exports.TransactionArgumentVariantU64 = exports.TransactionArgumentVariantU8 = exports.TransactionArgument = exports.TransactionVariantBlockMetadata = exports.TransactionVariantGenesisTransaction = exports.TransactionVariantUserTransaction = exports.Transaction = exports.StructTag = exports.SignedTransaction = exports.Script = exports.RawTransaction = exports.MultiEd25519Signature = exports.MultiEd25519PublicKey = exports.Module = exports.MetadataVariantUnstructuredBytesMetadata = exports.MetadataVariantTravelRuleMetadata = exports.MetadataVariantGeneralMetadata = exports.MetadataVariantUndefined = exports.Metadata = exports.Identifier = exports.HashValue = exports.GeneralMetadataV0 = exports.GeneralMetadataVariantGeneralMetadataVersion0 = exports.GeneralMetadata = exports.EventKey = exports.Ed25519Signature = exports.Ed25519PublicKey = exports.ContractEventV0 = exports.ContractEventVariantV0 = exports.ContractEvent = exports.ChangeSet = exports.ChainId = exports.BlockMetadata = exports.AccountAddress = exports.AccessPath = void 0;
class AccessPath {
    constructor(address, path) {
        this.address = address;
        this.path = path;
    }
    serialize(serializer) {
        this.address.serialize(serializer);
        serializer.serializeBytes(this.path);
    }
    static deserialize(deserializer) {
        const address = AccountAddress.deserialize(deserializer);
        const path = deserializer.deserializeBytes();
        return new AccessPath(address, path);
    }
}
exports.AccessPath = AccessPath;
class AccountAddress {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        Helpers.serializeArray16U8Array(this.value, serializer);
    }
    static deserialize(deserializer) {
        const value = Helpers.deserializeArray16U8Array(deserializer);
        return new AccountAddress(value);
    }
}
exports.AccountAddress = AccountAddress;
class BlockMetadata {
    constructor(id, round, timestamp_usecs, previous_block_votes, proposer) {
        this.id = id;
        this.round = round;
        this.timestamp_usecs = timestamp_usecs;
        this.previous_block_votes = previous_block_votes;
        this.proposer = proposer;
    }
    serialize(serializer) {
        this.id.serialize(serializer);
        serializer.serializeU64(this.round);
        serializer.serializeU64(this.timestamp_usecs);
        Helpers.serializeVectorAccountAddress(this.previous_block_votes, serializer);
        this.proposer.serialize(serializer);
    }
    static deserialize(deserializer) {
        const id = HashValue.deserialize(deserializer);
        const round = deserializer.deserializeU64();
        const timestamp_usecs = deserializer.deserializeU64();
        const previous_block_votes = Helpers.deserializeVectorAccountAddress(deserializer);
        const proposer = AccountAddress.deserialize(deserializer);
        return new BlockMetadata(id, round, timestamp_usecs, previous_block_votes, proposer);
    }
}
exports.BlockMetadata = BlockMetadata;
class ChainId {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeU8(this.value);
    }
    static deserialize(deserializer) {
        const value = deserializer.deserializeU8();
        return new ChainId(value);
    }
}
exports.ChainId = ChainId;
class ChangeSet {
    constructor(write_set, events) {
        this.write_set = write_set;
        this.events = events;
    }
    serialize(serializer) {
        this.write_set.serialize(serializer);
        Helpers.serializeVectorContractEvent(this.events, serializer);
    }
    static deserialize(deserializer) {
        const write_set = WriteSet.deserialize(deserializer);
        const events = Helpers.deserializeVectorContractEvent(deserializer);
        return new ChangeSet(write_set, events);
    }
}
exports.ChangeSet = ChangeSet;
class ContractEvent {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return ContractEventVariantV0.load(deserializer);
            default:
                throw new Error('Unknown variant index for ContractEvent: ' + index);
        }
    }
}
exports.ContractEvent = ContractEvent;
class ContractEventVariantV0 extends ContractEvent {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = ContractEventV0.deserialize(deserializer);
        return new ContractEventVariantV0(value);
    }
}
exports.ContractEventVariantV0 = ContractEventVariantV0;
class ContractEventV0 {
    constructor(key, sequence_number, type_tag, event_data) {
        this.key = key;
        this.sequence_number = sequence_number;
        this.type_tag = type_tag;
        this.event_data = event_data;
    }
    serialize(serializer) {
        this.key.serialize(serializer);
        serializer.serializeU64(this.sequence_number);
        this.type_tag.serialize(serializer);
        serializer.serializeBytes(this.event_data);
    }
    static deserialize(deserializer) {
        const key = EventKey.deserialize(deserializer);
        const sequence_number = deserializer.deserializeU64();
        const type_tag = TypeTag.deserialize(deserializer);
        const event_data = deserializer.deserializeBytes();
        return new ContractEventV0(key, sequence_number, type_tag, event_data);
    }
}
exports.ContractEventV0 = ContractEventV0;
class Ed25519PublicKey {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeBytes(this.value);
    }
    static deserialize(deserializer) {
        const value = deserializer.deserializeBytes();
        return new Ed25519PublicKey(value);
    }
}
exports.Ed25519PublicKey = Ed25519PublicKey;
class Ed25519Signature {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeBytes(this.value);
    }
    static deserialize(deserializer) {
        const value = deserializer.deserializeBytes();
        return new Ed25519Signature(value);
    }
}
exports.Ed25519Signature = Ed25519Signature;
class EventKey {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeBytes(this.value);
    }
    static deserialize(deserializer) {
        const value = deserializer.deserializeBytes();
        return new EventKey(value);
    }
}
exports.EventKey = EventKey;
class GeneralMetadata {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return GeneralMetadataVariantGeneralMetadataVersion0.load(deserializer);
            default:
                throw new Error('Unknown variant index for GeneralMetadata: ' + index);
        }
    }
}
exports.GeneralMetadata = GeneralMetadata;
class GeneralMetadataVariantGeneralMetadataVersion0 extends GeneralMetadata {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = GeneralMetadataV0.deserialize(deserializer);
        return new GeneralMetadataVariantGeneralMetadataVersion0(value);
    }
}
exports.GeneralMetadataVariantGeneralMetadataVersion0 = GeneralMetadataVariantGeneralMetadataVersion0;
class GeneralMetadataV0 {
    constructor(to_subaddress, from_subaddress, referenced_event) {
        this.to_subaddress = to_subaddress;
        this.from_subaddress = from_subaddress;
        this.referenced_event = referenced_event;
    }
    serialize(serializer) {
        Helpers.serializeOptionBytes(this.to_subaddress, serializer);
        Helpers.serializeOptionBytes(this.from_subaddress, serializer);
        Helpers.serializeOptionU64(this.referenced_event, serializer);
    }
    static deserialize(deserializer) {
        const to_subaddress = Helpers.deserializeOptionBytes(deserializer);
        const from_subaddress = Helpers.deserializeOptionBytes(deserializer);
        const referenced_event = Helpers.deserializeOptionU64(deserializer);
        return new GeneralMetadataV0(to_subaddress, from_subaddress, referenced_event);
    }
}
exports.GeneralMetadataV0 = GeneralMetadataV0;
class HashValue {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeBytes(this.value);
    }
    static deserialize(deserializer) {
        const value = deserializer.deserializeBytes();
        return new HashValue(value);
    }
}
exports.HashValue = HashValue;
class Identifier {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeStr(this.value);
    }
    static deserialize(deserializer) {
        const value = deserializer.deserializeStr();
        return new Identifier(value);
    }
}
exports.Identifier = Identifier;
class Metadata {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return MetadataVariantUndefined.load(deserializer);
            case 1:
                return MetadataVariantGeneralMetadata.load(deserializer);
            case 2:
                return MetadataVariantTravelRuleMetadata.load(deserializer);
            case 3:
                return MetadataVariantUnstructuredBytesMetadata.load(deserializer);
            default:
                throw new Error('Unknown variant index for Metadata: ' + index);
        }
    }
}
exports.Metadata = Metadata;
class MetadataVariantUndefined extends Metadata {
    constructor() {
        super();
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
    }
    static load(deserializer) {
        return new MetadataVariantUndefined();
    }
}
exports.MetadataVariantUndefined = MetadataVariantUndefined;
class MetadataVariantGeneralMetadata extends Metadata {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(1);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = GeneralMetadata.deserialize(deserializer);
        return new MetadataVariantGeneralMetadata(value);
    }
}
exports.MetadataVariantGeneralMetadata = MetadataVariantGeneralMetadata;
class MetadataVariantTravelRuleMetadata extends Metadata {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(2);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = TravelRuleMetadata.deserialize(deserializer);
        return new MetadataVariantTravelRuleMetadata(value);
    }
}
exports.MetadataVariantTravelRuleMetadata = MetadataVariantTravelRuleMetadata;
class MetadataVariantUnstructuredBytesMetadata extends Metadata {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(3);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = UnstructuredBytesMetadata.deserialize(deserializer);
        return new MetadataVariantUnstructuredBytesMetadata(value);
    }
}
exports.MetadataVariantUnstructuredBytesMetadata = MetadataVariantUnstructuredBytesMetadata;
class Module {
    constructor(code) {
        this.code = code;
    }
    serialize(serializer) {
        serializer.serializeBytes(this.code);
    }
    static deserialize(deserializer) {
        const code = deserializer.deserializeBytes();
        return new Module(code);
    }
}
exports.Module = Module;
class MultiEd25519PublicKey {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeBytes(this.value);
    }
    static deserialize(deserializer) {
        const value = deserializer.deserializeBytes();
        return new MultiEd25519PublicKey(value);
    }
}
exports.MultiEd25519PublicKey = MultiEd25519PublicKey;
class MultiEd25519Signature {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeBytes(this.value);
    }
    static deserialize(deserializer) {
        const value = deserializer.deserializeBytes();
        return new MultiEd25519Signature(value);
    }
}
exports.MultiEd25519Signature = MultiEd25519Signature;
class RawTransaction {
    constructor(sender, sequence_number, payload, max_gas_amount, gas_unit_price, gas_currency_code, expiration_timestamp_secs, chain_id) {
        this.sender = sender;
        this.sequence_number = sequence_number;
        this.payload = payload;
        this.max_gas_amount = max_gas_amount;
        this.gas_unit_price = gas_unit_price;
        this.gas_currency_code = gas_currency_code;
        this.expiration_timestamp_secs = expiration_timestamp_secs;
        this.chain_id = chain_id;
    }
    serialize(serializer) {
        this.sender.serialize(serializer);
        serializer.serializeU64(this.sequence_number);
        this.payload.serialize(serializer);
        serializer.serializeU64(this.max_gas_amount);
        serializer.serializeU64(this.gas_unit_price);
        serializer.serializeStr(this.gas_currency_code);
        serializer.serializeU64(this.expiration_timestamp_secs);
        this.chain_id.serialize(serializer);
    }
    static deserialize(deserializer) {
        const sender = AccountAddress.deserialize(deserializer);
        const sequence_number = deserializer.deserializeU64();
        const payload = TransactionPayload.deserialize(deserializer);
        const max_gas_amount = deserializer.deserializeU64();
        const gas_unit_price = deserializer.deserializeU64();
        const gas_currency_code = deserializer.deserializeStr();
        const expiration_timestamp_secs = deserializer.deserializeU64();
        const chain_id = ChainId.deserialize(deserializer);
        return new RawTransaction(sender, sequence_number, payload, max_gas_amount, gas_unit_price, gas_currency_code, expiration_timestamp_secs, chain_id);
    }
}
exports.RawTransaction = RawTransaction;
class Script {
    constructor(code, ty_args, args) {
        this.code = code;
        this.ty_args = ty_args;
        this.args = args;
    }
    serialize(serializer) {
        serializer.serializeBytes(this.code);
        Helpers.serializeVectorTypeTag(this.ty_args, serializer);
        Helpers.serializeVectorTransactionArgument(this.args, serializer);
    }
    static deserialize(deserializer) {
        const code = deserializer.deserializeBytes();
        const ty_args = Helpers.deserializeVectorTypeTag(deserializer);
        const args = Helpers.deserializeVectorTransactionArgument(deserializer);
        return new Script(code, ty_args, args);
    }
}
exports.Script = Script;
class SignedTransaction {
    constructor(raw_txn, authenticator) {
        this.raw_txn = raw_txn;
        this.authenticator = authenticator;
    }
    serialize(serializer) {
        this.raw_txn.serialize(serializer);
        this.authenticator.serialize(serializer);
    }
    static deserialize(deserializer) {
        const raw_txn = RawTransaction.deserialize(deserializer);
        const authenticator = TransactionAuthenticator.deserialize(deserializer);
        return new SignedTransaction(raw_txn, authenticator);
    }
}
exports.SignedTransaction = SignedTransaction;
class StructTag {
    constructor(address, module, name, type_params) {
        this.address = address;
        this.module = module;
        this.name = name;
        this.type_params = type_params;
    }
    serialize(serializer) {
        this.address.serialize(serializer);
        this.module.serialize(serializer);
        this.name.serialize(serializer);
        Helpers.serializeVectorTypeTag(this.type_params, serializer);
    }
    static deserialize(deserializer) {
        const address = AccountAddress.deserialize(deserializer);
        const module = Identifier.deserialize(deserializer);
        const name = Identifier.deserialize(deserializer);
        const type_params = Helpers.deserializeVectorTypeTag(deserializer);
        return new StructTag(address, module, name, type_params);
    }
}
exports.StructTag = StructTag;
class Transaction {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return TransactionVariantUserTransaction.load(deserializer);
            case 1:
                return TransactionVariantGenesisTransaction.load(deserializer);
            case 2:
                return TransactionVariantBlockMetadata.load(deserializer);
            default:
                throw new Error('Unknown variant index for Transaction: ' + index);
        }
    }
}
exports.Transaction = Transaction;
class TransactionVariantUserTransaction extends Transaction {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = SignedTransaction.deserialize(deserializer);
        return new TransactionVariantUserTransaction(value);
    }
}
exports.TransactionVariantUserTransaction = TransactionVariantUserTransaction;
class TransactionVariantGenesisTransaction extends Transaction {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(1);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = WriteSetPayload.deserialize(deserializer);
        return new TransactionVariantGenesisTransaction(value);
    }
}
exports.TransactionVariantGenesisTransaction = TransactionVariantGenesisTransaction;
class TransactionVariantBlockMetadata extends Transaction {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(2);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = BlockMetadata.deserialize(deserializer);
        return new TransactionVariantBlockMetadata(value);
    }
}
exports.TransactionVariantBlockMetadata = TransactionVariantBlockMetadata;
class TransactionArgument {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return TransactionArgumentVariantU8.load(deserializer);
            case 1:
                return TransactionArgumentVariantU64.load(deserializer);
            case 2:
                return TransactionArgumentVariantU128.load(deserializer);
            case 3:
                return TransactionArgumentVariantAddress.load(deserializer);
            case 4:
                return TransactionArgumentVariantU8Vector.load(deserializer);
            case 5:
                return TransactionArgumentVariantBool.load(deserializer);
            default:
                throw new Error('Unknown variant index for TransactionArgument: ' + index);
        }
    }
}
exports.TransactionArgument = TransactionArgument;
class TransactionArgumentVariantU8 extends TransactionArgument {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
        serializer.serializeU8(this.value);
    }
    static load(deserializer) {
        const value = deserializer.deserializeU8();
        return new TransactionArgumentVariantU8(value);
    }
}
exports.TransactionArgumentVariantU8 = TransactionArgumentVariantU8;
class TransactionArgumentVariantU64 extends TransactionArgument {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(1);
        serializer.serializeU64(this.value);
    }
    static load(deserializer) {
        const value = deserializer.deserializeU64();
        return new TransactionArgumentVariantU64(value);
    }
}
exports.TransactionArgumentVariantU64 = TransactionArgumentVariantU64;
class TransactionArgumentVariantU128 extends TransactionArgument {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(2);
        serializer.serializeU128(this.value);
    }
    static load(deserializer) {
        const value = deserializer.deserializeU128();
        return new TransactionArgumentVariantU128(value);
    }
}
exports.TransactionArgumentVariantU128 = TransactionArgumentVariantU128;
class TransactionArgumentVariantAddress extends TransactionArgument {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(3);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = AccountAddress.deserialize(deserializer);
        return new TransactionArgumentVariantAddress(value);
    }
}
exports.TransactionArgumentVariantAddress = TransactionArgumentVariantAddress;
class TransactionArgumentVariantU8Vector extends TransactionArgument {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(4);
        serializer.serializeBytes(this.value);
    }
    static load(deserializer) {
        const value = deserializer.deserializeBytes();
        return new TransactionArgumentVariantU8Vector(value);
    }
}
exports.TransactionArgumentVariantU8Vector = TransactionArgumentVariantU8Vector;
class TransactionArgumentVariantBool extends TransactionArgument {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(5);
        serializer.serializeBool(this.value);
    }
    static load(deserializer) {
        const value = deserializer.deserializeBool();
        return new TransactionArgumentVariantBool(value);
    }
}
exports.TransactionArgumentVariantBool = TransactionArgumentVariantBool;
class TransactionAuthenticator {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return TransactionAuthenticatorVariantEd25519.load(deserializer);
            case 1:
                return TransactionAuthenticatorVariantMultiEd25519.load(deserializer);
            default:
                throw new Error('Unknown variant index for TransactionAuthenticator: ' + index);
        }
    }
}
exports.TransactionAuthenticator = TransactionAuthenticator;
class TransactionAuthenticatorVariantEd25519 extends TransactionAuthenticator {
    constructor(public_key, signature) {
        super();
        this.public_key = public_key;
        this.signature = signature;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
        this.public_key.serialize(serializer);
        this.signature.serialize(serializer);
    }
    static load(deserializer) {
        const public_key = Ed25519PublicKey.deserialize(deserializer);
        const signature = Ed25519Signature.deserialize(deserializer);
        return new TransactionAuthenticatorVariantEd25519(public_key, signature);
    }
}
exports.TransactionAuthenticatorVariantEd25519 = TransactionAuthenticatorVariantEd25519;
class TransactionAuthenticatorVariantMultiEd25519 extends TransactionAuthenticator {
    constructor(public_key, signature) {
        super();
        this.public_key = public_key;
        this.signature = signature;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(1);
        this.public_key.serialize(serializer);
        this.signature.serialize(serializer);
    }
    static load(deserializer) {
        const public_key = MultiEd25519PublicKey.deserialize(deserializer);
        const signature = MultiEd25519Signature.deserialize(deserializer);
        return new TransactionAuthenticatorVariantMultiEd25519(public_key, signature);
    }
}
exports.TransactionAuthenticatorVariantMultiEd25519 = TransactionAuthenticatorVariantMultiEd25519;
class TransactionPayload {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return TransactionPayloadVariantWriteSet.load(deserializer);
            case 1:
                return TransactionPayloadVariantScript.load(deserializer);
            case 2:
                return TransactionPayloadVariantModule.load(deserializer);
            default:
                throw new Error('Unknown variant index for TransactionPayload: ' + index);
        }
    }
}
exports.TransactionPayload = TransactionPayload;
class TransactionPayloadVariantWriteSet extends TransactionPayload {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = WriteSetPayload.deserialize(deserializer);
        return new TransactionPayloadVariantWriteSet(value);
    }
}
exports.TransactionPayloadVariantWriteSet = TransactionPayloadVariantWriteSet;
class TransactionPayloadVariantScript extends TransactionPayload {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(1);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = Script.deserialize(deserializer);
        return new TransactionPayloadVariantScript(value);
    }
}
exports.TransactionPayloadVariantScript = TransactionPayloadVariantScript;
class TransactionPayloadVariantModule extends TransactionPayload {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(2);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = Module.deserialize(deserializer);
        return new TransactionPayloadVariantModule(value);
    }
}
exports.TransactionPayloadVariantModule = TransactionPayloadVariantModule;
class TravelRuleMetadata {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return TravelRuleMetadataVariantTravelRuleMetadataVersion0.load(deserializer);
            default:
                throw new Error('Unknown variant index for TravelRuleMetadata: ' + index);
        }
    }
}
exports.TravelRuleMetadata = TravelRuleMetadata;
class TravelRuleMetadataVariantTravelRuleMetadataVersion0 extends TravelRuleMetadata {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = TravelRuleMetadataV0.deserialize(deserializer);
        return new TravelRuleMetadataVariantTravelRuleMetadataVersion0(value);
    }
}
exports.TravelRuleMetadataVariantTravelRuleMetadataVersion0 = TravelRuleMetadataVariantTravelRuleMetadataVersion0;
class TravelRuleMetadataV0 {
    constructor(off_chain_reference_id) {
        this.off_chain_reference_id = off_chain_reference_id;
    }
    serialize(serializer) {
        Helpers.serializeOptionStr(this.off_chain_reference_id, serializer);
    }
    static deserialize(deserializer) {
        const off_chain_reference_id = Helpers.deserializeOptionStr(deserializer);
        return new TravelRuleMetadataV0(off_chain_reference_id);
    }
}
exports.TravelRuleMetadataV0 = TravelRuleMetadataV0;
class TypeTag {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return TypeTagVariantBool.load(deserializer);
            case 1:
                return TypeTagVariantU8.load(deserializer);
            case 2:
                return TypeTagVariantU64.load(deserializer);
            case 3:
                return TypeTagVariantU128.load(deserializer);
            case 4:
                return TypeTagVariantAddress.load(deserializer);
            case 5:
                return TypeTagVariantSigner.load(deserializer);
            case 6:
                return TypeTagVariantVector.load(deserializer);
            case 7:
                return TypeTagVariantStruct.load(deserializer);
            default:
                throw new Error('Unknown variant index for TypeTag: ' + index);
        }
    }
}
exports.TypeTag = TypeTag;
class TypeTagVariantBool extends TypeTag {
    constructor() {
        super();
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
    }
    static load(deserializer) {
        return new TypeTagVariantBool();
    }
}
exports.TypeTagVariantBool = TypeTagVariantBool;
class TypeTagVariantU8 extends TypeTag {
    constructor() {
        super();
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(1);
    }
    static load(deserializer) {
        return new TypeTagVariantU8();
    }
}
exports.TypeTagVariantU8 = TypeTagVariantU8;
class TypeTagVariantU64 extends TypeTag {
    constructor() {
        super();
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(2);
    }
    static load(deserializer) {
        return new TypeTagVariantU64();
    }
}
exports.TypeTagVariantU64 = TypeTagVariantU64;
class TypeTagVariantU128 extends TypeTag {
    constructor() {
        super();
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(3);
    }
    static load(deserializer) {
        return new TypeTagVariantU128();
    }
}
exports.TypeTagVariantU128 = TypeTagVariantU128;
class TypeTagVariantAddress extends TypeTag {
    constructor() {
        super();
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(4);
    }
    static load(deserializer) {
        return new TypeTagVariantAddress();
    }
}
exports.TypeTagVariantAddress = TypeTagVariantAddress;
class TypeTagVariantSigner extends TypeTag {
    constructor() {
        super();
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(5);
    }
    static load(deserializer) {
        return new TypeTagVariantSigner();
    }
}
exports.TypeTagVariantSigner = TypeTagVariantSigner;
class TypeTagVariantVector extends TypeTag {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(6);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = TypeTag.deserialize(deserializer);
        return new TypeTagVariantVector(value);
    }
}
exports.TypeTagVariantVector = TypeTagVariantVector;
class TypeTagVariantStruct extends TypeTag {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(7);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = StructTag.deserialize(deserializer);
        return new TypeTagVariantStruct(value);
    }
}
exports.TypeTagVariantStruct = TypeTagVariantStruct;
class UnstructuredBytesMetadata {
    constructor(metadata) {
        this.metadata = metadata;
    }
    serialize(serializer) {
        Helpers.serializeOptionBytes(this.metadata, serializer);
    }
    static deserialize(deserializer) {
        const metadata = Helpers.deserializeOptionBytes(deserializer);
        return new UnstructuredBytesMetadata(metadata);
    }
}
exports.UnstructuredBytesMetadata = UnstructuredBytesMetadata;
class WriteOp {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return WriteOpVariantDeletion.load(deserializer);
            case 1:
                return WriteOpVariantValue.load(deserializer);
            default:
                throw new Error('Unknown variant index for WriteOp: ' + index);
        }
    }
}
exports.WriteOp = WriteOp;
class WriteOpVariantDeletion extends WriteOp {
    constructor() {
        super();
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
    }
    static load(deserializer) {
        return new WriteOpVariantDeletion();
    }
}
exports.WriteOpVariantDeletion = WriteOpVariantDeletion;
class WriteOpVariantValue extends WriteOp {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(1);
        serializer.serializeBytes(this.value);
    }
    static load(deserializer) {
        const value = deserializer.deserializeBytes();
        return new WriteOpVariantValue(value);
    }
}
exports.WriteOpVariantValue = WriteOpVariantValue;
class WriteSet {
    constructor(value) {
        this.value = value;
    }
    serialize(serializer) {
        this.value.serialize(serializer);
    }
    static deserialize(deserializer) {
        const value = WriteSetMut.deserialize(deserializer);
        return new WriteSet(value);
    }
}
exports.WriteSet = WriteSet;
class WriteSetMut {
    constructor(write_set) {
        this.write_set = write_set;
    }
    serialize(serializer) {
        Helpers.serializeVectorTuple2AccessPathWriteOp(this.write_set, serializer);
    }
    static deserialize(deserializer) {
        const write_set = Helpers.deserializeVectorTuple2AccessPathWriteOp(deserializer);
        return new WriteSetMut(write_set);
    }
}
exports.WriteSetMut = WriteSetMut;
class WriteSetPayload {
    static deserialize(deserializer) {
        const index = deserializer.deserializeVariantIndex();
        switch (index) {
            case 0:
                return WriteSetPayloadVariantDirect.load(deserializer);
            case 1:
                return WriteSetPayloadVariantScript.load(deserializer);
            default:
                throw new Error('Unknown variant index for WriteSetPayload: ' + index);
        }
    }
}
exports.WriteSetPayload = WriteSetPayload;
class WriteSetPayloadVariantDirect extends WriteSetPayload {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(0);
        this.value.serialize(serializer);
    }
    static load(deserializer) {
        const value = ChangeSet.deserialize(deserializer);
        return new WriteSetPayloadVariantDirect(value);
    }
}
exports.WriteSetPayloadVariantDirect = WriteSetPayloadVariantDirect;
class WriteSetPayloadVariantScript extends WriteSetPayload {
    constructor(execute_as, script) {
        super();
        this.execute_as = execute_as;
        this.script = script;
    }
    serialize(serializer) {
        serializer.serializeVariantIndex(1);
        this.execute_as.serialize(serializer);
        this.script.serialize(serializer);
    }
    static load(deserializer) {
        const execute_as = AccountAddress.deserialize(deserializer);
        const script = Script.deserialize(deserializer);
        return new WriteSetPayloadVariantScript(execute_as, script);
    }
}
exports.WriteSetPayloadVariantScript = WriteSetPayloadVariantScript;
class Helpers {
    static serializeArray16U8Array(value, serializer) {
        value.forEach((item) => {
            serializer.serializeU8(item[0]);
        });
    }
    static deserializeArray16U8Array(deserializer) {
        const list = [];
        for (let i = 0; i < 16; i++) {
            list.push([deserializer.deserializeU8()]);
        }
        return list;
    }
    static serializeOptionBytes(value, serializer) {
        if (value) {
            serializer.serializeOptionTag(true);
            serializer.serializeBytes(value);
        }
        else {
            serializer.serializeOptionTag(false);
        }
    }
    static deserializeOptionBytes(deserializer) {
        const tag = deserializer.deserializeOptionTag();
        if (!tag) {
            return null;
        }
        else {
            return deserializer.deserializeBytes();
        }
    }
    static serializeOptionStr(value, serializer) {
        if (value) {
            serializer.serializeOptionTag(true);
            serializer.serializeStr(value);
        }
        else {
            serializer.serializeOptionTag(false);
        }
    }
    static deserializeOptionStr(deserializer) {
        const tag = deserializer.deserializeOptionTag();
        if (!tag) {
            return null;
        }
        else {
            return deserializer.deserializeStr();
        }
    }
    static serializeOptionU64(value, serializer) {
        if (value) {
            serializer.serializeOptionTag(true);
            serializer.serializeU64(value);
        }
        else {
            serializer.serializeOptionTag(false);
        }
    }
    static deserializeOptionU64(deserializer) {
        const tag = deserializer.deserializeOptionTag();
        if (!tag) {
            return null;
        }
        else {
            return deserializer.deserializeU64();
        }
    }
    static serializeTuple2AccessPathWriteOp(value, serializer) {
        value[0].serialize(serializer);
        value[1].serialize(serializer);
    }
    static deserializeTuple2AccessPathWriteOp(deserializer) {
        return [
            AccessPath.deserialize(deserializer),
            WriteOp.deserialize(deserializer),
        ];
    }
    static serializeVectorAccountAddress(value, serializer) {
        serializer.serializeLen(value.length);
        value.forEach((item) => {
            item.serialize(serializer);
        });
    }
    static deserializeVectorAccountAddress(deserializer) {
        const length = deserializer.deserializeLen();
        const list = [];
        for (let i = 0; i < length; i++) {
            list.push(AccountAddress.deserialize(deserializer));
        }
        return list;
    }
    static serializeVectorContractEvent(value, serializer) {
        serializer.serializeLen(value.length);
        value.forEach((item) => {
            item.serialize(serializer);
        });
    }
    static deserializeVectorContractEvent(deserializer) {
        const length = deserializer.deserializeLen();
        const list = [];
        for (let i = 0; i < length; i++) {
            list.push(ContractEvent.deserialize(deserializer));
        }
        return list;
    }
    static serializeVectorTransactionArgument(value, serializer) {
        serializer.serializeLen(value.length);
        value.forEach((item) => {
            item.serialize(serializer);
        });
    }
    static deserializeVectorTransactionArgument(deserializer) {
        const length = deserializer.deserializeLen();
        const list = [];
        for (let i = 0; i < length; i++) {
            list.push(TransactionArgument.deserialize(deserializer));
        }
        return list;
    }
    static serializeVectorTypeTag(value, serializer) {
        serializer.serializeLen(value.length);
        value.forEach((item) => {
            item.serialize(serializer);
        });
    }
    static deserializeVectorTypeTag(deserializer) {
        const length = deserializer.deserializeLen();
        const list = [];
        for (let i = 0; i < length; i++) {
            list.push(TypeTag.deserialize(deserializer));
        }
        return list;
    }
    static serializeVectorTuple2AccessPathWriteOp(value, serializer) {
        serializer.serializeLen(value.length);
        value.forEach((item) => {
            Helpers.serializeTuple2AccessPathWriteOp(item, serializer);
        });
    }
    static deserializeVectorTuple2AccessPathWriteOp(deserializer) {
        const length = deserializer.deserializeLen();
        const list = [];
        for (let i = 0; i < length; i++) {
            list.push(Helpers.deserializeTuple2AccessPathWriteOp(deserializer));
        }
        return list;
    }
}
exports.Helpers = Helpers;
