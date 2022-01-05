module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'next',
    // 'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    // 'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@next/next/recommended',
    'prettier', // Використовуємо eslint-config-prettier, щоб позбавитись від правил ESLint з плагіна @typescript-eslint/eslint-plugin, що може конфліктувати з prettier
    'plugin:prettier/recommended' // Активуємо eslint-plugin-prettier та показуємо помилки prettier у вигляді помилок ESLint. Переконайтеся, що це завжди остання конфігурація в масиві extends.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
}
