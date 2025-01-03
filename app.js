require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT || 3000;
const HOST_NAME = "localhost";
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port http://${HOST_NAME}:${PORT}!`);
});