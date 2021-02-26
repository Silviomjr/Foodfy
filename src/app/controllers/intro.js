const Recipe = require('../models/Recipe');
const Intro = require('../models/Intro');

module.exports = {

    index(req, res) {
        Recipe.all((recipes)=>{
            return res.render("main/index", {recipes});
        });
    },
    
    about(req, res) {
        return res.render("main/about");
    },
    
    recipes(req, res) {
        Recipe.all((recipes) => {
            return res.render("main/recipes", {recipes});
        });
        
    },
    
    id(req, res) {
        
        const id = req.params.id;
        
        Recipe.find(id, (recipe) => {
            if(recipe) {
                return res.render('main/info-recipes', { recipe });
            }
            return res.status(404).render("not-found");

        });
            
    },

    chefs(req, res) {

        Intro.chefs(
            (chefs) => {
                res.render('main/chefs', { chefs });
            }
        )

    },
    search(req, res) {
        let filter = req.query.filter;

        Intro.filter(filter, (infos) => {
            return res.render("main/search", { infos, filter });

        })

        
    }

}    
