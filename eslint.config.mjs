import {defineConfig} from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsdoc from 'eslint-plugin-jsdoc';

export default defineConfig([
  {
    ...jsdoc.configs['flat/recommended-typescript-flavor'],
    ignores: ['**/*.json', '**/*.md']
  },
  {
    files: ['**/*.json'],
    plugins: {
      json
    },
    ignores: ['package-lock.json', 'babel.config.json'],
    language: 'json/json',
    ...json.configs.recommended
  },
  {
    files: ['babel.config.json'],
    plugins: {
      json
    },
    language: 'json/json5',
    ...json.configs.recommended
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
      'accessor-pairs': 'error',
      'array-bracket-newline': 'off',
      'array-bracket-spacing': 'off',
      'array-callback-return': 'off',
      'array-element-newline': 'off',
      'arrow-body-style': 'error',
      'arrow-parens': 'error',
      'arrow-spacing': 'error',
      'block-scoped-var': 'off',
      'block-spacing': 'off',
      'brace-style': 'off',
      'callback-return': 'error',
      camelcase: 'off',
      'capitalized-comments': 'off',
      'class-methods-use-this': 'error',
      'comma-dangle': 'off',
      'comma-spacing': 'off',
      complexity: 'off',
      'consistent-return': 'off',
      'consistent-this': 'off',
      curly: 'off',
      'default-case': 'error',
      eqeqeq: 'off',
      'func-name-matching': 'error',
      'func-names': 'off',
      'func-style': 'off',
      'function-paren-newline': 'off',
      'global-require': 'error',
      'guard-for-in': 'error',
      'handle-callback-err': 'error',
      'id-blacklist': 'error',
      'id-length': 'off',
      'id-match': 'error',
      'implicit-arrow-linebreak': 'off',

      indent: [
        'error',
        2,
        {
          SwitchCase: 1
        }
      ],

      'indent-legacy': 'off',
      'init-declarations': 'off',
      'jsx-quotes': 'error',
      'key-spacing': 'off',

      'keyword-spacing': [
        'error',
        {
          after: true,
          before: true
        }
      ],

      'line-comment-position': 'off',
      'linebreak-style': 'off',
      'lines-around-comment': 'off',
      'lines-around-directive': 'error',
      'lines-between-class-members': 'error',
      'max-classes-per-file': 'error',
      'max-depth': 'off',
      'max-len': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-nested-callbacks': 'error',
      'max-params': 'off',
      'max-statements': 'off',
      'max-statements-per-line': 'off',
      'multiline-comment-style': 'off',
      'new-parens': 'error',
      'newline-after-var': 'off',
      'newline-before-return': 'off',
      'newline-per-chained-call': 'off',
      'no-alert': 'off',
      'no-array-constructor': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'off',
      'no-bitwise': 'error',
      'no-buffer-constructor': 'error',
      'no-caller': 'off',
      'no-catch-shadow': 'error',
      'no-cond-assign': ['error', 'except-parens'],
      'no-confusing-arrow': 'error',
      'no-continue': 'off',
      'no-div-regex': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'off',

      'no-empty': [
        'error',
        {
          allowEmptyCatch: true
        }
      ],

      'no-empty-function': 'off',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-extra-parens': 'off',
      'no-floating-decimal': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inline-comments': 'off',
      'no-inner-declarations': ['error', 'functions'],
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'off',
      'no-loop-func': 'off',
      'no-magic-numbers': 'off',
      'no-misleading-character-class': 'error',
      'no-mixed-operators': 'off',
      'no-mixed-requires': 'error',
      'no-multi-assign': 'off',
      'no-multi-spaces': 'off',
      'no-multi-str': 'off',
      'no-multiple-empty-lines': 'error',
      'no-native-reassign': 'error',
      'no-negated-condition': 'off',
      'no-negated-in-lhs': 'error',
      'no-nested-ternary': 'off',
      'no-new': 'error',
      'no-new-func': 'warn',
      'no-new-object': 'error',
      'no-new-require': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'off',
      'no-path-concat': 'error',
      'no-plusplus': 'off',
      'no-process-env': 'error',
      'no-process-exit': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'off',
      'no-restricted-globals': 'error',
      'no-restricted-imports': 'error',
      'no-restricted-modules': 'error',
      'no-restricted-properties': 'error',
      'no-restricted-syntax': 'error',
      'no-return-assign': ['error', 'except-parens'],
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow': 'off',
      'no-shadow-restricted-names': 'error',
      'no-spaced-func': 'error',
      'no-sync': 'error',
      'no-tabs': 'error',
      'no-template-curly-in-string': 'error',
      'no-ternary': 'off',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',
      'no-underscore-dangle': 'off',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',

      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_'
        }
      ],

      'no-use-before-define': 'off',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'off',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'off',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'off',
      'no-void': 'error',
      'no-warning-comments': 'warn',
      'no-whitespace-before-property': 'error',
      'no-with': 'error',
      'nonblock-statement-body-position': ['error', 'any'],
      'object-curly-newline': 'error',
      'object-curly-spacing': 'error',
      'object-shorthand': 'off',
      'one-var': 'off',
      'one-var-declaration-per-line': ['error', 'initializations'],
      'operator-assignment': 'off',
      'operator-linebreak': 'error',
      'padded-blocks': 'off',
      'padding-line-between-statements': 'error',
      'prefer-arrow-callback': 'off',
      'prefer-const': 'error',
      'prefer-destructuring': 'off',
      'prefer-numeric-literals': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-reflect': 'off',
      'prefer-rest-params': 'error',
      'prefer-spread': 'off',
      'prefer-template': 'off',
      'quote-props': 'off',
      quotes: 'off',
      radix: 'off',
      'require-atomic-updates': 'error',
      'require-await': 'error',
      'jsdoc/require-jsdoc': 'off',
      'require-unicode-regexp': 'off',
      'rest-spread-spacing': 'error',
      semi: 'error',

      'semi-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ],

      'semi-style': ['error', 'last'],
      'sort-keys': 'off',
      'sort-vars': 'off',
      'space-before-blocks': 'off',
      'space-before-function-paren': 'off',
      'space-in-parens': 'off',
      'space-infix-ops': 'off',

      'space-unary-ops': [
        'error',
        {
          nonwords: false,
          words: true
        }
      ],

      'spaced-comment': 'off',
      strict: ['error', 'never'],
      'switch-colon-spacing': 'error',
      'symbol-description': 'error',
      'template-curly-spacing': 'error',
      'template-tag-spacing': 'error',
      'unicode-bom': ['error', 'never'],
      'vars-on-top': 'off',
      'wrap-regex': 'off',
      'yield-star-spacing': 'error',
      yoda: ['error', 'never']
    }
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
]);
