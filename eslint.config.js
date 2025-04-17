import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default tseslint.config({
  files: ['src/**/*.ts', 'src/**/*.tsx'],
  extends: [
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },

    eslintPluginReact.configs.flat?.['recommended'] ?? {},
    eslintPluginReact.configs.flat?.['jsx-runtime'] ?? {},
    {
      rules: {
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-curly-brace-presence': 'error',
        'react/no-unknown-property': 'error',
        'react/prop-types': 'off', // handled by TypeScript
        'react/self-closing-comp': 'error',
      },
      settings: { react: { version: 'detect' } },
    },

    {
      plugins: {
        'react-hooks': eslintPluginReactHooks,
      },
      rules: { ...eslintPluginReactHooks.configs.recommended.rules },
    },

    eslintConfigPrettier,
  ],
});
