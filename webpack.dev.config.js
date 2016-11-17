var webpack = require('webpack');
var path = require('path');
var nodeEnv= process.env.NODE_ENV || 'development';
var isDev = nodeEnv!== 'production';

var webpackConfig={
  name: 'client',
  target: 'web',
}


module.exports = {
  entry: {
    index:path.join(__dirname,'src','client.js')
  },
  output: {
    path:'build',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx'],
  },
  plugins: [

  ]
}
