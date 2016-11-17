var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: false
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
    	{ test:/\.js$/,
    	exclude: /node_modules/, 
    	loader: 'babel-loader',
    	query: {
    		presets: ['babel-preset-es2015']
     	}
       }
    ], 
    
  }, 
  output: {
    filename: "index_bundle.js",
    path: __dirname,
    publicPath: '/'
  },
  plugins: [HTMLWebpackPluginConfig]
}