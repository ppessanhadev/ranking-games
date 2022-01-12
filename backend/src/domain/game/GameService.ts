import { inject, injectable } from 'tsyringe';
import { IGameService } from '@domain/game/types/IGameService';
import { IGameProvider } from '@shared/providers/game/types/IGameProvider';
import { tokens } from '@di/tokens';
import { PlatformGenerator } from '@shared/utils/PlatformGenerator';
import { TranslateProperties } from '@shared/utils/TranslateProperties';
import { IGameResponse } from '@shared/interfaces/IGameResponse';

@injectable()
export class GameService implements IGameService {
  constructor(
    @inject(tokens.GameProvider)
    private gameProvider: IGameProvider
  ) {}

  private mapToGame(games: IGameResponse[], ids?: string[]) {
    let allIds = ids;

    if (!allIds) {
      allIds = games.map((game) => game.id);
    }

    const properties = TranslateProperties.fromGames(games);
    const platform = PlatformGenerator.generate(properties, allIds);

    return platform;
  }

  async getGames() {
    const games = await this.gameProvider.listGames();
    const mappedGames = this.mapToGame(games);

    return mappedGames.sort((a, b) => a.year - b.year);
  }

  async getRanking(ids: string[]) {
    const games = await this.gameProvider.listGames();
    const mappedGames = this.mapToGame(games, ids);

    return mappedGames.sort((a, b) => a.score - b.score && a.year - b.year);
  }
}
