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
    const product = await Product.findOne({ product_id: Number(id) });

    if (product) {
        // Find the specific size object for the provided size
        const sizeObj = product.size.find(s => s.label === size);

        // Check availability for that size
        if (sizeObj && sizeObj.count > 0) {
            return res.json({ availability: true });
        }
    }
    res.json({ availability: false });
});

router.get('/product-details/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findOne({ product_id: Number(id) });

        if (product) {
            return res.json(product);
        } else {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;