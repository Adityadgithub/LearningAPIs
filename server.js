require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const path = require('path'); // Add this line

const express = require('express');
const db = require('./db');
const app = express();
const menuApis  = require('./routes/menuRoutes')
const personApis = require('./routes/personRoutes')


app.use(express.json()); 

app.use('/person', personApis)
app.use('/menu', menuApis)
console.log('MongoDB URL being used:', process.env.MONGODB_URL);
console.log('PORT being used:', process.env.PORT);
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Hello dsdds!'));
                                                                    
app.listen(PORT, () => {
  console.log('App is running on port 4000');
});
