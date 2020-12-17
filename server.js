const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const recipes = require('./data');

server.set("view engine", "njk");
server.use(express.static('public'));

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
});



server.get("/", (req, res) => {
    return res.render("index", {recipes});
});

server.get("/about", (req, res) => {
    return res.render("about");
});

server.get("/recipes", (req, res) => {
    return res.render("recipes", {recipes});
});

server.get("/recipes/:id", function (req, res) {
    // Array de receitas carregadas do data.js
    const id = req.params.id;
    const recipe = recipes[id];
        
    return res.render('info-recipes', { recipe });
  })

server.use(function(req, res) {
    res.status(404).render("not-found");
});


server.listen(5000, () => {
    
})