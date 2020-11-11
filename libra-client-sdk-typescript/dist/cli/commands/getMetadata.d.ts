import { BaseCommand, Logger } from './command';
export interface GetMetadataCommand extends BaseCommand {
    _: ['get_metadata'];
    txVersion: BigInt;
}
export declare function getMetadata(argv: GetMetadataCommand, logger: Logger): Promise<void>;
