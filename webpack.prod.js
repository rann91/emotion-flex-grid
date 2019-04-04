const CleanWebpackPlugin = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const ENTRY_FILE = path.resolve(__dirname, 'src', 'index.ts')

module.exports = {
  entry: ENTRY_FILE,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.prod.json'
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
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  externals: [
    nodeExternals({
      whitelist: [
        'facepaint'
      ]
    })
  ]
}
