import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      // The brutalist design intentionally renders literal "// LABEL" text
      // (e.g. `<div>// TODAY · LEAKING</div>`) as visual content, which this
      // rule mistakes for a stray JS comment.
      "react/jsx-no-comment-textnodes": "off",
      // Ported copy uses plain straight quotes/apostrophes throughout;
      // enforcing HTML entities here would mean hand-editing ~150KB of
      // marketing copy for a purely cosmetic lint rule.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
