import { convertArg } from '../src/cli/commands/submit/submitGenericTypeTransaction';
import { Types } from '../src/lcs/libraStdlib';
import { Identifier, StructTag } from '../src/lcs/libraTypes';
import LibraUtils from '../src/libraUtils';
import { bytesToBuffer } from '../src/utils/bytes';

describe('convertArg', () => {
  describe('Boolean', () => {
    it('true', async () => {
      const arg = { name: 'add_all_currencies', type: { type: Types.Boolean } };
      const value = 'true';

      const convertedArg = convertArg(arg, value);

      const expectedValue = true;

      expect(convertedArg).toEqual(expectedValue);
    });

    it('false', async () => {
      const arg = { name: 'add_all_currencies', type: { type: Types.Boolean } };
      const value = 'false';

      const convertedArg = convertArg(arg, value);

      const expectedValue = false;

      expect(convertedArg).toEqual(expectedValue);
    });
  });

  it('U8 (number)', async () => {
    const arg = { name: 'amount', type: { type: Types.U8 } };
    const amount = '11';

    const convertedArg = convertArg(arg, amount);

    const expectedValue = 11;

    expect(convertedArg).toEqual(expectedValue);
  });

  it('U64 (BigInt)', async () => {
    const arg = { name: 'amount', type: { type: Types.U64 } };
    const amount = '170000000';

    const convertedArg = convertArg(arg, amount);

    const expectedValue = BigInt(amount);

    expect(convertedArg).toEqual(expectedValue);
  });

  it('U128 (BigInt)', async () => {
    const arg = { name: 'amount', type: { type: Types.U128 } };
    const amount = '11';

    const convertedArg = convertArg(arg, amount);

    const expectedValue = BigInt('11');

    expect(convertedArg).toEqual(expectedValue);
  });

  it('Address', async () => {
    const arg = { name: 'address', type: { type: Types.Address } };
    const address = '262e691ec8c7e3e23470d8c3ee26e1a7';

    const convertedArg = convertArg(arg, address);

    const expectedValue = LibraUtils.makeAccountAddress(address);

    expect(convertedArg).toEqual(expectedValue);
  });

  it('Array of U8 (Uint8Array)', async () => {
    const arg = {
      name: 'new_key',
      type: { type: Types.Array, arrayType: { type: Types.U8 } },
    };
    const newKey =
      'b13968ad5722ee203968f7deea565b2f4266f923b3292065b6e190c368f91036';

    const convertedArg = convertArg(arg, newKey);

    const expectedValue = bytesToBuffer(newKey);

    expect(convertedArg).toEqual(expectedValue);
  });

  describe('Struct', () => {
    it('single resource', async () => {
      const arg = { name: 'resources', type: { type: Types.Struct } };
      const address = 'https://bond.com';
      const module = 'dogs';
      const name = 'bond';
      const typeParams = '[]';
      const value = address + '_' + module + '_' + name + '_' + typeParams;

      const convertedArg = convertArg(arg, value);

      const expectedValue = [
        new StructTag(
          LibraUtils.makeAccountAddress(address),
          new Identifier(module),
          new Identifier(name),
          []
        ),
      ];

      expect(convertedArg).toEqual(expectedValue);
    });

    it('multiple resources', async () => {
      const arg = { name: 'resources', type: { type: Types.Struct } };
      const address = 'https://bond.com';
      const module = 'dogs';
      const name1 = 'bond';
      const name2 = 'gurki';
      const typeParams = '[]';
      const value =
        address +
        '_' +
        module +
        '_' +
        name1 +
        '_' +
        typeParams +
        ',' +
        address +
        '_' +
        module +
        '_' +
        name2 +
        '_' +
        typeParams;

      const convertedArg = convertArg(arg, value);

      const expectedValue = [
        new StructTag(
          LibraUtils.makeAccountAddress(address),
          new Identifier(module),
          new Identifier(name1),
          []
        ),
        new StructTag(
          LibraUtils.makeAccountAddress(address),
          new Identifier(module),
          new Identifier(name2),
          []
        ),
      ];

      expect(convertedArg).toEqual(expectedValue);
    });
  });
});
