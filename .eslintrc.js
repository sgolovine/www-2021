module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/extensions": 0,
    camelcase: 0,
    "react/prop-types": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    "arrow-body-style": ["error", "as-needed"],
    "react/no-array-index-key": 0,
    "no-use-before-define": 0,
    "import/prefer-default-export": 0,
    "no-console": "warn",
    "no-shadow": 0,
    "jsx-a11y/label-has-associated-control": 0,
  },
}
