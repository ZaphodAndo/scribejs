const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  devtool: "source-map",
  output: {
    filename: "scribe.js",
    path: path.resolve(__dirname, "dist"),
    library: "ScribeJs",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }]
  }
};
