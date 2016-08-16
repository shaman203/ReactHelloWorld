const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  entry: "./app.jsx",

  output: {
    filename: "app.js",
    path: "/wwwroot",
  },
  module: {
        loaders: [
            {
              test: /\.jsx?$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
              }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    },
  plugins: [new HtmlWebpackPlugin(
   {
     template: 'index.template.ejs',
     inject: 'body'
   })]

};
