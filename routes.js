const express = require('express');
const routes = express.Router();
const intro = require('./controllers/intro');
const recipes = require('./controllers/recipes');

routes.get("/", intro.index);
routes.get("/about", intro.about);
routes.get("/recipes", intro.recipes);
routes.get("/recipes/:id", intro.id)

routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post);
routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita




routes.use(function(req, res) {
    res.status(404).render("not-found");
});


module.exports = routes;