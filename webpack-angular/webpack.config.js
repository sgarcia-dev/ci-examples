var webpack = require('webpack'),
	path = require('path'),
	// webpack plugins
	CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
	context: path.resolve(__dirname,'app'),
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: path.resolve(__dirname, 'public')
	},
	devServer: {
		contentBase: './public/'
	},
	plugins: [
		// copies html to public directory
		new CopyWebpackPlugin([
			{ from: path.resolve(__dirname, 'app', 'index.html'),
				to:  path.resolve(__dirname, 'public')}
		]),
		// required bugfix for current webpack version
		new webpack.OldWatchingPlugin()
	],
	module: {
		loaders: [
			// uses babel-loader which allows usage of ECMAScript 6 (requires installing babel-preset-es2015)
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015']}},
			// uses the css-loader (loads css content) and style-loader (inserts css from css-loader into html)
			{test: /\.css$/, loader: 'style!css', exclude: /node_modules/}
		]
	}
};

module.exports = config;