// webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "randomName.js",
    path: path.resolve(__dirname, "RANDOM")
  }
};