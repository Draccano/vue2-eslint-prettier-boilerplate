module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/standard',
    '@vue/prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['warn', { code: 120 }],
    'func-names': ['warn', 'as-needed'],
    'operator-linebreak': ['error', 'after'],
    'linebreak-style': 0,
    'comma-dangle': 'off',
    'arrow-parens': ['warn', 'as-needed'],
  },
};
