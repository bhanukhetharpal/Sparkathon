const mongoose = require('mongoose');

const womenSizeChartSchema = new mongoose.Schema({
    size: { type: String, required: true },
    USA_size: { type: String, required: true },  // For Women's sizes like 16W
    bust: { type: Number, required: true },
    waist: { type: Number, required: true },
    hip: { type: Number, required: true }
});

module.exports = mongoose.model('WomenSizeChart', womenSizeChartSchema);
