const express = require('express')
const Product = require('../models/product.model.js')
const router = express.Router()
const { getProducts, createProducts } = require('../controllers/product.controller.js')

router.get('/', getProducts)
router.post('/', createProducts)

module.exports = router