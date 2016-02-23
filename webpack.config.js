var path = require('path');
var argv = require('yargs').argv;
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var defaultLocale = 'en-US';

var entry = {
	main: [
		'./src/client.js',
		'./src/styles/main.scss'
	]
};

module.exports = [{
	context: __dirname,
	entry: entry,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.js$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			},
			{
				test: /\.[s]?css$/,
				loaders: [ 'style-loader', 'css?sourceMap', 'sass?sourceMap', 'autoprefixer-loader' ]
			},
			{
				test: /\.woff[2]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&minetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			locale: JSON.stringify(argv.locale || defaultLocale)
		}),
		new webpack.ProvidePlugin({
			localeMessages: path.join(__dirname, 'src/intl/' + (argv.locale || defaultLocale)),
			localeData: 'react-intl/dist/locale-data/' + (argv.locale ? argv.locale.split('-')[0] : 'en')
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body'
		})
	],
	sassLoader: {
		includePaths: [
			'node_modules/foundation-sites/scss',
			'node_modules/normalize.scss',
			'src/components'
		]
	}
}];

