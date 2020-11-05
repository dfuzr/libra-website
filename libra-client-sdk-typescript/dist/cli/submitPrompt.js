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
const inquirer_1 = __importDefault(require("inquirer"));
const libraStdlib_1 = require("../lcs/libraStdlib");
const constants_1 = require("../constants");
const submitArgs_1 = require("./args/submitArgs");
function promptTypeArgs(scriptDef, argv) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scriptDef.typeArgs.length > 0) {
            const answer = yield inquirer_1.default.prompt([
                {
                    type: 'input',
                    name: 'resources',
                    message: 'Resources Details (list from type address_module_name_typeParams separated by under scores):',
                },
            ]);
            argv.resources = answer.resources;
        }
    });
}
function promptGenericTransactionArguments(type, argv) {
    return __awaiter(this, void 0, void 0, function* () {
        yield promptBaseSubmitArguments(argv);
        const scriptDef = libraStdlib_1.Stdlib.ScriptArgs[type];
        argv.stdlibFunction = scriptDef.stdlibEncodeFunction;
        yield promptArgs(scriptDef, argv);
        yield promptTypeArgs(scriptDef, argv);
    });
}
function promptArgs(scriptDef, argv) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        for (const arg of scriptDef.args) {
            const argName = arg.name;
            if (!Object.prototype.hasOwnProperty.call(argv, argName)) {
                const typeTagDef = arg.type;
                let typeMessage = libraStdlib_1.Types[typeTagDef.type];
                if (arg.type.arrayType) {
                    const arrayType = libraStdlib_1.Types[(_a = arg.type.arrayType) === null || _a === void 0 ? void 0 : _a.type];
                    typeMessage += ' of ' + arrayType;
                }
                argv[argName] = yield promptDynamicArg(arg.name, typeMessage);
            }
        }
    });
}
const submitPrompt = (argv) => __awaiter(void 0, void 0, void 0, function* () {
    const type = argv._[1];
    if (type === submitArgs_1.PEER_TO_PEER_WITH_METADATA) {
        yield promptsPeerToPeerArguments(argv);
    }
    else if (type === submitArgs_1.ADD_CURRENCY_TO_ACCOUNT) {
        yield promptsAddCurrencyToAccountArguments(argv);
    }
    else {
        yield promptGenericTransactionArguments(type, argv);
    }
});
function promptNetwork(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'number',
                name: 'network',
                message: `Network: `,
            },
        ]);
        argv.network = answer.network;
    });
}
function promptExpirationTime(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'number',
                name: 'expirationTime',
                message: `Expiration Time: `,
            },
        ]);
        argv.expirationTime = answer.expirationTime;
    });
}
function promptMaxGasAmount(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'number',
                name: 'maxGasAmount',
                message: `Max Gas Amount: `,
            },
        ]);
        argv.maxGasAmount = answer.maxGasAmount;
    });
}
function promptGasUnitPrice(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'number',
                name: 'gasUnitPrice',
                message: `Gas Unit Price: `,
            },
        ]);
        argv.gasUnitPrice = answer.gasUnitPrice;
    });
}
function promptGasCurrency(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'list',
                name: 'gasCurrency',
                message: `Gas Currency: `,
                choices: constants_1.CURRENCIES,
            },
        ]);
        argv.gasCurrency = answer.gasCurrency;
    });
}
function promptAmount(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'number',
                name: 'amount',
                message: `Amount: `,
            },
        ]);
        argv.amount = answer.amount;
    });
}
function promptReceiverAddress(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'receiverAddress',
                message: `Receiver Address: `,
                validate: (answer) => answer.length >= 2,
            },
        ]);
        argv.receiverAddress = answer.receiverAddress;
    });
}
function promptCurrency(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'list',
                name: 'currency',
                message: `Currency: `,
                choices: constants_1.CURRENCIES,
                validate: (answer) => answer.length >= 2,
            },
        ]);
        argv.currency = answer.currency;
    });
}
function promptSequenceNumber(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'number',
                name: 'sequenceNumber',
                message: `Sequence Number: `,
            },
        ]);
        argv.sequenceNumber = answer.sequenceNumber;
    });
}
function promptPublicKey(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'publicKey',
                message: `Public key: `,
                validate: (answer) => answer.length >= 2,
            },
        ]);
        argv.publicKey = answer.publicKey;
    });
}
function promptPrivateKey(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'privateKey',
                message: `Private Key: `,
                validate: (answer) => answer.length >= 2,
            },
        ]);
        argv.privateKey = answer.privateKey;
    });
}
function promptSenderAddress(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'senderAddress',
                message: `Sender Address: `,
                validate: (answer) => answer.length >= 2,
            },
        ]);
        argv.senderAddress = answer.senderAddress;
    });
}
function promptDynamicArg(argName, typeMessage, choices) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: 'input',
                name: argName,
                message: argName + ' (' + typeMessage + '):',
                choices: choices,
            },
        ]);
        return answer[argName];
    });
}
function promptsPeerToPeerArguments(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        yield promptBaseSubmitArguments(argv);
        if (!argv.receiverAddress) {
            yield promptReceiverAddress(argv);
        }
        if (!argv.amount) {
            yield promptAmount(argv);
        }
    });
}
function promptBaseSubmitArguments(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const args = {
            senderAddress: promptSenderAddress,
            sequenceNumber: promptSequenceNumber,
            currency: promptCurrency,
            gasCurrency: promptGasCurrency,
            gasUnitPrice: promptGasUnitPrice,
            maxGasAmount: promptMaxGasAmount,
            expirationTime: promptExpirationTime,
            network: promptNetwork,
            publicKey: promptPublicKey,
            privateKey: promptPrivateKey,
        };
        for (const key of Object.keys(args)) {
            const argKey = key;
            if (argv[argKey] === undefined) {
                yield args[argKey](argv);
            }
        }
    });
}
function promptsAddCurrencyToAccountArguments(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        yield promptBaseSubmitArguments(argv);
    });
}
exports.default = submitPrompt;
