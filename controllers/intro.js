const recipes = require('../data');

exports.index = (req, res) => {
    return res.render("index", {recipes});
};

exports.about = (req, res) => {
    return res.render("about");
};

exports.recipes = (req, res) => {
    return res.render("recipes", {recipes});
};

exports.id = (req, res) => {
    // Array de receitas carregadas do data.js
    const id = req.params.id;
    const recipe = recipes[id];

    if(recipe) {
        return res.render('info-recipes', { recipe });
    }

    return res.status(404).render("not-found");
        
};

module.exports