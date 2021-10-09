module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'no-param-reassign': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
