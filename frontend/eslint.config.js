// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//     },
//     'no-unused-vars-vars': false,
//   },
// ])




// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Ignore build artifacts (flat config doesn't use .eslintignore by default)
  globalIgnores(['dist', 'build', 'coverage', '.next']),

  {
    files: ['**/*.{js,jsx}'],

    // Base + plugin presets
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        // allow Vite's import.meta
        'import.meta': 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    // Not strictly required when using the plugins' flat presets,
    // but handy if you later add custom plugin rules.
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    rules: {
      // keep (was already in your config)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // good defaults for React/Vite
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
    },
  },

  // Enable Jest globals in test files (delete this block if you don't use Jest)
  {
    files: ['**/*.{test,spec}.{js,jsx}'],
    languageOptions: {
      globals: globals.jest,
    },
  },
]);
