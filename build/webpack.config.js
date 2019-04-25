const path = require('path')
const webpack = require('webpack')

module.exports = [{
  entry: {
    index: './js/src/index.js'
  },
  output: {
    filename: 'roar.min.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'Roar',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader'}
        ]
      }
    ]
  },
  mode: 'production',
  plugins: [
    new webpack.ProgressPlugin()
  ]
}]
