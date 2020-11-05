import { BaseSubmitCommand } from './';
import { AccountAddress, Script, StructTag } from '../../../lcs/libraTypes';
import { ArgDef } from '../../../lcs/libraStdlib';
export interface GenericTransactionSubmitCommand extends BaseSubmitCommand {
    _: ['submit', string];
    stdlibEncodeFunction: (...args: any) => Script;
    [key: string]: any;
}
declare type ReturnTypes = boolean | number | BigInt | AccountAddress | Uint8Array | StructTag[];
export declare function convertArg(arg: ArgDef, argvValue: string): ReturnTypes;
export declare function submitGenericTypeTransaction(type: string, argv: GenericTransactionSubmitCommand): Promise<void>;
export {};
