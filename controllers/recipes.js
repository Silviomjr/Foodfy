const fs = require('fs');
const data = require('../data.json');

exports.index = (req, res) => {
    const recipes = data.recipes;

    return res.render("admin/recipes", { recipes });
};

exports.create = (req, res) => {
    return res.render("admin/create");
};

exports.post = (req, res) => {
    const keys = Object.keys(req.body);
    
    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send('Fill all the fields');
        }
    };

    data.recipes.push({...req.body});
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error");
        return res.redirect('/admin/recipes')
    });
};

exports.show = (req, res) => {
    const { id } = req.params;
    // console.log(data.recipes.length)

    if (Number(id) > (data.recipes.length - 1)) {
        return res.status(404).render("not-found");
    }

    const informations = {
        ...data.recipes[id],
         id
        };
    

    return res.render("admin/show", { informations });
};

exports.edit = (req, res) => {
    const { id } = req.params;

    const fields = data.recipes[id];

    return res.render("admin/edit", { fields, id });
};

exports.put = (req, res) => {
    
    const recipeId = req.body;
    
    const id = recipeId.id;

    delete recipeId.id;

    if (!(id < data.recipes.length && id >= 0)) {
        return res.send("Recipe not found!");
    };

    data.recipes[id] = recipeId;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error");
        return res.redirect(`/admin/recipes/${id}`);
    })

};

exports.delete = (req, res) => {

    const { id } = req.body;
    
    data.recipes.splice(id, 1);

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Delete error! Please try again.")

        return res.redirect(`/admin/recipes`);
    })

    



    




    
}


module.exports