var path = require('path');
var webpack = require('webpack');
var extend = require('extend');
var baseConfig = require('./webpack.base.js');
var config= require('./config.js');

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv !== 'production';



var clientConfig =extend(true,{},baseConfig,{

  target: 'web',
  entry: [
    path.join(__dirname,'../src/client.js')
  ],
  output:{
    path: path.join(__dirname, '../build/public/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  cache: isDev,
  debug: isDev,
  devtool: isDev ? 'source-map' : false,
  devServer:!isDev? {} : {
    port: config.WEBPACK_DEV_SERVER_PORT,
    inline:true,
    hot:true,
    proxy:{
      '/':{
        target: 'http://localhost:'+config.NODE_SERVER_PORT,
        secure:false
      }
    }
  }

})


module.exports=clientConfig;
