const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { APP_ENTRY, APP_OUTPUT, APP_TEMPLATE } = require('./constants')

module.exports = {
  mode: 'production',
  entry: APP_ENTRY,
  output: {
    filename: 'index.js',
    path: APP_OUTPUT,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: APP_TEMPLATE
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                outDir: APP_OUTPUT
              }
            }
          },
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: true,
              typeCheck: true
            }
          }
        ]
      }
    ]
  }
}
