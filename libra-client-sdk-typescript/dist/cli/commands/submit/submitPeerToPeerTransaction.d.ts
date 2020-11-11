import { BaseSubmitCommand } from './';
export interface PeerToPeerSubmitCommand extends BaseSubmitCommand {
    _: ['submit', 'PeerToPeerWithMetadata'];
    receiverAddress: string;
    amount: BigInt;
    receiverSubAddress?: string;
    senderSubAddress?: string;
    referenceEventNumber?: BigInt;
}
export declare function submitPeerToPeerTransaction(argv: PeerToPeerSubmitCommand): Promise<void>;
