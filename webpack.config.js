const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const path = require('path')

const OUTPUT_PATH = path.resolve(__dirname, 'dist')

module.exports = (_, argv) => merge.smart(
  {
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
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        }
      ]
    }
  },
  argv.mode === 'development' ? devConfig : prodConfig
)
