// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/src/cli/',
    '/src/lcs/',
  ],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },

  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/react-component/'],
};
