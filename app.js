require('dotenv').config();
const express = require("express");
const app = express();
const path = require("node:path");

// Serve /public/styles.css file
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Enable EJS as the view engine, will look for templates in /views dir
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
const HOST_NAME = "localhost";
const links = [
    { href: "/", text: "Home", page: 'home'},
    { href: "/about", text: "About", page: 'about'},
    { href: "/contact-me", text: "Contact Me", page: 'contact-me'},
];

links.forEach((link) => {
    app.get(link.href, (req, res) => {
        res.render("index", { links: links, page: link.page });
    });
})

// Handle unexpected route (404 error)
app.get('*', (req, res) => res.status(404).render("index", { links: links, page: "404" }));

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port http://${HOST_NAME}:${PORT}!`);
});