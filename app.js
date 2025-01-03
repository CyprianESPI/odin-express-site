require('dotenv').config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const HOST_NAME = "localhost";
const ROUTES = [
    { urlPath: '/', filePath: '/pages/index.html'},
    { urlPath: '/about', filePath: '/pages/about.html'},
    { urlPath: '/contact-me', filePath: '/pages/contact-me.html'},
]

ROUTES.forEach((route) => {
    app.get(route.urlPath, (req, res) => res.sendFile(route.filePath, {root: '.'}));
})

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port http://${HOST_NAME}:${PORT}!`);
});