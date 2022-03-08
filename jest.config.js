module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'controllers/*.js',
    '!**/node_modules/**',
    '!**/core/**',
    '!*.config.js',
    '!index.js',
  ],
  coverageReporters: ['text', 'text-summary'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  coverageDirectory: './coverage/',
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'JSON-restructure',
      },
    ],
  ],
  // silent: true
}
