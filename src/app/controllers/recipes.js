const Recipe = require('../models/Recipe');

module.exports = {

    index(req, res) {
        
        Recipe.all((recipes) => {
            
            return res.render("admin/recipes/recipes", { recipes });
        });
    },
    create(req, res) {
        
        Recipe.chefsSelectOptions((chefs) => {
            
            return res.render("admin/recipes/create", {chefs});
        });
    },
    post(req, res) {
        const keys = Object.keys(req.body);
        
        for (let key of keys) {
            if (req.body[key] == "") {
                return res.send('Fill all the fields');
            }
        };
                
        Recipe.create(req.body, (recipe) => {
            return res.redirect('/admin/recipes');
        })
    },
    show(req, res) {        
        Recipe.find(req.params.id, (informations) => {
            
            
            return res.render("admin/recipes/show", { informations });
        });
    },
    edit(req, res) {
        Recipe.find(req.params.id, (recipe) => {
            if(!recipe) return res.render('not-found');

            Recipe.chefsSelectOptions((chefs) => {
                return res.render("admin/recipes/edit", { recipe, chefs });
            });
        });
    
    },
    put(req, res) {
        const keys = Object.keys(req.body);

        for (let key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields.')
            }
        };

        Recipe.update(req.body, () => {
            return res.redirect(`/admin/recipes/${req.body.id}`);
        });    
    },    
    delete(req, res) {
        Recipe.delete(Number(req.body.id), () => {
            return res.redirect(`/admin/recipes`);
        });
    },
}