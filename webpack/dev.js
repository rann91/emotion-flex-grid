const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { createEmotionPlugin } = require('emotion-ts-plugin')
const { APP_ENTRY, APP_POLYFILL_ENTRY, APP_TEMPLATE, APP_PATH } = require('./constants')

module.exports = {
  mode: 'development',
  entry: {
    polyfills: APP_POLYFILL_ENTRY,
    index: [APP_ENTRY, 'webpack/hot/only-dev-server', 'webpack-dev-server/client']
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: APP_TEMPLATE
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [createEmotionPlugin()]
          })
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    publicPath: '/',
    contentBase: APP_PATH,
    clientLogLevel: 'warning',
    overlay: true,
    before(_, server) {
      server._watch(APP_TEMPLATE)
    }
  }
}
