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
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.prod.json'
        }
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
