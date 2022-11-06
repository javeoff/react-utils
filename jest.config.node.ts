import { baseJestConfig } from './jest.config.base';
import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  ...baseJestConfig,
  testEnvironment: 'node',
}
