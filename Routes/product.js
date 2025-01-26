
const express = require("express");
const { createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct } = require("../controllers/product");
const { verifyJWT, verifyAdmin } = require("../middleware/jwt");

const route = express.Router();



// create a new product 
route.post("/createproduct", verifyAdmin, createProduct);
// update product by Id
route.put("/:id", verifyAdmin, updateProduct);
// delete product 
route.delete("/:id", verifyAdmin, deleteProduct);
// get product by Id 
route.get("/find/:id", getProductById);
// get product list 
route.get("/productList", getAllProducts);







module.exports = route;