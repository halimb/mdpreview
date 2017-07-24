module.exports = {
	
	entry: __dirname + "/index.js",
	
	output: {
		filename: "compiled_index.js",
		path: __dirname + "/build"
	},

	devServer: {
		contentBase: __dirname + "/build",
		port: 8080
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},

			{
				test: /\.ttf$/,
				loader: "file-loader"
			},

			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader!postcss-loader"
			},

			{
				test: /\.(png|jpg)$/,
				loader: "url-loader"
			}
		]
	}

}