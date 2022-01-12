import 'reflect-metadata';

import { container } from '@di/container';
import { tokens } from '@di/tokens';
import { App } from '@presentation/App';

const app = container.resolve(tokens.App) as App;

app.initialize();
