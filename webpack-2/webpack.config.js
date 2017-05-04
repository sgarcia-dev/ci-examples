const path = require('path');

// custom plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
		/* Used by any loader that produces a direct file path reference,
		to a file on an output directory */
		publicPath: 'dist/'
    },
    module: {
        rules: [ /* LOADERS */
			/* javascript Babel Loader */
			{
                use: 'babel-loader',
                test: /\.js$/
            },
			/* CSS Loader*/
            {
				/* Output CSS into external CSS file */
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				}),
				/* For injecting CSS into <head>, comment top and uncomment bottom */
                /* use: ['style-loader', 'css-loader'], */
                test: /\.css$/
            },
			/* Image Loader */
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [ /* Last loader is the first one being processed */
					{ /* Extended loader syntax */
						loader: 'url-loader',
						options: { limit: 40000 }
					},
					{
						loader: 'image-webpack-loader',
						options: {}
					}
				]
			}
        ]
    },
	plugins: [
		/* Set up CSS plugin */
		new ExtractTextPlugin("styles.css")
	]
};

module.exports = config;
