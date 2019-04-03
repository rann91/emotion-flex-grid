const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src', 'example', 'index.tsx')
  ],
  output: {
    publicPath: '/'
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'example', 'index.html')
    })
  ],
  devServer: {
    hot: true,
    open: true
  }
}