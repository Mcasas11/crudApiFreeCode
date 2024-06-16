const Product = require('../models/product.model.js')

const getProducts = async (req, res) => {
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }
    catch(err){
        console.log(err)
        res.status(404).json({ message: err.message })
    }
}

const createProducts = async (req, res) => {
    try{

        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getProducts, 
    createProducts
}