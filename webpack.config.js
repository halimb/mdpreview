module.exports = {
	
	entry: __dirname + "index.js",
	
	output: {
		file: "compiled_index.js",
		path: __dirname + "/build"
	},

	devServer: {
		contentBase: __dirname + "/build",
		port: 8080
	},

	module: {
		laoders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},

			{
				test: /\.scss$/,
				laoder: "style-loader!sass-loader!postcss"
			}
		]
	}

}