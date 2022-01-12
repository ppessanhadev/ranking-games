import { IGame } from '@shared/interfaces/IGame';

export class PlatformGenerator {
  public static generate(games: IGame[], ids: string[]): IGame[] {
    const selectedGames = games
      .filter((game) => ids.includes(game.id))
      .map((game) => {
        let [title, platform] = game.title.split('(');
        platform = platform.replace(')', '');
        return {
          ...game,
          title: title.trim(),
          platform,
        };
      });

    return selectedGames as IGame[];
  }
}
