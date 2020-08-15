module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier':'error',
    'react/jsx-filename-extension': [
        'warn',
        { extensions : ['.js','.jsx']}
    ],
    'import/prefer-default-export':'off',
    'react/state-in-constructor':'off',
    'react/destructuring-assignment':'off',
    'react/no-access-state-in-setstate':"off",
    'no-unused-vars':'off',
    "jsx-a11y/anchor-is-valid":"off",
    "eslint-disable-next-line":"off"
  },
};
