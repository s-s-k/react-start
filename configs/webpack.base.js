var path = require('path');
var webpack = require('webpack');



var baseConfig ={

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: function() {
    return [ require('autoprefixer'), require('precss')];
  },

}

module.exports=baseConfig;
