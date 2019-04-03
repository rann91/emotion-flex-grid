const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

module.exports = (_, argv) => {
  return merge({
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    }
  }, argv.mode === 'development' ? devConfig : prodConfig)
}
