const knex = require('../database/db')

module.exports = {

    async index(req, res, next) {
        try {
            const results = await knex('sale')
            return res.json(results)
        } catch (error){
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            const { id_client, id_product, sale, date_sale, price_product, created_at} = req.body
            await knex('sale').insert({
                id_client,
                id_product,
                sale,
                date_sale,
                price_product,
                created_at
            })
            return res.status(201).send() 
        } catch (error){
            next(error)
        }
    },

}