import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
import productRoutes from './routes/ProductRoutes.js';
const port =process.env.PORT || 5000;


connectDB();


const app = express();
app.use('/api/products', productRoutes);

//setting a route
app.get('/', (req, res) => {
    res.send('Server is ready......');
});

//server listening
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
