const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const cors = require('cors')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')

app.use(cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        'http://localhost:3000',
        'http://localhost:1234'
      ]
  
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true)
      }
  
      if (!origin) {
        return callback(null, true)
      }
  
      return callback(new Error('Not allowed by CORS'))
    }
  }))
 

app.use('/api/products', productRoute)

mongoose.connect('mongodb+srv://athletesDb:athletesDb**@marcoscasaslearn.u3z75rl.mongodb.net/freeCode?retryWrites=true&w=majority&appName=MarcosCasasLearn')
  .then(() => {
    console.log('Connected to MongoDB!')

  })
  .catch(err => {
    console.error(err)
  })



app.listen(3000, () =>{
    console.log('Server running...')
})