import express from "express";
const router = express.Router(); //creating a router
import Product from "../models/productmodel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import products from "../data/products.js";



router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({}); //finding all the products
    res.json(products);
}));
router.get('/:id',asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id); //finding the product by id
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message: "Product not found"}); //sending the error message
    }   

}));

export default router; //exporting the router