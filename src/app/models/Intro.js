const db = require('../../config/db');

module.exports = {
    chefs(callback) {
        db.query(`
        SELECT chefs.*, count(recipes) AS total_recipes
        FROM chefs
        LEFT JOIN recipes ON (recipes.chef_id = chefs.id )
        GROUP BY chefs.id

        `,  (err, results) => {
            if(err) throw `database error! ${err}`;

            callback(results.rows);
        })

    },
    filter(filter, callback) {
        query = `
        SELECT recipes.*, chefs.name AS author 
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        WHERE recipes.title ILIKE '%${filter}%'
        ORDER BY recipes.id ASC
        `
                
        db.query(query, (err, results) => {
            if(err) throw `database error! ${err}`;
                        
            callback(results.rows);
            
        })
    }
}