const path = require('path')

const resolvePath = function(p) {
  return path.join(path.resolve(__dirname, '..'), p)
}

module.exports = {
  LIB_NAME: 'emotion-flex-grid',
  LIB_ENTRY: resolvePath('src/lib/index.ts'),
  LIB_OUTPUT: resolvePath('build/lib'),
  APP_ENTRY: resolvePath('src/index.tsx'),
  APP_OUTPUT: resolvePath('build/app'),
  APP_TEMPLATE: resolvePath('src/index.html')
}
