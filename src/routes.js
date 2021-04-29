const express = require('express')
const routes = express.Router()

const ClientController = require('./controllers/ClientController')
const ProductController = require('./controllers/ProductController')
const SalesController = require('./controllers/SalesController')

// Routes Client
routes.get('/clients', ClientController.index)
routes.post('/clients', ClientController.create)

//Route Products
routes.get('/products', ProductController.index)


//Route Products
routes.get('/sales', SalesController.index)
module.exports = routes