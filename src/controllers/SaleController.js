const knex = require('../database/db')

module.exports = {

    async index(req, res, next) {
        try {
            const results = await knex('sale')
            .join('customer', 'sale.id_client', '=', 'customer.id_customer')
            .join('product', 'sale.id_product', '=', 'product.id_product')
            .select('sale.id_sale', 'customer.name_customer', 'product.name_product', 'sale.sale', 'sale.date_sale', 'sale.price_product', 'sale.created_at')
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
    async lastsale(req, res, next) {
        try {
            const { maxrows } = req.query
            const results = await knex('sale')
            .join('customer', 'sale.id_client', '=', 'customer.id_customer')
            .join('product', 'sale.id_product', '=', 'product.id_product')
            .select('sale.id_sale', 'customer.name_customer', 'product.name_product', 'sale.sale', 'sale.date_sale', 'sale.price_product', 'sale.created_at')
            .limit(maxrows)
            return res.json(results)
        } catch (error) {
            next(error)
        }
    }

}