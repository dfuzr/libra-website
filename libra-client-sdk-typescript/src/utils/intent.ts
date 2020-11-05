import { Currency, LibraHRP } from '../interfaces/types';

export default class Intent {
  constructor(
    public readonly hrp: LibraHRP,
    public readonly address: string,
    public readonly subAddress?: string,
    public readonly currency?: Currency,
    public readonly amount?: number
  ) {}
}
