const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log("MONGO CONNECTION OPEN!"))
    .catch(err => console.log("Connection Error:", err));

    const seedProducts = [
        // Fruits
        { name: "Organic Strawberries", price: 4.99, category: "fruit" },
        { name: "Honeycrisp Apples", price: 2.49, category: "fruit" },
        { name: "Sun-Ripened Peaches", price: 3.99, category: "fruit" },
  
        // Vegetables
        { name: "Heirloom Tomatoes", price: 3.29, category: "vegetable" },
        { name: "Rainbow Carrots", price: 2.99, category: "vegetable" },
        { name: "Organic Kale", price: 1.99, category: "vegetable" },
  
        // Eggs
        { name: "Free-Range Brown Eggs (Dozen)", price: 5.99, category: "eggs" },
        { name: "Pasture-Raised Duck Eggs (Half Dozen)", price: 7.49, category: "eggs" },
        { name: "Organic Chicken Eggs (Dozen)", price: 6.29, category: "eggs" },
  
        // Dairy
        { name: "Raw Milk (Half Gallon)", price: 8.99, category: "dairy" },
        { name: "Farmhouse Cheddar (8oz)", price: 6.49, category: "dairy" },
        { name: "Homemade Yogurt (32oz)", price: 5.99, category: "dairy" }
    ];

    Product.insertMany(seedProducts)
    .then(res => console.log("Seeded products:", res))
    .catch(err => console.error("Seeding error:", err));