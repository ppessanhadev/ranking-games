import { injectable } from 'tsyringe';
import { IEnvironment } from '@config/types/IEnvironment';
import 'dotenv/config';

@injectable()
export class Environment implements IEnvironment {
  get get() {
    return {
      port: Number(process.env.PORT) || 4000,
      url: process.env.GAME_URL || 'https://l3-processoseletivo.azurewebsites.net',
    };
  }
}
