import {defineConfig} from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import json from 'eslint-plugin-json';
import markdown from '@eslint/markdown';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsdoc from 'eslint-plugin-jsdoc';

export default defineConfig([
  {
    ...jsdoc.configs['flat/recommended-typescript-flavor'],
    ignores: ['**/*.json', '**/*.md']
  },
  {
    files: ['**/*.json'],
    plugins: {json},
    processor: 'json/json',
    ignores: ['package-lock.json', 'babel.config.json'],
    rules: {
      'json/*': ['error', {allowComments: false}],
      'json/invalid-escape-character': ['error']
    }
  },
  {
    files: ['babel.config.json'],
    plugins: {json},
    processor: 'json/json',
    rules: {
      'json/*': ['error', {allowComments: true}]
    }
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    language: 'markdown/commonmark',
    rules: {
      'markdown/no-html': 'off'
    }
  },
  {
    files: ['src/**/*.js', 'ci/**/*.js', '**/*.mjs'],
    extends: ['js/recommended'],
    ignores: ['src/meta.js'],
    plugins: {
      jsdoc,
      js
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.greasemonkey,
        ...globals.node
      },

      ecmaVersion: 9,
      sourceType: 'module'
    },
    rules: {
      'no-empty': [2, {allowEmptyCatch: true}],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },
  eslintPluginPrettierRecommended
]);
