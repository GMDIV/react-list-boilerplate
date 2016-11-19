
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/build/index.html',
  filename: '/src/build/index.html',
  inject: false
});

module.exports = {
  entry: [
    './src/app'
  ],
  module: {
    loaders: [
    	{ test:/\.js$/,
    	exclude: /node_modules/, 
    	loader: 'babel-loader',
    	query: {
    		presets: ['es2015', 'react']
     	}
       }
    ], 
    
  }, 
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/src/build',
  
  },
  plugins: [HTMLWebpackPluginConfig]
}