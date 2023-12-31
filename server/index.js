require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
console.log(process.env.DB_URI);
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

const womenSizeChartRoutes = require('./routes/womenSizeChart');
const menSizeChartRoutes = require('./routes/menSizeChart');
const productRoutes = require('./routes/productRoutes');  

app.use('/api/women-size-chart', womenSizeChartRoutes);
app.use('/api/men-size-chart', menSizeChartRoutes);
app.use('/api/products', productRoutes);  


const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(error => console.error('Could not connect to MongoDB Atlas:', error));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
