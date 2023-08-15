const mongoose = require('mongoose');

const menSizeChartSchema = new mongoose.Schema({
    size: { type: String, required: true },
    chest: { type: Number, required: true },
    waist: { type: Number, required: true },
    neck: { type: Number, required: true },
    sleeve: { type: Number, required: true }
});

module.exports = mongoose.model('MenSizeChart', menSizeChartSchema);
