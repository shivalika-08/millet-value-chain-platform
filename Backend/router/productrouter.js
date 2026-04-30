const express = require("express");
const router = express.Router();

const { addProduct, getProducts } = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");


router.post("/", addProduct);  
router.get("/", getProducts);
router.get("/products", auth, getProducts);

module.exports = router;