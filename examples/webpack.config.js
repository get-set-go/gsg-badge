'use strict';

var webpack = require('webpack');
var path = require('path');

var config = {
  entry: path.join(__dirname, 'index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.min.js'
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0', 'stage-1']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
