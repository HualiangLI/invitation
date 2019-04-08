// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupFiles: ['./tests/setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.scss$': '<rootDir>/tests/__mocks__/styleMock.js'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
}
