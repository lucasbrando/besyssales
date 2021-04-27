const express = require('express')
const app = express()

app.get('/', () => {
    res.send("Olá")
})

app.get('/clients', (req,res) => {
    const clients = [
        {
            "id" : 123,
            "name" : "Katia - Raio de Sol",
            "phone" : "(16)99999-9999"
        },
        {
            "id" : 234,
            "name" : "Glória - Familia",
            "phone" : "(16)99999-9999"
        },
        {
            "id" : 345,
            "name" : "Josiane - Igreja",
            "phone" : "(16)99999-9999"
        },
        {
            "id" : 456,
            "name" : "Cleide - Externo",
            "phone" : "(16)99999-9999"
        }
    ]
    return res.json(clients)
})

app.get('/products', (req,res) => {
    const products = [
        {
            "id" : 6308,
            "name" : "Calcinha",
            "brand" : "Marca 1",
            "price" : 17.90
        },
        {
            "id" : 5467,
            "name" : "Conjunto",
            "brand" : "Marca 2",
            "price" : 79.90
        },
        {
            "id" : 5237,
            "name" : "Calcinha",
            "brand" : "Marca 3",
            "price" : 13.90
        },
        {
            "id" : 6187,
            "name" : "Pijama",
            "brand" : "Marca 4",
            "price" : 99.90
        }
    ]
    return res.json(products)
})

app.listen(process.env.PORT || 3030)

