import { PlatformGenerator } from '@shared/utils/PlatformGenerator';
import { IGame } from '@shared/interfaces/IGame';

const stubs: IGame[] = [
  {
    id: '/nintendo-64/the-legend-of-zelda-ocarina-of-time',
    title: 'The Legend of Zelda: Ocarina of Time (N64)',
    score: 99.9,
    year: 1998,
    imageUrl:
      'https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/nintendo-64/the-legend-of-zelda-ocarina-of-time',
  },
  {
    id: '/dreamcast/soulcalibur',
    title: 'SoulCalibur (DC)',
    score: 98.9,
    year: 1999,
    imageUrl: 'https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/dreamcast/soulcalibur',
  },
];

describe('PlatformGenerator', () => {
  describe('generate()', () => {
    it('should include platform field in game properties and remove platform from title', () => {
      const ids = ['/nintendo-64/the-legend-of-zelda-ocarina-of-time', '/dreamcast/soulcalibur'];
      const result = PlatformGenerator.generate(stubs, ids);
      for (const game of result) {
        expect(game).toHaveProperty('platform');
        expect(game.title).not.toContain('(');
      }
    });

    it('should return a empty array if ids are invalid', () => {
      const ids = ['invalid id'];

      const result = PlatformGenerator.generate(stubs, ids);

      expect(result).toHaveLength(0);
    });
  });
});
