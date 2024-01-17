import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
import products from './data/products.js';
// import connectDB from './config/db.js';
const port =process.env.PORT || 5000;


connectDB();

const app = express();

//setting a route
app.get('/', (req, res) => {
    res.send('Server is ready......');
});
app.get('/api/products', (req, res) => {
    res.json(products);
});
//server listening
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

//route to get a single product
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});