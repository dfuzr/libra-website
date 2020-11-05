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
exports.convertAddressFromBech32 = void 0;
const libraUtils_1 = __importDefault(require("../../libraUtils"));
function convertAddressFromBech32(argv, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.info('Encoded address', argv.address);
        const [address, subAddress] = libraUtils_1.default.decodeAddress(argv.hrp, argv.address);
        logger.info('Decoded address', address, subAddress);
    });
}
exports.convertAddressFromBech32 = convertAddressFromBech32;
