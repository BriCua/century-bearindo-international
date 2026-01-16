import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Global ignores
  {
    ignores: ['dist/'],
  },
  // Server-side files configuration (Node.js environment)
  {
    files: ['server.js', 'src/entry-server.jsx', 'vite.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }, // <-- FIX: Enable JSX parsing for server files
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  // Client-side files configuration (Browser/React environment)
  {
    files: ['src/**/*.{js,jsx}'],
    // Exclude the server entry file from the client config
    ignores: ['src/entry-server.jsx'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
];
