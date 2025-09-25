import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default [
  // 忽略的文件和目录
  {
    ignores: ['node_modules/', 'dist/', 'build/']
  },

  // JavaScript 文件配置
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js 全局变量
        global: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        console: 'readonly',

        // Browser 全局变量
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        history: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        XMLHttpRequest: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': 'off',
      'indent': ['error', 2],
      'semi': ['error', 'never'],
      'no-irregular-whitespace': 'off',
      'no-trailing-spaces': 'warn',
      'curly': 'off',
      'no-var': 'warn',
      'eqeqeq': 'warn',
      'no-unused-expressions': 'warn',
      'array-callback-return': 'warn',
      'no-undef': 'warn',
      'no-tabs': 'warn',
      'no-unused-vars': 'warn',
      'no-constant-condition': 'off'
    }
  },

  // TypeScript 文件配置
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js 全局变量
        global: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        console: 'readonly',

        // Browser 全局变量
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        history: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        XMLHttpRequest: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      // 基础规则
      'no-console': 'off',
      'semi': 'off',
      'no-irregular-whitespace': 'off',
      'no-trailing-spaces': 'warn',
      'curly': 'off',
      'no-var': 'warn',
      'eqeqeq': 'warn',
      'no-unused-expressions': 'off', // 关闭基础规则，使用 TypeScript 版本
      'array-callback-return': 'warn',
      'no-undef': 'off', // TypeScript 会处理未定义变量
      'no-tabs': 'warn',
      'no-unused-vars': 'off', // 关闭基础规则，使用 TypeScript 版本
      'no-constant-condition': 'warn',

      // TypeScript 特定规则
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
]