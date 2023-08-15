const express = require('express');
const router = express.Router();
const MenSizeChart = require('../models/MenSizeChart');

router.post('/populate', async (req, res) => {
    const sizes = [
        { size: 'S', chest: 36, waist: 30, neck: 14.75, sleeve: 32.25 },
        { size: 'M', chest: 40, waist: 34, neck: 15.75, sleeve: 33 },
        { size: 'L', chest: 44, waist: 38, neck: 16.75, sleeve: 33.75 },
        { size: 'XL', chest: 48, waist: 42, neck: 17.75, sleeve: 34.5 },
        { size: '2XL', chest: 52, waist: 46, neck: 18.75, sleeve: 35.25 },
        { size: '3XL', chest: 56, waist: 50, neck: 19.75, sleeve: 36.5 },
        { size: '4XL', chest: 60, waist: 54, neck: 20.75, sleeve: 37.25 },
        { size: '5XL', chest: 64, waist: 58, neck: 21.75, sleeve: 38.5 }
    ];
    
    try {
        await MenSizeChart.deleteMany({});  
        await MenSizeChart.insertMany(sizes);  
        res.json({ message: 'Men size chart populated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
