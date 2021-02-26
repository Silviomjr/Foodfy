const express = require('express');
const routes = express.Router();
const intro = require('./app/controllers/intro');
const recipes = require('./app/controllers/recipes');
const chefs = require('./app/controllers/chefs');

routes.get("/", intro.index);
routes.get("/about", intro.about);
routes.get("/recipes", intro.recipes);
routes.get("/recipes/:id", intro.id);
routes.get("/chefs", intro.chefs);
routes.get("/search", intro.search);

routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita
routes.post("/admin/recipes", recipes.post);
routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

routes.get("/admin/chefs", chefs.index);
routes.get("/admin/chefs/create", chefs.create);
routes.get("/admin/chefs/:id", chefs.show);
routes.get("/admin/chefs/:id/edit", chefs.edit);
routes.post("/admin/chefs", chefs.post);
routes.put("/admin/chefs", chefs.put);
routes.delete("/admin/chefs", chefs.delete);

routes.use(function(req, res) {
    res.status(404).render("not-found");
});

module.exports = routes;
