'use strict';

/**
 * Import module dependencies from node_modules
 */
const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');

/**
 * Import module dependencies form local/current directory
 */
const commonWebpackConfig = require('./common.webpack.config');
const settings = require('../settings/component.config');

/**
 * Export Webpack development configuration.
 */
const devWebpackConfig = {
	/**
	 * Options affecting the output of the Webpack bundling.
	 */
	output: {
		/**
		 * Required. The output directory as absolute path.
		 */
		path: `${settings.bundle.output}`,

		/**
		 * Specifies the name of each output file.
		 */
		filename: `${settings.bundle.filename}`,

		/**
		 * Specify the filename of the source-map file for JavaScript files.
		 */
		sourceMapFilename: `${settings.bundle.mapfile}`,
    
    /**
     * Specify library target
     */
    libraryTarget: 'umd'
	},

	/**
	 * Module will get concatenated with Webpack common config module
	 */
	module: {},

	/**
	 * Plugins will get concatenated with Webpack common config plugins
	 */
	plugins: [
		/**
		 * Reference environment variables through process.env
		 */
		new DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(`${settings.dev.env}`)
			}
		})
	],

	/**
	 * Webpack dev server options
	 */
	devServer: {
		port: `${settings.dev.port}`,
		host: `${settings.dev.host}`
	}
};

module.exports = webpackMerge(commonWebpackConfig, devWebpackConfig);
