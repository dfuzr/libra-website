import { LibraHRP } from '../interfaces/types';
export default class Intent {
    readonly hrp: LibraHRP;
    readonly address: string;
    readonly subAddress?: string | undefined;
    readonly currency?: "LBR" | "Coin1" | "Coin2" | undefined;
    readonly amount?: number | undefined;
    constructor(hrp: LibraHRP, address: string, subAddress?: string | undefined, currency?: "LBR" | "Coin1" | "Coin2" | undefined, amount?: number | undefined);
}
