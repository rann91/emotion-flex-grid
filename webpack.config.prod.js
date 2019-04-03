const CleanWebpackPlugin = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', options: { configFile: 'tsconfig.prod.json' } },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  externals: [
    nodeExternals({ whitelist: ['facepaint'] })
  ]
}
