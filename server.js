const express = require('express');
const connectDB = require('./config/db');

const app = express();
// Connect Database
connectDB();
  
// Init Middleware
app.use(express.json({ extended: false }));


app.use('/api/persons', require('./routers/persons'));
app.use('/api/companies', require('./routers/companies'));
app.use('/api/products', require('./routers/products'));
app.use('/api/services', require('./routers/services'));
app.use('/api/contacts', require('./routers/contacts'));
app.use('/api/socialmedia', require('./routers/socialmedia'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));