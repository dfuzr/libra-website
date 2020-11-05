"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitYargs = exports.ADD_CURRENCY_TO_ACCOUNT = exports.PEER_TO_PEER_WITH_METADATA = void 0;
const libraStdlib_1 = require("../../lcs/libraStdlib");
const constants_1 = require("../../constants");
exports.PEER_TO_PEER_WITH_METADATA = 'PeerToPeerWithMetadata';
exports.ADD_CURRENCY_TO_ACCOUNT = 'AddCurrencyToAccount';
function submitYargs(yargs) {
    Object.entries(libraStdlib_1.Stdlib.ScriptArgs).forEach(([key, scriptDef]) => {
        if (key === exports.PEER_TO_PEER_WITH_METADATA) {
            peerToPeerYargs(yargs);
        }
        else if (key === exports.ADD_CURRENCY_TO_ACCOUNT) {
            addCurrencyToAccountYargs(yargs);
        }
        else {
            genericYargs(yargs, key, scriptDef);
        }
    });
}
exports.submitYargs = submitYargs;
function structTagYargs(scriptDef, yargs) {
    if (scriptDef.typeArgs.length > 0) {
        yargs.option('resources', {
            type: 'string',
            defaultDescription: 'list from type address_module_name_typeParams separated by under scores',
        });
    }
}
function dynamicYargs(scriptDef, yargs) {
    const args = scriptDef.args;
    for (const arg of args) {
        yargs.options(arg.name, { type: 'string' /*arg.name*/ });
    }
}
function genericYargs(yargs, key, scriptDef) {
    yargs.command(key, '', (yargs) => {
        basicYargs(yargs);
        dynamicYargs(scriptDef, yargs);
        structTagYargs(scriptDef, yargs);
    });
}
function basicYargs(yargs) {
    yargs
        .option('senderAddress', { type: 'string' })
        .option('privateKey', { type: 'string' })
        .option('publicKey', { type: 'string' })
        .option('sequenceNumber', { type: 'number' })
        .option('currency', {
        type: 'string',
        choices: constants_1.CURRENCIES,
    })
        .option('gasCurrency', {
        type: 'string',
        choices: constants_1.CURRENCIES,
    })
        .option('gasUnitPrice', { type: 'number' })
        .option('maxGasAmount', { type: 'number' })
        .option('expirationTime', { type: 'number' })
        .option('network', { type: 'number' });
}
function addCurrencyToAccountYargs(yargs) {
    yargs.command(exports.ADD_CURRENCY_TO_ACCOUNT, 'submit new add currency to account transaction', (yargs) => {
        basicYargs(yargs);
    });
}
function peerToPeerYargs(yargs) {
    yargs.command(exports.PEER_TO_PEER_WITH_METADATA, 'submit new peer to peer transaction', (yargs) => {
        basicYargs(yargs);
        yargs
            .option('receiverAddress', { type: 'string' })
            .option('amount', { type: 'number' })
            .option('senderSubAddress', { type: 'string' })
            .option('receiverSubAddress', { type: 'string' })
            .option('referenceEventNumber', { type: 'number' });
    });
}
