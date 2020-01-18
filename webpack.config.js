"use strict";



//  N A T I V E

const path = require("path");



//  E X P O R T

module.exports = exports = {
  devtool: "source-map",
  entry: {
    bundle: "./src/index.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        exclude: [
          /node_modules/
        ],
        test: /\.js$/,
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
  }
}
