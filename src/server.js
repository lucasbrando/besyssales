const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({origin: "https://syssales-git-develop-lucasbrando.vercel.app"}))
//  
app.get('/', (req,res) => {
   res.send("Olá")
})
    
app.get('/clients', (req,res) => {
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
})
    
app.get('/products', (req,res) => {
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
})     
       
app.listen(process.env.PORT || 3030)

