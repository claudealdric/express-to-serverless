const express = require("express");
const serverless = require("serverless-http");

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send("Hello World!\n");
});

// If running the server normally (e.g., for local development)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

// For serverless deployment
module.exports.handler = serverless(app);
