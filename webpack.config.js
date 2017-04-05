var path = require('path');

module.exports = {
	// entry: {
	// 	app: path.resolve(__dirname, './src/app.js')
	//  	//hello: path.resolve(__dirname, './src/main.js')
	//  },
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/app.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
}