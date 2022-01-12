import { IGame } from '@shared/interfaces/IGame';
import { IGameResponse } from '@shared/interfaces/IGameResponse';

export class TranslateProperties {
  public static fromGames(values: IGameResponse[]): IGame[] {
    const response = values.map((value) => {
      return {
        id: value.id,
        title: value.titulo,
        score: value.nota,
        year: value.ano,
        imageUrl: value.urlImagem,
      } as IGame;
    });
    return response;
  }
}
