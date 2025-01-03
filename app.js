require('dotenv').config();
const express = require("express");
const app = express();

// Enable EJS as the view engine, will look for templates in /views dir
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
const HOST_NAME = "localhost";
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
    res.render("index", { links: links, users: users });
});

// Handle unexpected route (404 error)
app.get('*', (req, res) => res.status(404).sendFile('pages/404.html', {root: '.'}));

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port http://${HOST_NAME}:${PORT}!`);
});