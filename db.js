const path = require('path');

const mongoose = require('mongoose')
// const mongoURL = "mongodb://127.0.0.1:27017/hotels"
const mongoURL="mongodb+srv://adityadwivedi257:helloworld@cluster0.zt5skco.mongodb.net/"
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    
const db = mongoose.connection

db.on('connected', () => {
    console.log('MongoDB connection successful')
})

db.on('error', (err) => {
    console.log('Error while connecting with database:', err)
})

module.exports = db