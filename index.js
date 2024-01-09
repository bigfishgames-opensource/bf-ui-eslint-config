module.exports = {
    extends: [
        './rules/errors',
        './rules/best-practices',
        './rules/strict',
        './rules/variables',
        './rules/node',
        './rules/style',
        './rules/es6',
        './rules/imports'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {}
};
