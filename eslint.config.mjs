import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // ✅ pour autoriser require et module.exports
      globals: {
        ...globals.node, // ✅ variables globales Node (module, require, process…)
      },
    },
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.jest, // ✅ autorise test, expect, describe…
        ...globals.node,
      },
    },
  },
];