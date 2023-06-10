module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'eslint-plugin-html', '@typescript-eslint', 'import'],
  rules: {
    eqeqeq: 'error',
    'no-console': 0,
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { typescript: { alwaysTryTypes: true } },
  },
};
