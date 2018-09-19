module.exports = {
  'verbose': true,
  'setupFiles': [
    '<rootDir>/__test__/jestSetup.js'
  ],
  'transform': {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  'moduleNameMapper': {
    '\\.css$': 'identity-obj-proxy'
  },
  'collectCoverage': true,
  'collectCoverageFrom': [
    '**/*.{js,jsx}'
  ],
  'coveragePathIgnorePatterns': [
    '/node_modules/',
    '/coverage/',
    'config.js',
    'rc.js',
    'bundle.js',
    '/database/'
  ]
};