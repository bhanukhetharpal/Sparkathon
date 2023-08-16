const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const app = express();


app.use(express.json());
// Allow requests from a specific origin (your frontend domain)
app.use(cors({
  origin: 'http://localhost:3000',
}));

const womenSizeChartRoutes = require('./routes/womenSizeChart');
const menSizeChartRoutes = require('./routes/menSizeChart');

app.use('/api/women-size-chart', womenSizeChartRoutes);
app.use('/api/men-size-chart', menSizeChartRoutes);


const dbURI = 'mongodb+srv://bhanu123:test123@cluster0.5fkumsj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(error => console.error('Could not connect to MongoDB Atlas:', error));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

