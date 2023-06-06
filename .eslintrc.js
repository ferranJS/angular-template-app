module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'standard-with-typescript',
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "space-before-function-paren": "warn",
    "prefer-const": "warn"
  },
  root: true
}
