var path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js"
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
