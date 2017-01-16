module.exports = {
    extends: [
        'eslint-config-picdorsey-base',
        'eslint-config-picdorsey-base/rules/strict',
        'vue',
    ].map(require.resolve),
    rules: {}
};
