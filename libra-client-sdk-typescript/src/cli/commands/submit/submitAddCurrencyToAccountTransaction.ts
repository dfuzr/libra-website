import { BaseSubmitCommand, executeSubmit } from './';
import LibraUtils from '../../../libraUtils';

export interface AddCurrencyToAccountSubmitCommand extends BaseSubmitCommand {
  _: ['submit', 'AddCurrencyToAccount'];
}

export async function submitAddCurrencyToAccountTransaction(
  argv: AddCurrencyToAccountSubmitCommand
): Promise<void> {
  const transaction = LibraUtils.createAddCurrencyToAccountTransaction(
    argv.senderAddress,
    argv.sequenceNumber,
    argv.currency,
    argv.gasCurrency,
    argv.gasUnitPrice,
    argv.maxGasAmount,
    argv.expirationTime,
    argv.network
  );

  await executeSubmit(argv, transaction);
}
