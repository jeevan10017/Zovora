import mongoose from "mongoose";
import dotenv from "dotenv"; //dotenv is a package to store the sensitive data in .env file
import colors from "colors";    //colors is a package to add colors to the console 
import users from "./data/users.js";                //importing the users data  
import products from "./data/products.js";          //importing the products data   
import User from "./models/userModel.js";           //importing the user model  
import Product from "./models/productmodel.js";     //importing the product model with corrected casing 
import Order from "./models/orderModel.js";         //importing the order model
import connectDB from "./config/db.js";             //importing the database connection file

dotenv.config(); //calling the dotenv.config() function to use the .env file

connectDB(); //calling the connectDB() function to connect to the database

const importData = async () => { //creating a function to import the data
    try { //try block
        await Order.deleteMany(); //deleting all the orders
        await Product.deleteMany(); //deleting all the products
        await User.deleteMany(); //deleting all the users

        const createdUsers = await User.insertMany(users); //inserting the users in the database
        const adminUser = createdUsers[0]._id; //getting the id of the first user

        const sampleProducts = products.map((product) => { //mapping the products
            return { ...product, user: adminUser }; //returning the product and the user
        });

        await Product.insertMany(sampleProducts); //inserting the products in the database

        console.log("Data Imported!".green.inverse); //printing the success message
        process.exit(); //exiting the process
    }   catch (error) { //catch block   
        console.error(`${error}`.red.inverse); //printing the error message
        process.exit(1); //exiting the process with failure
    }
}
const destroyData = async () => { //creating a function to destroy the data
    try { //try block
        await Order.deleteMany(); //deleting all the orders
        await Product.deleteMany(); //deleting all the products
        await User.deleteMany(); //deleting all the users

        console.log("Data Destroyed!".red.inverse); //printing the success message
        process.exit(); //exiting the process
    }   catch (error) { //catch block
        console.error(`${error}`.red.inverse); //printing the error message
        process.exit(1); //exiting the process with failure
    }
}

if (process.argv[2] === "-d") { //checking if the argument is -d
    destroyData(); //calling the destroyData() function
}   else { //else block 
    importData(); //calling the importData() function
}
