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
    "import/no-unresolved": 0,
    "arrow-body-style": ["error", "as-needed"],
    "no-use-before-define": 0,
    "import/prefer-default-export": 0,
    "no-console": "warn",
    "no-shadow": 0,
    "consistent-return": 0,
    // Disable some accessability rules for now
    // Will re-enable later when we do full acc
    // On the site.
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "no-underscore-dangle": 0,
    // Disable some react rules.
    // Typescript takes care of this already
    "react/prop-types": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/no-array-index-key": 0,
    "react/function-component-definition": 0,
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/anchor-is-valid": 0,
  },
}
