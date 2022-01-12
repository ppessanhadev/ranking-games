import { injectable, inject } from 'tsyringe';
import express, { Express } from 'express';
import cors from 'cors';
import { tokens } from '@di/tokens';
import { IEnvironment } from '@config/types/IEnvironment';
import { Game } from '@presentation/routes/game';

@injectable()
export class App {
  private app: Express;

  constructor(
    @inject(tokens.Environment)
    private env: IEnvironment,

    @inject(tokens.GameRoute)
    private gameRoute: Game
  ) {
    this.app = express();
  }

  private setupMiddlewares() {
    const middlewares = [express.json(), cors()];
    for (let middleware of middlewares) {
      this.app.use(middleware);
    }
  }

  private setupRoutes() {
    this.app.use(this.gameRoute.route);
  }

  private start() {
    const { port } = this.env.get;
    this.app.listen(port, () => console.log(`server is running at ${port}`));
  }

  public initialize() {
    this.setupMiddlewares();
    this.setupRoutes();
    this.start();
  }
}
