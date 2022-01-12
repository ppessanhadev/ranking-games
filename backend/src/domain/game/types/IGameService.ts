import { IGame } from '@shared/interfaces/IGame';

export interface IGameService {
  getGames: () => Promise<IGame[]>;
  getRanking: (ids: string[]) => Promise<IGame[]>;
}
