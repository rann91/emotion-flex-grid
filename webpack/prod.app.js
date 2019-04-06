const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { APP_ENTRY, APP_OUTPUT, APP_TEMPLATE, APP_STATIC_FILES, APP_STATIC_OUPUT } = require('./constants')

module.exports = {
  mode: 'production',
  entry: APP_ENTRY,
  output: {
    filename: 'index.js',
    path: APP_OUTPUT,
    publicPath: '/'
  },
  devtool: 'source-map',
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
        to: APP_STATIC_OUPUT
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
