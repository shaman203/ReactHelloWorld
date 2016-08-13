var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",

  output: {
    filename: "app.js",
    path: "/wwwroot",
  },
 plugins: [new HtmlWebpackPlugin()]
}
