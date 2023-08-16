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
    enum: ['Accessories','Sweatshirts','Trousers','Dresses','Jackets','T-shirts', 'Dresses', 'Jeans','Footwear',], 
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  brand: String,
  color: [String],  
  size: [String],   
  material: String,
  image_url: String,
  availability: {
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
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
