import inquirer from 'inquirer';
import { ScriptDef, Stdlib, Types } from '../lcs/libraStdlib';
import { PeerToPeerSubmitCommand } from './commands/submit/submitPeerToPeerTransaction';
import { AddCurrencyToAccountSubmitCommand } from './commands/submit/submitAddCurrencyToAccountTransaction';
import { CURRENCIES } from '../constants';
import { GenericTransactionSubmitCommand } from './commands/submit/submitGenericTypeTransaction';
import { BaseSubmitCommand } from './commands/submit';
import {
  ADD_CURRENCY_TO_ACCOUNT,
  PEER_TO_PEER_WITH_METADATA,
} from './args/submitArgs';

async function promptTypeArgs(
  scriptDef: ScriptDef,
  argv: GenericTransactionSubmitCommand
) {
  if (scriptDef.typeArgs.length > 0) {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'resources',
        message:
          'Resources Details (list from type address_module_name_typeParams separated by under scores):',
      },
    ]);

    argv.resources = answer.resources;
  }
}

async function promptGenericTransactionArguments(
  type: string,
  argv: GenericTransactionSubmitCommand
) {
  await promptBaseSubmitArguments(argv);

  const scriptDef = Stdlib.ScriptArgs[type];
  argv.stdlibFunction = scriptDef.stdlibEncodeFunction;

  await promptArgs(scriptDef, argv);

  await promptTypeArgs(scriptDef, argv);
}

async function promptArgs(
  scriptDef: ScriptDef,
  argv: GenericTransactionSubmitCommand
) {
  for (const arg of scriptDef.args) {
    const argName = arg.name;

    if (!Object.prototype.hasOwnProperty.call(argv, argName)) {
      const typeTagDef = arg.type;
      let typeMessage = Types[typeTagDef.type];

      if (arg.type.arrayType) {
        const arrayType = Types[arg.type.arrayType?.type];
        typeMessage += ' of ' + arrayType;
      }

      argv[argName] = await promptDynamicArg(arg.name, typeMessage);
    }
  }
}

const submitPrompt = async (argv: BaseSubmitCommand): Promise<void> => {
  const type = argv._[1];

  if (type === PEER_TO_PEER_WITH_METADATA) {
    await promptsPeerToPeerArguments(argv as PeerToPeerSubmitCommand);
  } else if (type === ADD_CURRENCY_TO_ACCOUNT) {
    await promptsAddCurrencyToAccountArguments(
      argv as AddCurrencyToAccountSubmitCommand
    );
  } else {
    await promptGenericTransactionArguments(
      type,
      argv as GenericTransactionSubmitCommand
    );
  }
};

async function promptNetwork(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'number',
      name: 'network',
      message: `Network: `,
    },
  ]);

  argv.network = answer.network;
}

async function promptExpirationTime(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'number',
      name: 'expirationTime',
      message: `Expiration Time: `,
    },
  ]);

  argv.expirationTime = answer.expirationTime;
}

async function promptMaxGasAmount(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'number',
      name: 'maxGasAmount',
      message: `Max Gas Amount: `,
    },
  ]);

  argv.maxGasAmount = answer.maxGasAmount;
}

async function promptGasUnitPrice(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'number',
      name: 'gasUnitPrice',
      message: `Gas Unit Price: `,
    },
  ]);

  argv.gasUnitPrice = answer.gasUnitPrice;
}

async function promptGasCurrency(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'gasCurrency',
      message: `Gas Currency: `,
      choices: CURRENCIES,
    },
  ]);

  argv.gasCurrency = answer.gasCurrency;
}

async function promptAmount(argv: PeerToPeerSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'number',
      name: 'amount',
      message: `Amount: `,
    },
  ]);

  argv.amount = answer.amount;
}

async function promptReceiverAddress(
  argv: PeerToPeerSubmitCommand
): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'receiverAddress',
      message: `Receiver Address: `,
      validate: (answer) => answer.length >= 2,
    },
  ]);

  argv.receiverAddress = answer.receiverAddress;
}

async function promptCurrency(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'currency',
      message: `Currency: `,
      choices: CURRENCIES,
      validate: (answer) => answer.length >= 2,
    },
  ]);

  argv.currency = answer.currency;
}

async function promptSequenceNumber(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'number',
      name: 'sequenceNumber',
      message: `Sequence Number: `,
    },
  ]);

  argv.sequenceNumber = answer.sequenceNumber;
}

async function promptPublicKey(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'publicKey',
      message: `Public key: `,
      validate: (answer) => answer.length >= 2,
    },
  ]);

  argv.publicKey = answer.publicKey;
}

async function promptPrivateKey(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'privateKey',
      message: `Private Key: `,
      validate: (answer) => answer.length >= 2,
    },
  ]);

  argv.privateKey = answer.privateKey;
}

async function promptSenderAddress(argv: BaseSubmitCommand): Promise<void> {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'senderAddress',
      message: `Sender Address: `,
      validate: (answer) => answer.length >= 2,
    },
  ]);

  argv.senderAddress = answer.senderAddress;
}

async function promptDynamicArg(
  argName: string,
  typeMessage: string,
  choices?: string[] | undefined
): Promise<any> {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: argName,
      message: argName + ' (' + typeMessage + '):',
      choices: choices,
    },
  ]);

  return answer[argName];
}

async function promptsPeerToPeerArguments(
  argv: PeerToPeerSubmitCommand
): Promise<void> {
  await promptBaseSubmitArguments(argv);

  if (!argv.receiverAddress) {
    await promptReceiverAddress(argv);
  }

  if (!argv.amount) {
    await promptAmount(argv);
  }
}

type PromptFunction = (argv: BaseSubmitCommand) => Promise<void>;

type ArgToPrompt = Exclude<keyof BaseSubmitCommand, '_'>;

async function promptBaseSubmitArguments(argv: BaseSubmitCommand) {
  const args: Record<ArgToPrompt, PromptFunction> = {
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
    const argKey = key as keyof typeof args;
    if (argv[argKey] === undefined) {
      await args[argKey](argv);
    }
  }
}

async function promptsAddCurrencyToAccountArguments(
  argv: AddCurrencyToAccountSubmitCommand
): Promise<void> {
  await promptBaseSubmitArguments(argv);
}

export default submitPrompt;
