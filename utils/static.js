const express = require("express");
const path = require("path");

exports.setStatics = (app) => {
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(
    express.static(path.join(__dirname, "..", "node_modules", "font-awesome"))
  );
};
