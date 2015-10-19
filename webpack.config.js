var webpack = require('webpack');

module.exports = {
  entry: './app/scripts/index.js',
  devtool: 'eval',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?optional[]=runtime&stage=0', exclude: /node_modules/ }
    ]
  },
  noInfo: true
};
