module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/jsx-runtime', 'airbnb', 'airbnb-typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase'],
            },
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
        ],
    },
};
