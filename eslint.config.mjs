import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  { ignores: ['.next/**', '.next-dev/**', 'out/**', 'node_modules/**'] },
  ...compat.extends('next/core-web-vitals').map((config) => ({
    ...config,
    files: ['**/*.{js,jsx,mjs,cjs}']
  }))
];

export default eslintConfig;
