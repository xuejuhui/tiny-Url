const express = require("express");
const db = require("./models/index");

const urlRoute = require("./routes/url");
const app = express();

db.sequelize
  .authenticate()
  .then(async () => {
    console.log("Connected to Sequelize/MYSQL");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", urlRoute);

module.exports = app;
