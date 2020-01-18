"use strict";



//  N A T I V E

import path from "path";

//  I M P O R T S

import express from "express";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";

//  U T I L S

import __dirname from "./src/utils/dirname.js";
import webpackConfig from "./webpack.config.js";

const app = express();
const publicPath = path.join(__dirname, "public");
const port = process.env.PORT || 9000;



//  P R O G R A M

app.use(express.static(publicPath));
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
