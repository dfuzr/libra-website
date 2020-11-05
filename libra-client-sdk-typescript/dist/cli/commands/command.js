"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = exports.commandsList = void 0;
const testnetClient_1 = __importDefault(require("../../testnetClient"));
const libraClient_1 = __importDefault(require("../../libraClient"));
exports.commandsList = [
    'get_account',
    'get_transactions',
    'get_transaction',
    'get_account_transaction',
    'get_account_transactions',
    'get_currencies',
    'get_events',
    'get_metadata',
    'submit',
    'address_from_bech32',
    'address_to_bech32',
    'generate_keys',
    'create_account',
];
function getClient() {
    return new libraClient_1.default(testnetClient_1.default.TESTNET_JSONRPC_URL, testnetClient_1.default.TESTNET_CHAIN_ID);
}
exports.getClient = getClient;
