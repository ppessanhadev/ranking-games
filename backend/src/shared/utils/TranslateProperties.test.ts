import { IGameResponse } from '@shared/interfaces/IGameResponse';
import { TranslateProperties } from './TranslateProperties';

const stubs: IGameResponse[] = [
  {
    id: '/nintendo-64/the-legend-of-zelda-ocarina-of-time',
    titulo: 'The Legend of Zelda: Ocarina of Time (N64)',
    nota: 99.9,
    ano: 1998,
    urlImagem:
      'https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/nintendo-64/the-legend-of-zelda-ocarina-of-time',
  },
  {
    id: '/dreamcast/soulcalibur',
    titulo: 'SoulCalibur (DC)',
    nota: 98.9,
    ano: 1999,
    urlImagem: 'https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/dreamcast/soulcalibur',
  },
];

describe('TranslateProperties', () => {
  describe('fromGames()', () => {
    it('should translate properties from games response', () => {
      const result = TranslateProperties.fromGames(stubs);

      for (const game of result) {
        expect(game).toHaveProperty('id');
        expect(game).toHaveProperty('title');
        expect(game).toHaveProperty('score');
        expect(game).toHaveProperty('year');
        expect(game).toHaveProperty('imageUrl');
      }
    });
  });
});
