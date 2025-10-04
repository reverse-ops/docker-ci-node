import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly",
      },
      sourceType: "commonjs",
    },
    env: {
      node: true,
      es2021: true,
      jest: true,
    },
    rules: {},
  },
];
