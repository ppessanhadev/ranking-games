import { inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { tokens } from '@di/tokens';
import { IGameService } from '@domain/game/types/IGameService';

@injectable()
export class GameController {
  constructor(
    @inject(tokens.GameService)
    private gameService: IGameService
  ) {}

  async getGames(_req: Request, res: Response) {
    const games = await this.gameService.getGames();
    return res.status(200).send(games);
  }

  async getRanking(req: Request, res: Response) {
    const rankedGames = await this.gameService.getRanking(req.body.ids);
    return res.status(200).send(rankedGames);
  }
}
