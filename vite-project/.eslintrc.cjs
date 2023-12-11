module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  files: ['*.stories.@(ts|tsx|js)'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
