const express = require('express');

const router = express.Router();

const product_controller = require("./../Controller/product_controller");

router.get('/products', product_controller.index);


router.get('/product', product_controller.show);

router.post('/product', product_controller.store);

router.put('/product', product_controller.update);

router.delete('/product', product_controller.destroy);

module.exports = router;