module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  extends: ['plugin:vue/vue3-recommended', '@josephanson/eslint-config-ts'],
  rules: {
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
