const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const path = require('path')

const OUTPUT_PATH = path.resolve(__dirname, 'dist')

module.exports = (_, argv) => {
  const config = {
    output: {
      filename: 'index.js',
      path: OUTPUT_PATH,
      library: 'emotion-flex-grid',
      libraryTarget: 'umd'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        }
      ]
    }
  }

  return merge.smart(
    config,
    argv.mode === 'development' ? devConfig : prodConfig
  )
}
