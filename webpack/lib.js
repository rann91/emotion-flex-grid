const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const { LIB_ENTRY, LIB_NAME, LIB_OUTPUT } = require('./constants')

module.exports = {
  mode: 'production',
  entry: LIB_ENTRY,
  output: {
    filename: 'index.js',
    path: LIB_OUTPUT,
    library: LIB_NAME,
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.lib.json',
              compilerOptions: {
                declaration: true,
                outDir: LIB_OUTPUT
              }
            }
          }
        ]
      }
    ]
  },
  externals: [
    nodeExternals({
      allowlist: ['facepaint']
    })
  ]
}
