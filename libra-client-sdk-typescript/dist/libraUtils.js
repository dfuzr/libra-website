"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bech32_1 = __importDefault(require("bech32"));
const signer_1 = require("./utils/signer");
const accountKeys_1 = __importDefault(require("./account/accountKeys"));
const constants_1 = require("./constants");
const bytes_1 = require("./utils/bytes");
const libraTypes_1 = require("./lcs/libraTypes");
const lcsSerializer_1 = require("./lcs/lcs/lcsSerializer");
const libraStdlib_1 = require("./lcs/libraStdlib");
const intent_1 = __importDefault(require("./utils/intent"));
const sha3_1 = require("sha3");
const util_1 = __importDefault(require("util"));
class LibraUtils {
    static generateAccountKeys(seed) {
        const keyPair = signer_1.Signer.generateKeyPair(seed);
        return new accountKeys_1.default(keyPair);
    }
    static createAddCurrencyToAccountTransaction(sender, sequenceNumber, currency, gasCurrency, gasUnitPrice, maxGasAmount, expirationTimestampSecs, network) {
        const currencyTag = LibraUtils.makeCurrencyTypeTag(currency);
        const script = libraStdlib_1.Stdlib.encodeAddCurrencyToAccountScript(currencyTag);
        return new libraTypes_1.RawTransaction(LibraUtils.makeAccountAddress(sender), sequenceNumber, new libraTypes_1.TransactionPayloadVariantScript(script), maxGasAmount, gasUnitPrice, gasCurrency, expirationTimestampSecs, new libraTypes_1.ChainId(network));
    }
    static createGeneralMetadata(receiverSubaddress, senderSubaddress, referenceEventNumber) {
        const serializer = new lcsSerializer_1.LcsSerializer();
        const metadata = new libraTypes_1.MetadataVariantGeneralMetadata(new libraTypes_1.GeneralMetadataVariantGeneralMetadataVersion0(new libraTypes_1.GeneralMetadataV0(receiverSubaddress ? bytes_1.bytesToBuffer(receiverSubaddress) : null, senderSubaddress ? bytes_1.bytesToBuffer(senderSubaddress) : null, referenceEventNumber !== null && referenceEventNumber !== void 0 ? referenceEventNumber : null)));
        metadata.serialize(serializer);
        const signature = new Uint8Array();
        return [serializer.getBytes(), signature];
    }
    static signTravelRuleMetadata(metadata, sender, amount, privateKey) {
        const sigSerializer = new lcsSerializer_1.LcsSerializer();
        const address = LibraUtils.makeAccountAddress(sender);
        address.serialize(sigSerializer);
        sigSerializer.serializeU64(amount);
        const dualAttestationMessage = bytes_1.concat(metadata, bytes_1.concat(sigSerializer.getBytes(), this.textEncoder.encode('@@$$LIBRA_ATTEST$$@@')));
        return signer_1.Signer.sign(privateKey, dualAttestationMessage);
    }
    static createTravelRuleMetadata(offChainReferenceId) {
        const serializer = new lcsSerializer_1.LcsSerializer();
        const metadata = new libraTypes_1.MetadataVariantTravelRuleMetadata(new libraTypes_1.TravelRuleMetadataVariantTravelRuleMetadataVersion0(new libraTypes_1.TravelRuleMetadataV0(offChainReferenceId !== null && offChainReferenceId !== void 0 ? offChainReferenceId : null)));
        metadata.serialize(serializer);
        return serializer.getBytes();
    }
    static createP2PTransaction(sender, sequenceNumber, currency, receiver, amount, gasCurrency, gasUnitPrice, maxGasAmount, expirationTimestampSecs, network, metadata, metadataSignature) {
        const currencyTag = LibraUtils.makeCurrencyTypeTag(currency);
        const script = libraStdlib_1.Stdlib.encodePeerToPeerWithMetadataScript(currencyTag, LibraUtils.makeAccountAddress(receiver), amount, metadata, metadataSignature);
        return new libraTypes_1.RawTransaction(LibraUtils.makeAccountAddress(sender), sequenceNumber, new libraTypes_1.TransactionPayloadVariantScript(script), maxGasAmount, gasUnitPrice, gasCurrency, expirationTimestampSecs, new libraTypes_1.ChainId(network));
    }
    static signTransaction(rawTransaction, accountKeys) {
        const txSerializer = new lcsSerializer_1.LcsSerializer();
        rawTransaction.serialize(txSerializer);
        const signature = signer_1.Signer.signRawTransaction(bytes_1.bytesToBuffer(accountKeys.privateKey), txSerializer.getBytes());
        return new libraTypes_1.SignedTransaction(rawTransaction, new libraTypes_1.TransactionAuthenticatorVariantEd25519(new libraTypes_1.Ed25519PublicKey(bytes_1.bytesToBuffer(accountKeys.publicKey)), new libraTypes_1.Ed25519Signature(signature)));
    }
    static hashTransaction(signedTxBytes) {
        const prefixHash = new sha3_1.SHA3(256);
        prefixHash.update('LIBRA::Transaction');
        const prefix = prefixHash.digest();
        const transactionHash = new sha3_1.SHA3(256);
        transactionHash.update(prefix);
        transactionHash.update(Buffer.from([0]));
        transactionHash.update(Buffer.from(signedTxBytes));
        return transactionHash.digest().toString('hex');
    }
    static encodeAddress(address, subAddress, hrp = 'tlb') {
        const addressBytes = bytes_1.bytesToBuffer(address);
        const subAddressBytes = bytes_1.bytesToBuffer(subAddress !== null && subAddress !== void 0 ? subAddress : constants_1.zeroSubAddress);
        if (addressBytes.length != constants_1.addressBytesSize) {
            throw new TypeError(`Address size should be ${constants_1.addressBytesSize} bytes, got: ${addressBytes.length}`);
        }
        if (subAddressBytes.length != constants_1.subAddressBytesSize) {
            throw new TypeError(`Subaddress size should be ${constants_1.subAddressBytesSize} bytes, got: ${subAddressBytes.length}`);
        }
        const mergedAddressBytes = bytes_1.concat(addressBytes, subAddressBytes);
        const words = bech32_1.default.toWords(mergedAddressBytes);
        words.unshift(constants_1.bech32AddressVersion);
        return bech32_1.default.encode(hrp, words);
    }
    static decodeAddress(hrp, bech32Address) {
        if (bech32Address.length !== constants_1.bech32AddressLength) {
            throw new TypeError(`Bech32 address size should be ${constants_1.bech32AddressLength}, got: ${bech32Address.length}`);
        }
        const { prefix, words } = bech32_1.default.decode(bech32Address);
        if (prefix !== hrp) {
            throw new TypeError(`Wrong Libra address Bech32 human readable part (prefix): requested ${hrp}, got ${prefix}`);
        }
        const addressVersion = words[0];
        const mergedAddress = new Uint8Array(bech32_1.default.fromWords(words.slice(1)));
        if (constants_1.bech32AddressVersion !== addressVersion) {
            throw new TypeError(`Version mismatch. Expected ${constants_1.bech32AddressVersion}, got ${addressVersion}`);
        }
        const address = bytes_1.bytesToHexString(mergedAddress.slice(0, constants_1.addressBytesSize));
        const subAddress = bytes_1.bytesToHexString(mergedAddress.slice(constants_1.addressBytesSize));
        return [address, subAddress.length ? subAddress : undefined];
    }
    static encodeIntent(intent) {
        const bech32Address = LibraUtils.encodeAddress(intent.address, intent.subAddress, intent.hrp);
        const url = new URL(`${constants_1.libraScheme}://${bech32Address}`);
        if (intent.currency) {
            url.searchParams.set('c', intent.currency);
        }
        if (intent.amount) {
            url.searchParams.set('am', intent.amount.toString());
        }
        return url;
    }
    static decodeIntent(hrp, intent) {
        const protocol = intent.protocol.slice(0, -1);
        if (protocol !== constants_1.libraScheme) {
            throw new TypeError(`invalid intent scheme: ${protocol}`);
        }
        const [address, subAddress] = LibraUtils.decodeAddress(hrp, intent.hostname);
        let currency;
        if (intent.searchParams.has('c')) {
            currency = intent.searchParams.get('c');
        }
        let amount;
        if (intent.searchParams.has('am')) {
            amount = parseInt(intent.searchParams.get('am'));
        }
        return new intent_1.default(hrp, address, subAddress, currency, amount);
    }
    static makeCurrencyTypeTag(currency) {
        const structTag = new libraTypes_1.StructTag(LibraUtils.makeAccountAddress(constants_1.coreCodeAddressHex), new libraTypes_1.Identifier(currency), new libraTypes_1.Identifier(currency), []);
        return new libraTypes_1.TypeTagVariantStruct(structTag);
    }
    static makeAccountAddress(address) {
        const asTuple = [];
        bytes_1.bytesToBuffer(address).forEach((value) => asTuple.push([value]));
        return new libraTypes_1.AccountAddress(asTuple);
    }
    static parseAccountAddress(address) {
        const addressBuffer = new Uint8Array(address.value.length);
        let index = 0;
        for (const value of address.value) {
            const [octet] = value;
            addressBuffer[index] = octet;
            ++index;
        }
        return addressBuffer;
    }
    static matchScriptByCode(code) {
        const codeHex = bytes_1.bytesToHexString(code);
        const scripts = Object.entries(libraStdlib_1.Stdlib.ScriptArgs).filter(([, scriptDef]) => {
            const name = `${scriptDef.codeName}_CODE`;
            const stdCode = bytes_1.bytesToHexString(libraStdlib_1.Stdlib[name]);
            return stdCode === codeHex;
        });
        if (scripts.length < 1) {
            return undefined;
        }
        if (scripts.length > 1) {
            throw new Error(`More than one script matches ${codeHex}`);
        }
        const [, def] = scripts[0];
        return def;
    }
}
exports.default = LibraUtils;
LibraUtils.textEncoder = typeof window === 'undefined' ? new util_1.default.TextEncoder() : new TextEncoder();
