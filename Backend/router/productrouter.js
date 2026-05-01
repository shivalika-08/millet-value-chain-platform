const express = require("express");
const router = express.Router();

const { addProduct, getProducts } = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");


router.post("/", addProduct);  
router.get("/", auth, getProducts);


module.exports = router;