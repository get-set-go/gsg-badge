'use strict';

/**
 * Import module dependencies form local/current directory
 */
const settings = require('../settings/component.config');

/**
 * Export Webpack common configuration
 */
const commonWebpackConfig = {
	/**
	 * Entry point file for bundling the application
	 */
	entry: `${settings.gateway.client}${settings.gateway.entry}`,

	module: {
		loaders: [
			/**
			 * Babel loader support for *.(js|jsx) files.
			 * This set also includes babel presets for ES6 and React
			 */
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-0', 'stage-1'],
          plugins: ['transform-runtime']
				}
			},

			/**
			 * Json loader support for *.json files.
			 */
			{
				test: /\.json$/,
				loader: 'json-loader'
			},

			/**
			 * Style, Less loader support for *.less files.
			 */
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},

			/**
			 * Style, CSS loader support for *.css files.
			 */
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},

			/**
			 * File loader support for *.(jpg|jpeg|png|gif) files.
			 */
			{
				test: /\.(jpg|jpeg|png|gif)?$/,
				loader: 'file-loader'
			},

			/**
			 * URL loader support for font woff(2) files.
			 */
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},

			/**
			 * File loader support for rest of the fonts (ttf, eot, svg)
			 */
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file"
			}
		]
	},

	plugins: [],

  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'classnames': 'classnames',
    'object-assign': 'object-assign'
  }
};

module.exports = commonWebpackConfig;
