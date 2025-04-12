const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true  // Removes whitespace
    },
    price: { 
        type: Number, 
        required: true,
        min: [0, "Price must be positive!"]
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'eggs', 'dairy']
    }
});

// Export
const Product = mongoose.model('Product', productSchema);
module.exports = Product;