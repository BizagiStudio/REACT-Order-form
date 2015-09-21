var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve('app/modules'),
	entry: ["./index"],
	output: {
		path: path.resolve('app/assets/js'),
		publicPath: '/app/assets/js',
		filename: "bundle.js"
	},


	devServer: {
		contentBase: 'app'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
			},
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('shared.js')
	],

	resolve: {
		extensions: ['','.js']
	}
}