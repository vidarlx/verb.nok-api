var path = require('path');
var nodeExternals = require('webpack-node-externals');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__filename, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ],
  },
  externals: [nodeExternals()],
  target: 'node'
}

module.exports = config;
