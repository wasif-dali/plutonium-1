const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const validatorMiddleware = require("../middlewares/validator")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/products", productController.createProduct)
router.post("/users", validatorMiddleware.validateHeader, userController.createUser)
router.post("/orders", validatorMiddleware.validateHeader, orderController.createOrder)

module.exports = router;