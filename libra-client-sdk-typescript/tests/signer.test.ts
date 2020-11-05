import { Signer } from '../src/utils/signer';
import { bytesToBuffer, bytesToHexString } from '../src/utils/bytes';

describe('Signer', () => {
  describe('Generates KeyPair', () => {
    it('returns Ed25519 key pair without seed given', () => {
      const keyPair = Signer.generateKeyPair();
      expect(keyPair.privateKey).toBeInstanceOf(Uint8Array);
      expect(keyPair.privateKey).toHaveLength(32);
      expect(keyPair.publicKey).toBeInstanceOf(Uint8Array);
      expect(keyPair.publicKey).toHaveLength(32);
    });

    it('returns correct Ed25519 key pair from a given seed', () => {
      const seed = Buffer.from(
        '76e3de861d516283dc285e12ddadc95245a9e98f351c910b0ad722f790bac273',
        'hex'
      );
      const publicKey = Buffer.from(
        'f549a91fb9989883fb4d38b463308f3ea82074fb39ea74dae61f62e11bf55d25',
        'hex'
      );
      const keyPair = Signer.generateKeyPair(seed);
      expect(keyPair.privateKey).toStrictEqual(seed);
      expect(keyPair.publicKey).toStrictEqual(publicKey);
    });

    it('throws TypeError if seed has incorrect length', () => {
      expect(() =>
        Signer.generateKeyPair(Buffer.from(new Array(31).fill(1)))
      ).toThrowError(TypeError);
    });
  });

  describe('Ed25519 signer', () => {
    const signature = Signer.signRawTransaction(
      bytesToBuffer(
        '76e3de861d516283dc285e12ddadc95245a9e98f351c910b0ad722f790bac273'
      ),
      bytesToBuffer(
        '1668f6be25668c1a17cd8caf6b8d2f25000000000000000001e101a11ceb0b010000000701000202020403061004160205181d0735610896011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000c4c696272614163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b05110202010700000000000000000000000000000001034c4252034c42520004031234567890abcdeffedcba098765432101404b4c00000000000403000000040000e1f505000000000000000000000000034c425200ca9a3b0000000002'
      )
    );
    expect(bytesToHexString(signature)).toBe(
      'a3e3a94369753b9c3ee46f38903b642c04c914a75f6c56a1fa96954886eddede0969d17a910f3a67a8ff7a48805ace35af58668a7851f96ca2179a72689c7000'
    );
  });
});
