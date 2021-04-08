const path = require('path')

const resolvePath = function (subPath) {
  return path.resolve(__dirname, '..', subPath)
}

module.exports = {
  LIB_NAME: 'emotion-flex-grid',
  LIB_ENTRY: resolvePath('src/lib/index.ts'),
  LIB_OUTPUT: resolvePath('build/lib'),
  APP_PATH: resolvePath('src/app'),
  APP_ENTRY: resolvePath('src/app/index.tsx'),
  APP_OUTPUT: resolvePath('build/app'),
  APP_TEMPLATE: resolvePath('src/app/index.html'),
  APP_STATIC_FILES: resolvePath('src/app/static'),
  APP_STATIC_OUTPUT: resolvePath('build/app/static')
}
