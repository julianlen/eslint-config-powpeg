const js = require('@eslint/js');
const globals = require("globals");

const JS_FILES = ['**/*.js']; // only .js files (not .mjs/.cjs)

module.exports = [
    // Optional global ignores
    { ignores: ['node_modules/**', 'dist/**', 'coverage/**'] },

    // Apply everything below only to .js files
    { files: JS_FILES },

    // Equivalent of "extends: ['eslint:recommended']"
    js.configs.recommended,

    // Your environment + language options
    {
        files: JS_FILES,
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2021,
                ...globals.mocha,
            },
        },
        rules: {
            'no-console': 'warn',
            'prettier/prettier': 'error',
        },
    }
];

