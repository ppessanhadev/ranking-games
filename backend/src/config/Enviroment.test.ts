import { Environment } from '@config/Environment';
import 'dotenv/config';

const enviroment = new Environment();

describe('Enviroment', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('should return enviroment values', () => {
    process.env.PORT = '8002';

    expect(enviroment.get.port).toBe(8002);
  });

  it('should return default enviroment values', () => {
    expect(enviroment.get.port).toBe(4000);
  });

  it('should match with snapshot', () => {
    expect(enviroment.get).toMatchSnapshot();
  });
});
