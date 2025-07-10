const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['spicy', 'sweet', 'sour', 'bitter'],
        require: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        required: true
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const Menu = mongoose.model('Menu', menuItemSchema);
// Ensure the model is properly initialized
Menu.init().then(() => {
    console.log('Menu model initialized');
}).catch(err => {
    console.error('Error initializing Menu model:', err);
});


module.exports = Menu;
