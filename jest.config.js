module.exports = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'report',

  coverageProvider: 'v8',

  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/tests/',
  ],

  moduleNameMapper: {
    '^@/.*': ['<rootDir>/src/$1'],
    '^@tests/.*': ['<rootDir>/tests/$1'],
  },

  preset: 'ts-jest',

  testEnvironment: 'node',
};
