const express = require("express"),
  route = express.Router(""),
  services = require("../services/render");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);

/**
 * @description Contact Route
 * @method GET /
 */
route.get("/contact", services.contact);

/**
 * @description About Route
 * @method GET /
 */
route.get("/about", services.about);

module.exports = route;
