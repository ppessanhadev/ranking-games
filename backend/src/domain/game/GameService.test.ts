import { container } from '@di/container';
import { tokens } from '@di/tokens';
import { IGameResponse } from '@shared/interfaces/IGameResponse';
import { IGameProvider } from '@shared/providers/game/types/IGameProvider';
import { IGameService } from '@domain/game/types/IGameService';

jest.mock('@shared/providers/game/GameProvider');

const mock = [
  {
    id: '/nintendo-64/the-legend-of-zelda-ocarina-of-time',
    titulo: 'The Legend of Zelda: Ocarina of Time (N64)',
    nota: 99.9,
    ano: 1998,
    urlImagem:
      'https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/nintendo-64/the-legend-of-zelda-ocarina-of-time',
  },
  {
    id: '/playstation/tony-hawks-pro-skater-2',
    titulo: "Tony Hawk's Pro Skater 2 (PS)",
    nota: 98.9,
    ano: 2000,
    urlImagem:
      'https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/playstation/tony-hawks-pro-skater-2',
  },
] as IGameResponse[];

describe('GameService', () => {
  let gameService: IGameService;
  let gameProvider: IGameProvider;

  beforeEach(() => {
    gameProvider = container.resolve(tokens.GameProvider);
    gameService = container.resolve(tokens.GameService);
    jest.spyOn(gameProvider, 'listGames').mockResolvedValue(mock);
  });

  describe('getGames()', () => {
    it('should call provider to get games', async () => {
      await gameService.getGames();

      expect(gameProvider.listGames).toHaveBeenCalled();
      expect(gameProvider.listGames).toHaveBeenCalledTimes(1);
    });

    it('should translate object, add platform property and sort by year', async () => {
      jest.spyOn(gameService, 'getGames');

      const expected = [
        {
          id: '/nintendo-64/the-legend-of-zelda-ocarina-of-time',
          title: 'The Legend of Zelda: Ocarina of Time',
          platform: 'N64',
          score: 99.9,
          year: 1998,
          imageUrl:
            'https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/nintendo-64/the-legend-of-zelda-ocarina-of-time',
        },
        {
          id: '/playstation/tony-hawks-pro-skater-2',
          title: "Tony Hawk's Pro Skater 2",
          platform: 'PS',
          score: 98.9,
          year: 2000,
          imageUrl:
            'https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/playstation/tony-hawks-pro-skater-2',
        },
      ];

      expect(await gameService.getGames()).toStrictEqual(expected);
      expect(gameService.getGames).toHaveBeenCalledTimes(1);
    });
  });

  describe('getRanking()', () => {
    it('should call provider to get games', async () => {
      await gameService.getGames();

      expect(gameProvider.listGames).toHaveBeenCalled();
      expect(gameProvider.listGames).toHaveBeenCalledTimes(1);
    });

    it('should only return selected id games', async () => {
      const expected = [
        {
          id: '/nintendo-64/the-legend-of-zelda-ocarina-of-time',
          title: 'The Legend of Zelda: Ocarina of Time',
          platform: 'N64',
          score: 99.9,
          year: 1998,
          imageUrl:
            'https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/nintendo-64/the-legend-of-zelda-ocarina-of-time',
        },
      ];
      const [{ id }] = expected;
      expect(await gameService.getRanking([id])).toStrictEqual(expected);
    });
  });
});
