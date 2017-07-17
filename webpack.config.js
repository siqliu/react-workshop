var path = require('path');

const HtmlWebpackPluging = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {test:/\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins:[
    new HtmlWebpackPluging({template: './app/index.html'})
  ]
};


