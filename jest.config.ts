import type { Config } from '@jest/types';
import { baseJestConfig } from './jest.config.base';

const config: Config.InitialOptions = {
  ...baseJestConfig,
  testEnvironment: 'jsdom',
}

export default config;
