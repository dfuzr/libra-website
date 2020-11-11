import { BaseSubmitCommand, executeSubmit } from './';
import LibraUtils from '../../../libraUtils';

export interface PeerToPeerSubmitCommand extends BaseSubmitCommand {
  _: ['submit', 'PeerToPeerWithMetadata'];
  receiverAddress: string;
  amount: BigInt;
  receiverSubAddress?: string;
  senderSubAddress?: string;
  referenceEventNumber?: BigInt;
}

export async function submitPeerToPeerTransaction(
  argv: PeerToPeerSubmitCommand
): Promise<void> {
  const [metadata, metadataSignature] = LibraUtils.createGeneralMetadata(
    argv.receiverAddress,
    argv.senderSubAddress,
    argv.referenceEventNumber
  );

  const transaction = LibraUtils.createP2PTransaction(
    argv.senderAddress,
    argv.sequenceNumber,
    argv.currency,
    argv.receiverAddress,
    argv.amount,
    argv.gasCurrency,
    argv.gasUnitPrice,
    argv.maxGasAmount,
    argv.expirationTime,
    argv.network,
    metadata,
    metadataSignature
  );

  await executeSubmit(argv, transaction);
}
