const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    work: {
        type: String,
        required: true,
        enum: ['chef', 'programmer', 'manager']
    },
    mobile:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
}, {
    // Add timestamps for created and updated dates
    timestamps: true,
    // Ensure virtual fields are included when converting to JSON
    toJSON: { virtuals: false },
    toObject: { virtuals: true }
});



const Person = mongoose.model('Person', personSchema);

// Ensure the model is properly initialized
Person.init().then(() => {
    console.log('Person model initialized');
}).catch(err => {
    console.error('Error initializing Person model:', err);
});

module.exports = Person