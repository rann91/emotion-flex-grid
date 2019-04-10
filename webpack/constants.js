const path = require('path')

const resolvePath = function(subPath) {
  return path.resolve(__dirname, '..', subPath)
}

module.exports = {
  SRC_PATH: resolvePath('src'),
  LIB_NAME: 'emotion-flex-grid',
  LIB_ENTRY: resolvePath('src/lib/index.ts'),
  LIB_OUTPUT: resolvePath('build/lib'),
  APP_POLYFILL_ENTRY: resolvePath('src/polyfills.ts'),
  APP_ENTRY: resolvePath('src/index.tsx'),
  APP_OUTPUT: resolvePath('build/app'),
  APP_TEMPLATE: resolvePath('src/index.html'),
  APP_STATIC_FILES: resolvePath('src/static'),
  APP_STATIC_OUTPUT: resolvePath('build/app/static')
}
