import { container as baseContainer } from 'tsyringe';
import { tokens } from '@di/tokens';

export const container = baseContainer.createChildContainer();

import { App } from '@presentation/App';
container.registerSingleton(tokens.App, App);

import { Environment } from '@config/Environment';
container.registerSingleton(tokens.Environment, Environment);

import { AxiosProvider } from '@shared/providers/http/AxiosProvider';
container.registerSingleton(tokens.HTTPProvider, AxiosProvider);

import { GameController } from '@presentation/controllers/GameController';
import { GameService } from '@domain/game/GameService';
import { GameProvider } from '@shared/providers/game/GameProvider';
container.registerSingleton(tokens.GameController, GameController);
container.registerSingleton(tokens.GameService, GameService);
container.registerSingleton(tokens.GameProvider, GameProvider);

import { Game } from '@presentation/routes/game';
container.registerSingleton(tokens.GameRoute, Game);
