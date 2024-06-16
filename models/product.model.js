const mongoose = require('mongoose')
const { Schema, model } = mongoose

const productSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number
})

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Product = model('Product', productSchema)
module.exports = Product