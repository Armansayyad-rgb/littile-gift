import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
export default [js.configs.recommended,...tseslint.configs.recommended,{files:['src/**/*.{ts,tsx}'],languageOptions:{globals:{...globals.browser,...globals.es2021}},plugins:{'react-hooks':reactHooks},rules:{...reactHooks.configs.recommended.rules,'@typescript-eslint/no-unused-vars':'off','prefer-const':'off','no-irregular-whitespace':'off'}},{ignores:['dist/**']}];
