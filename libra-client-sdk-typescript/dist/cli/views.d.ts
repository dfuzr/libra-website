import { Logger } from './commands/command';
import { Transaction } from '../interfaces/libra-jsonrpc-types';
export default class Prettify {
    private logger;
    constructor(logger: Logger);
    prettifyTx(transaction: Transaction): void;
    private prettifyUserTx;
    private printTxFinancialDetails;
    private printBlockMetadataTxDetails;
    private printUnknownTxDetails;
    private printUserTx;
    private printWriteSetTxDetails;
    private printTxBasicDetails;
}
