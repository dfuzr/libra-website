var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { executeSubmit } from './';
import LibraUtils from '../../../libraUtils';
import { ChainId, Identifier, RawTransaction, StructTag, TransactionPayloadVariantScript, } from '../../../lcs/libraTypes';
import { Stdlib, Types } from '../../../lcs/libraStdlib';
import { bytesFromHexString } from '../../../utils/bytes';
export function convertArg(arg, argvValue) {
    var _a;
    const typeTagDef = arg.type;
    switch (typeTagDef.type) {
        case Types.Boolean: {
            if (argvValue == 'true') {
                return true;
            }
            else if (argvValue == 'false') {
                return false;
            }
            else {
                throw Error(`Invalid boolean value ${argvValue}`);
            }
        }
        case Types.U8: {
            return parseInt(argvValue);
        }
        case Types.U64: {
            return BigInt(argvValue);
        }
        case Types.U128: {
            return BigInt(argvValue);
        }
        case Types.Address: {
            return LibraUtils.makeAccountAddress(argvValue);
        }
        case Types.Array: {
            const arrayType = (_a = arg.type.arrayType) === null || _a === void 0 ? void 0 : _a.type;
            switch (arrayType) {
                case Types.U8: {
                    return bytesFromHexString(argvValue);
                }
                default: {
                    throw Error(`Unsupported array type ${arrayType}`);
                }
            }
        }
        case Types.Struct: {
            const list = [];
            const resources = argvValue.split(',');
            for (let i = 0; i < resources.length; i++) {
                const details = resources[i].split('_');
                const structTag = new StructTag(LibraUtils.makeAccountAddress(details[0]), new Identifier(details[1]), new Identifier(details[2]), []
                //TODO add TypeTag
                // [details[3] as unknown as TypeTag]
                );
                list.push(structTag);
            }
            return list;
        }
    }
}
function createGenericTransaction(argv, type) {
    const scriptDef = Stdlib.ScriptArgs[type];
    const args = [];
    if (Object.prototype.hasOwnProperty.call(argv, 'resources')) {
        for (const resource in argv.resources) {
            args.push(resource);
        }
    }
    addArgs(scriptDef, argv, args);
    const script = argv.stdlibEncodeFunction(...args);
    return new RawTransaction(LibraUtils.makeAccountAddress(argv.senderAddress), argv.sequenceNumber, new TransactionPayloadVariantScript(script), argv.maxGasAmount, argv.gasUnitPrice, argv.gasCurrency, argv.expirationTime, new ChainId(argv.network));
}
function addArgs(scriptDef, argv, args) {
    for (const arg of scriptDef.args) {
        const argName = arg.name;
        if (Object.prototype.hasOwnProperty.call(argv, argName)) {
            args.push(argv[argName]);
        }
    }
}
export function submitGenericTypeTransaction(type, argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const scriptDef = Stdlib.ScriptArgs[type];
        argv.stdlibEncodeFunction = scriptDef.stdlibEncodeFunction;
        for (const arg of scriptDef.args) {
            const argName = arg.name;
            if (Object.prototype.hasOwnProperty.call(argv, argName)) {
                argv[argName] = convertArg(arg, argv[argName]);
            }
        }
        const transaction = createGenericTransaction(argv, type);
        yield executeSubmit(argv, transaction);
    });
}
