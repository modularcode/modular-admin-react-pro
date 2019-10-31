module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  env: {
    'browser': true,
    'jasmine': true,
    'jest': true,
    'node': true,
  },
  rules: {
    'prettier/prettier': ['error', { 'singleQuote': true }],
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-use-before-define': [0],
    '@typescript-eslint/no-empty-interface': [0],
    '@typescript-eslint/explicit-member-accessibility': [0],
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/no-angle-bracket-type-assertion': [0],
    '@typescript-eslint/no-object-literal-type-assertion': [0],
    '@typescript-eslint/no-triple-slash-reference': [0],
    '@typescript-eslint/prefer-interface': [0],
    'react/prop-types': [0],
    'react/display-name': [0],
    'no-console': [0],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    }
  },
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
};
