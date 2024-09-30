const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World!\n");
});

module.exports.handler = serverless(app);
