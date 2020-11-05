import { KeyPair } from '../utils/signer';
import { Bytes } from '../utils/bytes';
export default class AccountKeys {
    readonly privateKey: Bytes;
    readonly publicKey: Bytes;
    readonly authKey: Bytes;
    readonly accountAddress: Bytes;
    constructor(keyPair: KeyPair);
}
