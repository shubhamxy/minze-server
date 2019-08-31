module.exports = {
  parser: 'typescript',
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  arrowParens: 'avoid',
  bracketSpacing: false,
  proseWrap: 'preserve',
  requirePragma: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200
      }
    }
  ]
};
