import { Logger } from './commands/command';
import { Transaction } from '../interfaces/libra-jsonrpc-types';

export default class Prettify {
  constructor(private logger: Logger) {}

  public prettifyTx(transaction: Transaction): void {
    this.logger.group('Transaction Details:');

    if (transaction.transaction?.type === 'writeset') {
      this.printWriteSetTxDetails(transaction);
    } else if (transaction.transaction?.type === 'blockmetadata') {
      this.printBlockMetadataTxDetails(transaction);
    } else if (transaction.transaction?.type === 'user') {
      this.prettifyUserTx(transaction);
    } else {
      throw new Error(
        'Failed to handle unrecognized transaction type ' +
          transaction.transaction?.type
      );
    }
    this.logger.groupEnd();
    this.logger.info(
      '--------------------------------------------------------'
    );
  }

  private prettifyUserTx(transaction: Transaction): void {
    const txType = transaction.transaction?.script?.type;
    if (txType === 'unknown_transaction') {
      this.printUnknownTxDetails(transaction);
    } else {
      this.printUserTx(transaction, txType);
    }
  }

  private printTxFinancialDetails(transaction: Transaction): void {
    this.logger.info('Source:', transaction.transaction?.sender);
    this.logger.info('Target:', transaction.transaction?.script?.receiver);
    this.logger.info('Amount:', transaction.transaction?.script?.amount);
    this.logger.info('Types:', transaction.transaction?.script?.currency);
  }

  private printBlockMetadataTxDetails(transaction: Transaction): void {
    this.logger.info('Type:', 'blockmetadata');
    this.printTxBasicDetails(transaction);
    this.logger.info(
      'Expiration Time:',
      Math.trunc(
        Number(
          BigInt(transaction.transaction?.timestamp_usecs) / BigInt(1000000)
        )
      )
    );
  }

  private printUnknownTxDetails(transaction: Transaction): void {
    this.logger.info('Type:', 'unknown_transaction');
    this.printTxBasicDetails(transaction);
  }

  private printUserTx(transaction: Transaction, type?: string): void {
    this.logger.info('Type:', type);
    this.printTxBasicDetails(transaction);
    this.printTxFinancialDetails(transaction);
  }

  private printWriteSetTxDetails(transaction: Transaction): void {
    this.logger.info('Type:', 'writeset');
    this.printTxBasicDetails(transaction);
  }

  private printTxBasicDetails(transaction: Transaction): void {
    this.logger.info('Version:', transaction.version);
  }
}
