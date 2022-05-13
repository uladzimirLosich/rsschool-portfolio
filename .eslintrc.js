module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'linebreak-style': 0,
    'no-unused-expressions': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
  },
};
