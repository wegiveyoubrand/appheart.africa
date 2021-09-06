// set modules and variables
const express = require("express"),
  dotenv = require("dotenv"),
  morgan = require("morgan"),
  bodyparser = require("body-parser"),
  path = require("path"),
  app = express("");

// PORT Setup
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// log requests
app.use(morgan("tiny"));

// parse request ot body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// load assets
app.use(express.static("assets"));

// load routers
app.use("/", require("./server/routes/router"));
