var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client',
		'./apps/manager/main'
	],
	output: {
		path: path.join(__dirname, 'apps/manager/distribution'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx?/,
			loaders: ['babel'],
			include: [
				path.join(__dirname, 'apps'),
				path.join(__dirname, 'libs')
			]
		}]
	}
};