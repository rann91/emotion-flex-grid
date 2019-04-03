const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const path = require('path')

module.exports = (_, argv) => {
  const dev = argv.mode === 'development'

  const PATHS = {
    entry: dev
      ? path.resolve(__dirname, 'src', 'example', 'index.tsx')
      : path.resolve(__dirname, 'src', 'index.ts'),
    outputDir: path.resolve(__dirname, 'dist'),
    template: path.resolve(__dirname, 'src', 'example', 'index.html'),
    tsConfigFile: dev ? 'tsconfig.json' : 'tsconfig.prod.json'
  }

  const commonConfig = {
    entry: PATHS.entry,
    output: {
      filename: 'index.js',
      path: PATHS.outputDir,
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
          loader: 'ts-loader',
          options: {
            configFile: PATHS.tsConfigFile
          }
        },
        { 
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        }
      ]
    }
  }

  const devConfig = {
    plugins: [
      new HtmlWebpackPlugin({
        template: PATHS.template
      })
    ]
  }

  const prodConfig = {
    plugins: [
      new CleanWebpackPlugin()
    ],
    externals: [
      nodeExternals({
        whitelist: ['facepaint']
      })
    ]
  }

  return merge(commonConfig, dev ? devConfig : prodConfig)
}
