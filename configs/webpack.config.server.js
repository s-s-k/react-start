var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var baseConfig = require('./webpack.base.js');
var extend = require('extend');

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv !== 'production';



var serverConfig =extend(true, {}, baseConfig, {
  target: 'node',
  entry: [
    path.join(__dirname,'../src/server.js')
  ],
  output:{
    path: path.join(__dirname, '../build'),
    filename: 'server.js'
  },
 // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.join(__dirname, '../node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),
  cache: isDev,
  debug: isDev,
  devtool: isDev ? 'source-map' : false,
  node: {
    __dirname: false,
    __filename: false
  }

});
module.exports=serverConfig;
