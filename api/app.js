const express = require("express");
const { Sequelize } = require("sequelize");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.json({ hi: "hi" });
});

module.exports = app;
