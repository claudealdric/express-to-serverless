const express = require("express");

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", (_, res) => {
  res.send("Hello World!\n");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
