'use strict';

var webpack = require('webpack');
var path = require('path');
var product = require('./package.json');

var banner = product.name + " v" + product.version;
banner += "\nDeveloped & maintained by " + product.author + " and contributors."
banner += "\nMIT Licensed"

var config = {
  entry: path.join(__dirname, 'src', 'index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.min.js',
    libraryTarget: 'umd'
  },

  externals: {
    'react': 'react'
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0', 'stage-1'],
        plugins: ['transform-runtime']
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

    new webpack.optimize.UglifyJsPlugin(),

    new webpack.BannerPlugin(banner)
  ]
};

module.exports = config;
