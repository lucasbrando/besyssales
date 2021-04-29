const knex = require('../database/db')

module.exports = {
    async index(req, res, next) {
        try {
            /*const clients = [
                {
                    "id" : 987,
                    "name" : "Katia - Raio de Sol",
                    "phone" : "(16)99999-9999"
                },
                {
                    "id" : 876,
                    "name" : "Glória - Familia",
                    "phone" : "(16)99999-9999"
                },
                {
                    "id" : 765,
                    "name" : "Josiane - Igreja",
                    "phone" : "(16)99999-9999"
                },
                {
                    "id" : 654,
                    "name" : "Cleide - Externo",
                    "phone" : "(16)99999-9999"
                }
            ]
            return res.json(clients)*/
            
            const results = await knex('client')
            return res.json(results)
            /*
            const row = client.query('SELECT * FROM client')
            res.json(row)
            client.end();*/
  
        } catch (error){
            next(error)
        }
    }
/*
    async create(req, res) {
        try {

        } catch {

        }
    }
    
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