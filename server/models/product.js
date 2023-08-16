const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        enum: ['Accessories', 'Sweatshirts', 'Trousers', 'Dresses', 'Jackets', 'T-shirts', 'Jeans'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: String,
    color: [String],
    size: [{
        label: {
            type: String, // 'M', 'L', 'XL' etc.
            required: true
        },
        count: {
            type: Number, // quantity in stock for this size
            default: 0
        }
    }],
    material: String,
    image_url: String,
    availability: { // Overall availability (at least one size in stock)
        type: Boolean,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
});

productSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    this.availability = this.size.some(s => s.count > 0); // set overall availability based on individual sizes
    next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
