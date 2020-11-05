"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitGenericTypeTransaction = exports.convertArg = void 0;
const _1 = require("./");
const libraUtils_1 = __importDefault(require("../../../libraUtils"));
const libraTypes_1 = require("../../../lcs/libraTypes");
const libraStdlib_1 = require("../../../lcs/libraStdlib");
const bytes_1 = require("../../../utils/bytes");
function convertArg(arg, argvValue) {
    var _a;
    const typeTagDef = arg.type;
    switch (typeTagDef.type) {
        case libraStdlib_1.Types.Boolean: {
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
        case libraStdlib_1.Types.U8: {
            return parseInt(argvValue);
        }
        case libraStdlib_1.Types.U64: {
            return BigInt(argvValue);
        }
        case libraStdlib_1.Types.U128: {
            return BigInt(argvValue);
        }
        case libraStdlib_1.Types.Address: {
            return libraUtils_1.default.makeAccountAddress(argvValue);
        }
        case libraStdlib_1.Types.Array: {
            const arrayType = (_a = arg.type.arrayType) === null || _a === void 0 ? void 0 : _a.type;
            switch (arrayType) {
                case libraStdlib_1.Types.U8: {
                    return bytes_1.bytesFromHexString(argvValue);
                }
                default: {
                    throw Error(`Unsupported array type ${arrayType}`);
                }
            }
        }
        case libraStdlib_1.Types.Struct: {
            const list = [];
            const resources = argvValue.split(',');
            for (let i = 0; i < resources.length; i++) {
                const details = resources[i].split('_');
                const structTag = new libraTypes_1.StructTag(libraUtils_1.default.makeAccountAddress(details[0]), new libraTypes_1.Identifier(details[1]), new libraTypes_1.Identifier(details[2]), []
                //TODO add TypeTag
                // [details[3] as unknown as TypeTag]
                );
                list.push(structTag);
            }
            return list;
        }
    }
}
exports.convertArg = convertArg;
function createGenericTransaction(argv, type) {
    const scriptDef = libraStdlib_1.Stdlib.ScriptArgs[type];
    const args = [];
    if (Object.prototype.hasOwnProperty.call(argv, 'resources')) {
        for (const resource in argv.resources) {
            args.push(resource);
        }
    }
    addArgs(scriptDef, argv, args);
    const script = argv.stdlibEncodeFunction(...args);
    return new libraTypes_1.RawTransaction(libraUtils_1.default.makeAccountAddress(argv.senderAddress), argv.sequenceNumber, new libraTypes_1.TransactionPayloadVariantScript(script), argv.maxGasAmount, argv.gasUnitPrice, argv.gasCurrency, argv.expirationTime, new libraTypes_1.ChainId(argv.network));
}
function addArgs(scriptDef, argv, args) {
    for (const arg of scriptDef.args) {
        const argName = arg.name;
        if (Object.prototype.hasOwnProperty.call(argv, argName)) {
            args.push(argv[argName]);
        }
    }
}
function submitGenericTypeTransaction(type, argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const scriptDef = libraStdlib_1.Stdlib.ScriptArgs[type];
        argv.stdlibEncodeFunction = scriptDef.stdlibEncodeFunction;
        for (const arg of scriptDef.args) {
            const argName = arg.name;
            if (Object.prototype.hasOwnProperty.call(argv, argName)) {
                argv[argName] = convertArg(arg, argv[argName]);
            }
        }
        const transaction = createGenericTransaction(argv, type);
        yield _1.executeSubmit(argv, transaction);
    });
}
exports.submitGenericTypeTransaction = submitGenericTypeTransaction;
