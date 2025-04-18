import {defineConfig} from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import json from 'eslint-plugin-json';
import markdown from '@eslint/markdown';
import prettier from 'eslint-plugin-prettier';
import {FlatCompat} from '@eslint/eslintrc';
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsdoc from 'eslint-plugin-jsdoc';

import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

export default defineConfig([
  ...compat.extends('eslint:recommended', 'plugin:prettier/recommended'),
  {
    ...jsdoc.configs['flat/recommended-typescript-flavor'],
    ignores: ['**/*.json', '**/*.md']
  },
  {
    files: ['**/*.json'],
    plugins: {json, prettier},
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
      prettier,
      js
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.greasemonkey,
        ...globals.node
      },

      ecmaVersion: 2022, // Ensure ECMAScript version supports ES modules
      sourceType: 'module' // Explicitly set source type to 'module'
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
  }
]);
