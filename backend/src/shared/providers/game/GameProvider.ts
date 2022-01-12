import { inject, injectable } from 'tsyringe';
import { AxiosError } from 'axios';
import { tokens } from '@di/tokens';
import { IHTTPProvider } from '@shared/providers/http/IHTTPProvider';
import { IGameProvider } from '@shared/providers/game/types/IGameProvider';
import { IEnvironment } from '@config/types/IEnvironment';
import { IGameResponse } from '@shared/interfaces/IGameResponse';

@injectable()
export class GameProvider implements IGameProvider {
  constructor(
    @inject(tokens.HTTPProvider)
    private http: IHTTPProvider,

    @inject(tokens.Environment)
    private env: IEnvironment
  ) {
    this.http.init(this.env.get.url);
  }

  async listGames() {
    try {
      const response = await this.http.get('/api/Competidores?copa=games');
      return response as IGameResponse[];
    } catch (e) {
      const err = e as AxiosError;
      throw new Error(err.message);
    }
  }
}
