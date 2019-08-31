// Overriding CreateReactApp settings, ref: https://github.com/arackaf/customize-cra
const {
  override,
  fixBabelImports,
  addLessLoader,
  useEslintRc,
  addDecoratorsLegacy,
} = require('customize-cra')
const antdTheme = require('./src/theme.js')

module.exports = override(
  addDecoratorsLegacy(),
  useEslintRc(),
  fixBabelImports('import', {
    libraryName: 'antd', libraryDirectory: 'es', style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: antdTheme
  })
)
