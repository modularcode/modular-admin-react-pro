module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    // 'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // 'react-app',
    // 'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    // 'eslint:recommended',
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
    'no-explicit-any': [0],
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
