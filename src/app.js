const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();
// Init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// Init db
const { checkOverload } = require("./helpers/check.connect");
checkOverload();
// Init routes

// Handle error
module.exports = app;
