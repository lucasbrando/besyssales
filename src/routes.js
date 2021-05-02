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
routes.post('/products', ProductController.create)

//Route Products
routes.get('/sales', SaleController.index)
routes.post('/sales', SaleController.create)
routes.get('/lastsales', SaleController.lastsale)
module.exports = routes