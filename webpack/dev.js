const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { APP_ENTRY, APP_TEMPLATE, APP_PATH } = require('./constants')

module.exports = {
  mode: 'development',
  entry: {
    index: [APP_ENTRY]
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
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
    contentBase: APP_PATH,
    overlay: true,
    before(_, server) {
      server._watch(APP_TEMPLATE)
    }
  }
}
