const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const ENTRY_FILE = path.resolve(__dirname, 'example', 'index.tsx')
const HTML_PATH = path.resolve(__dirname, 'example', 'index.html')

module.exports = {
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    ENTRY_FILE
  ],
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: HTML_PATH
    })
  ],
  devServer: {
    hot: true,
    open: true,
    publicPath: '/',
    clientLogLevel: 'warning',
    before(app, server) {
      server._watch(HTML_PATH);
    },
  }
}
