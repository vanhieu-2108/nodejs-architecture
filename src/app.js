const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

// Init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// morgan("combined");
// morgan("common");
// morgan("short");
// morgan("tiny");
// Init db
// Init routes
app.get("/", (req, res) => {
  const strCompress = "Hello Fantipjs";
  return res.status(200).send({
    message: "Welcome Fantipjs",
    metadata: strCompress.repeat(100000),
  });
});
// Handle error
module.exports = app;
