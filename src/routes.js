const express = require('express')
const routes = express.Router()

const ClientController = require('./controllers/ClientController')
const ProductController = require('./controllers/ProductController')

routes.get('/clients', ClientController.index)
routes.post('/clients', ClientController.create)
routes.get('/products', ProductController.index)


module.exports = routes