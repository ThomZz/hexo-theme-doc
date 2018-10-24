'use strict';
const path = require('path');

module.exports = {
  externals: {
    jquery: '$',
    lunr: true,
  },
  entry:  {
    'doc': './lib/browser/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'source/script'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
