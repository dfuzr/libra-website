import { ScriptDef, Stdlib } from '../../lcs/libraStdlib';
import { BaseCommand } from '../commands/command';
import { BaseSubmitCommand } from '../commands/submit';
import { CURRENCIES } from '../../constants';
import { PeerToPeerSubmitCommand } from '../commands/submit/submitPeerToPeerTransaction';
import yargs from 'yargs';

export const PEER_TO_PEER_WITH_METADATA = 'PeerToPeerWithMetadata';
export const ADD_CURRENCY_TO_ACCOUNT = 'AddCurrencyToAccount';

export function submitYargs(yargs: yargs.Argv<BaseCommand>): void {
  Object.entries(Stdlib.ScriptArgs).forEach(([key, scriptDef]) => {
    if (key === PEER_TO_PEER_WITH_METADATA) {
      peerToPeerYargs(yargs);
    } else if (key === ADD_CURRENCY_TO_ACCOUNT) {
      addCurrencyToAccountYargs(yargs);
    } else {
      genericYargs(yargs, key, scriptDef);
    }
  });
}

function structTagYargs(scriptDef: ScriptDef, yargs: yargs.Argv<BaseCommand>) {
  if (scriptDef.typeArgs.length > 0) {
    yargs.option('resources', {
      type: 'string',
      defaultDescription:
        'list from type address_module_name_typeParams separated by under scores',
    });
  }
}

function dynamicYargs(scriptDef: ScriptDef, yargs: yargs.Argv<BaseCommand>) {
  const args = scriptDef.args;

  for (const arg of args) {
    yargs.options(arg.name, { type: 'string' /*arg.name*/ });
  }
}

function genericYargs(
  yargs: yargs.Argv<BaseCommand>,
  key: string,
  scriptDef: ScriptDef
) {
  yargs.command<BaseSubmitCommand>(key, '', (yargs) => {
    basicYargs(yargs);
    dynamicYargs(scriptDef, yargs);
    structTagYargs(scriptDef, yargs);
  });
}

function basicYargs(yargs: yargs.Argv<BaseCommand>) {
  yargs
    .option('senderAddress', { type: 'string' })
    .option('privateKey', { type: 'string' })
    .option('publicKey', { type: 'string' })
    .option('sequenceNumber', { type: 'number' })
    .option('currency', {
      type: 'string',
      choices: CURRENCIES,
    })
    .option('gasCurrency', {
      type: 'string',
      choices: CURRENCIES,
    })
    .option('gasUnitPrice', { type: 'number' })
    .option('maxGasAmount', { type: 'number' })
    .option('expirationTime', { type: 'number' })
    .option('network', { type: 'number' });
}

function addCurrencyToAccountYargs(yargs: yargs.Argv<BaseCommand>) {
  yargs.command<BaseSubmitCommand>(
    ADD_CURRENCY_TO_ACCOUNT,
    'submit new add currency to account transaction',
    (yargs) => {
      basicYargs(yargs);
    }
  );
}

function peerToPeerYargs(yargs: yargs.Argv<BaseCommand>) {
  yargs.command<PeerToPeerSubmitCommand>(
    PEER_TO_PEER_WITH_METADATA,
    'submit new peer to peer transaction',
    (yargs) => {
      basicYargs(yargs);
      yargs
        .option('receiverAddress', { type: 'string' })
        .option('amount', { type: 'number' })
        .option('senderSubAddress', { type: 'string' })
        .option('receiverSubAddress', { type: 'string' })
        .option('referenceEventNumber', { type: 'number' });
    }
  );
}
