const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const categories = ['fruit', 'vegetable', 'eggs', 'dairy', 'mushrooms'];
app.locals.categories = categories; // Now available in all ejs-templates

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log("MONGO CONNECTION OPEN!"))
    .catch(err => console.log("Connection Error:", err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(methodOverride('_method')); 

app.get('/products', async (req, res) => {
    const products = await Product.find({}); //find everything
    res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
    res.render('products/new'); // categories is already available
});

app.get('/products/:id', async (req,res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
    console.log(product);
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
})

app.put('/products/:id', async (req, res) => {
    console.log(req.body); // Check if data exists
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.redirect(`/products/${id}`);
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("App is listening on port 3000");
})