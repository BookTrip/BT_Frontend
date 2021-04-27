<<<<<<< Updated upstream
import express from 'express'
import dotenv  from 'dotenv'
import products from './data/products.js'
=======
import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from 'morgan'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
>>>>>>> Stashed changes

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running.....')
})

app.get('/api/products', (req, res) => {
        res.json(products)
    })

<<<<<<< Updated upstream
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p=> p._id===req.params.id)
    res.json(product)
})  
=======
if (process.env.NODE_ENV=== 'development') {
  app.use(morgan('dev'))
}

app.use(express.json());
>>>>>>> Stashed changes

const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))