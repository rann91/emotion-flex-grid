const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { APP_ENTRY, APP_POLYFILL_ENTRY, APP_OUTPUT, APP_TEMPLATE, APP_STATIC_FILES, APP_STATIC_OUTPUT } = require('./constants')

module.exports = {
  mode: 'production',
  entry: {
    polyfills: APP_POLYFILL_ENTRY,
    index: APP_ENTRY
  },
  output: {
    filename: '[name].[contenthash].js',
    path: APP_OUTPUT
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: APP_TEMPLATE
    }),
    new CopyWebpackPlugin([
      {
        from: APP_STATIC_FILES,
        to: APP_STATIC_OUTPUT
      }
    ])
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
