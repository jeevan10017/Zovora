import express from "express";
const router = express.Router(); //creating a router

// import products from "../data/products.js";
import { getProducts, getProductById } from "../controllers/productController.js"; //importing the functions

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route("/").get(getProducts); //creating a route to get all the products
router.route("/:id").get(getProductById); //creating a route to get a product by id



export default router; //exporting the router