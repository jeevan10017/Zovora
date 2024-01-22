import Product from "../models/productmodel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({}); //finding all the products
    res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id); //finding the product by id
    if(product){
        res.json(product);
    }
    else{
        res.status(404);
        throw new Error('Resource not Found'); //sending the error message
    }   

});

export { getProducts, getProductById }; //exporting the functions