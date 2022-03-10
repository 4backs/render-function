module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-useless-escape': 'off',
        "object-curly-spacing": ["error", "always"],
        '@typescript-eslint/indent': ["error", 4, { "SwitchCase": 1 }],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        "@typescript-eslint/no-var-requires": "off",
        '@typescript-eslint/semi': ["warn"],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-empty-function': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
};
  