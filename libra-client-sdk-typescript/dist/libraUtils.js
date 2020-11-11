import bech32 from 'bech32';
import { Signer } from './utils/signer';
import AccountKeys from './account/accountKeys';
import { addressBytesSize, bech32AddressLength, bech32AddressVersion, coreCodeAddressHex, libraScheme, subAddressBytesSize, zeroSubAddress, } from './constants';
import { bytesToBuffer, bytesToHexString, concat } from './utils/bytes';
import { AccountAddress, ChainId, Ed25519PublicKey, Ed25519Signature, GeneralMetadataV0, GeneralMetadataVariantGeneralMetadataVersion0, Identifier, MetadataVariantGeneralMetadata, MetadataVariantTravelRuleMetadata, RawTransaction, SignedTransaction, StructTag, TransactionAuthenticatorVariantEd25519, TransactionPayloadVariantScript, TravelRuleMetadataV0, TravelRuleMetadataVariantTravelRuleMetadataVersion0, TypeTagVariantStruct, } from './lcs/libraTypes';
import { LcsSerializer } from './lcs/lcs/lcsSerializer';
import { Stdlib } from './lcs/libraStdlib';
import Intent from './utils/intent';
import { SHA3 } from 'sha3';
import util from 'util';
export default class LibraUtils {
    static generateAccountKeys(seed) {
        const keyPair = Signer.generateKeyPair(seed);
        return new AccountKeys(keyPair);
    }
    static createAddCurrencyToAccountTransaction(sender, sequenceNumber, currency, gasCurrency, gasUnitPrice, maxGasAmount, expirationTimestampSecs, network) {
        const currencyTag = LibraUtils.makeCurrencyTypeTag(currency);
        const script = Stdlib.encodeAddCurrencyToAccountScript(currencyTag);
        return new RawTransaction(LibraUtils.makeAccountAddress(sender), sequenceNumber, new TransactionPayloadVariantScript(script), maxGasAmount, gasUnitPrice, gasCurrency, expirationTimestampSecs, new ChainId(network));
    }
    static createGeneralMetadata(receiverSubaddress, senderSubaddress, referenceEventNumber) {
        const serializer = new LcsSerializer();
        const metadata = new MetadataVariantGeneralMetadata(new GeneralMetadataVariantGeneralMetadataVersion0(new GeneralMetadataV0(receiverSubaddress ? bytesToBuffer(receiverSubaddress) : null, senderSubaddress ? bytesToBuffer(senderSubaddress) : null, referenceEventNumber !== null && referenceEventNumber !== void 0 ? referenceEventNumber : null)));
        metadata.serialize(serializer);
        const signature = new Uint8Array();
        return [serializer.getBytes(), signature];
    }
    static signTravelRuleMetadata(metadata, sender, amount, privateKey) {
        const sigSerializer = new LcsSerializer();
        const address = LibraUtils.makeAccountAddress(sender);
        address.serialize(sigSerializer);
        sigSerializer.serializeU64(amount);
        const dualAttestationMessage = concat(metadata, concat(sigSerializer.getBytes(), this.textEncoder.encode('@@$$LIBRA_ATTEST$$@@')));
        return Signer.sign(privateKey, dualAttestationMessage);
    }
    static createTravelRuleMetadata(offChainReferenceId) {
        const serializer = new LcsSerializer();
        const metadata = new MetadataVariantTravelRuleMetadata(new TravelRuleMetadataVariantTravelRuleMetadataVersion0(new TravelRuleMetadataV0(offChainReferenceId !== null && offChainReferenceId !== void 0 ? offChainReferenceId : null)));
        metadata.serialize(serializer);
        return serializer.getBytes();
    }
    static createP2PTransaction(sender, sequenceNumber, currency, receiver, amount, gasCurrency, gasUnitPrice, maxGasAmount, expirationTimestampSecs, network, metadata, metadataSignature) {
        const currencyTag = LibraUtils.makeCurrencyTypeTag(currency);
        const script = Stdlib.encodePeerToPeerWithMetadataScript(currencyTag, LibraUtils.makeAccountAddress(receiver), amount, metadata, metadataSignature);
        return new RawTransaction(LibraUtils.makeAccountAddress(sender), sequenceNumber, new TransactionPayloadVariantScript(script), maxGasAmount, gasUnitPrice, gasCurrency, expirationTimestampSecs, new ChainId(network));
    }
    static signTransaction(rawTransaction, accountKeys) {
        const txSerializer = new LcsSerializer();
        rawTransaction.serialize(txSerializer);
        const signature = Signer.signRawTransaction(bytesToBuffer(accountKeys.privateKey), txSerializer.getBytes());
        return new SignedTransaction(rawTransaction, new TransactionAuthenticatorVariantEd25519(new Ed25519PublicKey(bytesToBuffer(accountKeys.publicKey)), new Ed25519Signature(signature)));
    }
    static hashTransaction(signedTxBytes) {
        const prefixHash = new SHA3(256);
        prefixHash.update('LIBRA::Transaction');
        const prefix = prefixHash.digest();
        const transactionHash = new SHA3(256);
        transactionHash.update(prefix);
        transactionHash.update(Buffer.from([0]));
        transactionHash.update(Buffer.from(signedTxBytes));
        return transactionHash.digest().toString('hex');
    }
    static encodeAddress(address, subAddress, hrp = 'tlb') {
        const addressBytes = bytesToBuffer(address);
        const subAddressBytes = bytesToBuffer(subAddress !== null && subAddress !== void 0 ? subAddress : zeroSubAddress);
        if (addressBytes.length != addressBytesSize) {
            throw new TypeError(`Address size should be ${addressBytesSize} bytes, got: ${addressBytes.length}`);
        }
        if (subAddressBytes.length != subAddressBytesSize) {
            throw new TypeError(`Subaddress size should be ${subAddressBytesSize} bytes, got: ${subAddressBytes.length}`);
        }
        const mergedAddressBytes = concat(addressBytes, subAddressBytes);
        const words = bech32.toWords(mergedAddressBytes);
        words.unshift(bech32AddressVersion);
        return bech32.encode(hrp, words);
    }
    static decodeAddress(hrp, bech32Address) {
        if (bech32Address.length !== bech32AddressLength) {
            throw new TypeError(`Bech32 address size should be ${bech32AddressLength}, got: ${bech32Address.length}`);
        }
        const { prefix, words } = bech32.decode(bech32Address);
        if (prefix !== hrp) {
            throw new TypeError(`Wrong Libra address Bech32 human readable part (prefix): requested ${hrp}, got ${prefix}`);
        }
        const addressVersion = words[0];
        const mergedAddress = new Uint8Array(bech32.fromWords(words.slice(1)));
        if (bech32AddressVersion !== addressVersion) {
            throw new TypeError(`Version mismatch. Expected ${bech32AddressVersion}, got ${addressVersion}`);
        }
        const address = bytesToHexString(mergedAddress.slice(0, addressBytesSize));
        const subAddress = bytesToHexString(mergedAddress.slice(addressBytesSize));
        return [address, subAddress.length ? subAddress : undefined];
    }
    static encodeIntent(intent) {
        const bech32Address = LibraUtils.encodeAddress(intent.address, intent.subAddress, intent.hrp);
        const url = new URL(`${libraScheme}://${bech32Address}`);
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
        if (protocol !== libraScheme) {
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
        return new Intent(hrp, address, subAddress, currency, amount);
    }
    static makeCurrencyTypeTag(currency) {
        const structTag = new StructTag(LibraUtils.makeAccountAddress(coreCodeAddressHex), new Identifier(currency), new Identifier(currency), []);
        return new TypeTagVariantStruct(structTag);
    }
    static makeAccountAddress(address) {
        const asTuple = [];
        bytesToBuffer(address).forEach((value) => asTuple.push([value]));
        return new AccountAddress(asTuple);
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
        const codeHex = bytesToHexString(code);
        const scripts = Object.entries(Stdlib.ScriptArgs).filter(([, scriptDef]) => {
            const name = `${scriptDef.codeName}_CODE`;
            const stdCode = bytesToHexString(Stdlib[name]);
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
LibraUtils.textEncoder = typeof window === 'undefined' ? new util.TextEncoder() : new TextEncoder();
