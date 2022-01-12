import { Router } from 'express';
import { inject, injectable } from 'tsyringe';
import { tokens } from '@di/tokens';
import { GameController } from '@presentation/controllers/GameController';
import { ValidateIds } from '@presentation/middlewares/ValidateIds';

@injectable()
export class Game {
  private game: Router;

  constructor(
    @inject(tokens.GameController)
    private gameController: GameController
  ) {
    this.game = Router();
    this.setupRoute();
  }

  private setupRoute() {
    this.game.get('/games', (req, res) => {
      this.gameController.getGames(req, res);
    });

    this.game.post('/games/ranking', ValidateIds.validate, (req, res) => {
      this.gameController.getRanking(req, res);
    });
  }

  get route() {
    return this.game;
  }
}
