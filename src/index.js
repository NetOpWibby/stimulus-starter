"use strict";



//  I M P O R T S

import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";



//  P R O G R A M

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);

application.load(definitionsFromContext(context));
