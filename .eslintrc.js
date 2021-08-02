module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['warn', {'endOfLine': 'auto'}]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}