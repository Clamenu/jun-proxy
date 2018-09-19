/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: "airbnb",
  rules: {
    "react/no-array-index-key": 0,
    "import/extensions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": 0,
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  // extends: './node_modules/eslint-config-hackreactor/index.js'
};