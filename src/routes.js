const express = require('express')
const routes = express.Router()

const CustomerController = require('./controllers/CustomerController')
const ProductController = require('./controllers/ProductController')
const SaleController = require('./controllers/SaleController')

// Routes Client
routes.get('/customers', CustomerController.index)
routes.post('/customers', CustomerController.create)

//Route Products
routes.get('/products', ProductController.index)


//Route Products
routes.get('/sales', SaleController.index)
module.exports = routes