const knex = require('../database/db')

module.exports = {
    async index(req, res) {
        try {
            const clients = [
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
            return res.json(clients)
        } catch {

        }
    }

}