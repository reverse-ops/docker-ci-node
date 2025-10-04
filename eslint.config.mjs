import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
      ecmaVersion: 2021,
      sourceType: "commonjs",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      // tu peux ajouter tes propres règles ici
    },
  },
  {
    files: ["tests/**"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
  },
];
