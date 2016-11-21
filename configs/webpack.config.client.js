var path = require('path');
var webpack = require('webpack');

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv !== 'production';



var clientConfig ={
  target: 'web',
  context: __dirname,
  entry: {
    path: path.join(__dirname,'src'),
    filename: 'client.js'
  },
  output:{
    path: path.join(__dirname, '../build/public/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      },
    ]
  },
  cache: isDev,
  debug: isDev,
  devtool: isDev ? 'source-map' : false

}

module.exports=clientConfig;
