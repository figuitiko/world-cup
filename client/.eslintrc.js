module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
        'prefer-const': ['error', { 'destructuring': 'all' }],
        'react/jsx-indent-props': ['error', 2],
        'react/prop-types':0,
        'react/react-in-jsx-scope': 'off'
    }
}
