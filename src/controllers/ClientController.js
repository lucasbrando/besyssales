const knex = require('../database/db')

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('customer')
            return res.json(results)
        } catch (error){
            next(error)
        }
    },

    async create(req, res) {
        try {
            const { name, phone} = req.body
            await knex('customer').insert({
                name,
                phone
            })
            return res.status(201).send()    
        } catch (error){
            next(error)
        }
    }
/*    
    async update(req, res) {
        try {
            
        } catch {

        }
    }
    
    async delete(req, res) {
        try {
            
        } catch {

        }
    }       
*/
}