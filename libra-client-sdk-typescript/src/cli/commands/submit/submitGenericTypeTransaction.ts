import { BaseSubmitCommand, executeSubmit } from './';
import LibraUtils from '../../../libraUtils';
import {
  AccountAddress,
  ChainId,
  Identifier,
  RawTransaction,
  Script,
  StructTag,
  TransactionPayloadVariantScript,
} from '../../../lcs/libraTypes';
import { ArgDef, ScriptDef, Stdlib, Types } from '../../../lcs/libraStdlib';
import { bytesFromHexString } from '../../../utils/bytes';

export interface GenericTransactionSubmitCommand extends BaseSubmitCommand {
  _: ['submit', string];
  stdlibEncodeFunction: (...args: any) => Script;

  [key: string]: any;
}

type ReturnTypes =
  | boolean
  | number
  | BigInt
  | AccountAddress
  | Uint8Array
  | StructTag[];

export function convertArg(arg: ArgDef, argvValue: string): ReturnTypes {
  const typeTagDef = arg.type;

  switch (typeTagDef.type) {
    case Types.Boolean: {
      if (argvValue == 'true') {
        return true;
      } else if (argvValue == 'false') {
        return false;
      } else {
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
      const arrayType = arg.type.arrayType?.type;

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
      const list: StructTag[] = [];

      const resources = argvValue.split(',');

      for (let i = 0; i < resources.length; i++) {
        const details = resources[i].split('_');

        const structTag = new StructTag(
          LibraUtils.makeAccountAddress(details[0]),
          new Identifier(details[1]),
          new Identifier(details[2]),
          []
          //TODO add TypeTag
          // [details[3] as unknown as TypeTag]
        );

        list.push(structTag);
      }

      return list;
    }
  }
}

function createGenericTransaction(
  argv: GenericTransactionSubmitCommand,
  type: string
): RawTransaction {
  const scriptDef = Stdlib.ScriptArgs[type];

  const args: any = [];

  if (Object.prototype.hasOwnProperty.call(argv, 'resources')) {
    for (const resource in argv.resources) {
      args.push(resource);
    }
  }

  addArgs(scriptDef, argv, args);

  const script = argv.stdlibEncodeFunction(...args);

  return new RawTransaction(
    LibraUtils.makeAccountAddress(argv.senderAddress),
    argv.sequenceNumber,
    new TransactionPayloadVariantScript(script),
    argv.maxGasAmount,
    argv.gasUnitPrice,
    argv.gasCurrency,
    argv.expirationTime,
    new ChainId(argv.network)
  );
}

function addArgs(
  scriptDef: ScriptDef,
  argv: GenericTransactionSubmitCommand,
  args: any
) {
  for (const arg of scriptDef.args) {
    const argName = arg.name;

    if (Object.prototype.hasOwnProperty.call(argv, argName)) {
      args.push(argv[argName]);
    }
  }
}

export async function submitGenericTypeTransaction(
  type: string,
  argv: GenericTransactionSubmitCommand
): Promise<void> {
  const scriptDef = Stdlib.ScriptArgs[type];
  argv.stdlibEncodeFunction = scriptDef.stdlibEncodeFunction;

  for (const arg of scriptDef.args) {
    const argName = arg.name;

    if (Object.prototype.hasOwnProperty.call(argv, argName)) {
      argv[argName] = convertArg(arg, argv[argName]);
    }
  }

  const transaction = createGenericTransaction(argv, type);

  await executeSubmit(argv, transaction);
}
