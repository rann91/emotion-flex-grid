const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { APP_ENTRY, APP_TEMPLATE } = require('./constants')

module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    APP_ENTRY
  ],
  output: {
    filename: 'index.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
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
        loader: 'ts-loader'
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
    clientLogLevel: 'warning',
    before(app, server) {
      server._watch(APP_TEMPLATE);
    },
  }
}
