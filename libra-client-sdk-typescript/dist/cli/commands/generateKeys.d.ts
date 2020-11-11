import { BaseCommand, Logger } from './command';
export interface GenerateKeysCommand extends BaseCommand {
    _: ['generate_keys'];
    seed?: string;
}
export declare function generateKeys(argv: GenerateKeysCommand, logger: Logger): Promise<void>;
