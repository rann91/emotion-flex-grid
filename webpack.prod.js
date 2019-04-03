const CleanWebpackPlugin = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'emotion-flex-grid',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.prod.json'
        }
      },
      { 
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  externals: [
    nodeExternals({
      whitelist: ['facepaint']
    })
  ]
}
