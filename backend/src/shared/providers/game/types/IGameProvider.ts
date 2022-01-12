import { IGameResponse } from '@shared/interfaces/IGameResponse';

export interface IGameProvider {
  listGames: () => Promise<IGameResponse[]>;
}
