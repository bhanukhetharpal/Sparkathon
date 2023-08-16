const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const dummyProducts = require('../data/dummyData'); 


router.post('/populate', async (req, res) => {
    console.log("Attempting to populate Products...");

    try {
        await Product.deleteMany({}); 
        await Product.insertMany(dummyProducts);
        res.json({ message: 'Products populated successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/product-availability/:id/:size', async (req, res) => {
    const { id, size } = req.params;
    const product = await Product.findOne({ product_id: Number(id), size: size });

    if (product && product.availability) {
        res.json({ availability: true });
    } else {
        res.json({ availability: false });
    }
});


module.exports = router;
