module.exports = {

    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        jasmine: true,
        jquery: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true,
                'jasmine': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'plugins': [
        'react',
        'jasmine'
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'no-tabs': 'error',

        'globals': {
            browser: 'readonly',
        }
    }
}