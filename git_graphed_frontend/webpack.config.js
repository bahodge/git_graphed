// const HtmlWebPackPlugin = require('html-webpack-plugin');

// // const htmlPlugin = new HtmlWebPackPlugin({
// // 	template: './src/index.html',
// // 	filename: './index.html'
// // });

// module.exports = {
// 	entry: './src/index.js',

// 	output: {
// 		path: __dirname + '/dist',
// 		publicPath: '/',
// 		filename: 'bundle.js'
// 	},
// 	devServer: {
// 		contentBase: './dist'
// 	},

// 	module: {
// 		rules: [
// 			{
// 				test: /\.(graphql|gql)$/,
// 				loader: 'graphql-tag/loader',
// 				exclude: /node_modules/
// 			},
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				use: {
// 					loader: 'babel-loader'
// 				}
// 			},
// 			{
// 				test: /\.css$/,
// 				use: [ 'style-loader', 'css-loader' ]
// 			}
// 		]
// 	}
// 	// plugins: [ htmlPlugin ]
// };
