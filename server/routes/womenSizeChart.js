const express = require('express');
const router = express.Router();
const WomenSizeChart = require('../models/WomenSize');


router.post('/populate', async (req, res) => {
    console.log("Attempting to populate Women's Size Chart...");
    const sizes = [
        { size: '1X', USA_size: '16W', bust: 42.5, waist: 34.5, hip: 44.5 },
        { size: '2X', USA_size: '18W', bust: 44.5, waist: 36.5, hip: 46.5 },
        { size: '2X', USA_size: '20W', bust: 46.5, waist: 38.5, hip: 48.5 },
        { size: '3X', USA_size: '22W', bust: 48.5, waist: 40.5, hip: 50.5 },
        { size: '3X', USA_size: '24W', bust: 50.5, waist: 42.5, hip: 52.5 },
        { size: '4X', USA_size: '26W', bust: 52.5, waist: 44.5, hip: 54.5 },
        { size: '4X', USA_size: '28W', bust: 54.5, waist: 46.5, hip: 56.5 },
        { size: '5X', USA_size: '30W', bust: 56.5, waist: 48.5, hip: 58.5 },
        { size: '5X', USA_size: '32W', bust: 58.5, waist: 50.5, hip: 60.5 },
    ];
    
    try {
        await WomenSizeChart.deleteMany({});
        await WomenSizeChart.insertMany(sizes);
        res.json({ message: 'Women size chart populated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/predict', async (req, res) => {
    const { bust, waist, hip } = req.body;

    try {
        const sizes = await WomenSizeChart.find().sort({ bust: 1, waist: 1, hip: 1 });
        const matchedSize = sizes.find(size => 
            size.bust >= bust && size.waist >= waist && size.hip >= hip
        );

        if (matchedSize) {
            res.json({ size: matchedSize.size });
        } else {
            res.json({ size: 'Size not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
