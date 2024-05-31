import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov'],
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist',
    '/e2e-',
  ],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@pages/(.*)': '<rootDir>/src/app/pages/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@layout/(.*)': '<rootDir>/src/app/layout/$1',
    '@environments/(.*)': '<rootDir>/src/app/environments/$1',
  },
};

export default config;
