const knex = require('../database/db')

module.exports = {
    async index(req, res) {
        try {
            /*
            const products = [
            
                {
                        "id" : 1130,
                        "name" : "Calcinha",
                        "brand" : "Marca 1",
                        "price" : 17.90
                    },
                    {
                        "id" : 2467,
                        "name" : "Conjunto",
                        "brand" : "Marca 2",
                        "price" : 79.90
                    },
                    {
                        "id" : 3237,
                        "name" : "Calcinha",
                        "brand" : "Marca 3",
                        "price" : 13.90
                    },
                    {
                        "id" : 4187,
                        "name" : "Pijama",
                        "brand" : "Marca 4",
                        "price" : 99.90
                    }
                ]
                return res.json(products)
            */
                const results = await knex('product')
                return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async create(req, res) {
        try {
            const { id_product, name_product, type_product, provider_product, brand_product } = req.body
            await knex('product').insert({
                id_product,
                name_product,
                type_product,
                provider_product,
                brand_product
            })
            return res.status(201).send() 
        } catch (error) {
            next(error)
        }
    }

}