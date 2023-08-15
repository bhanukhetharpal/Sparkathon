const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


app.use(express.json());


const womenSizeChartRoutes = require('./routes/womenSizeChart');
const menSizeChartRoutes = require('./routes/menSizeChart');

app.use('/api/women-size-chart', womenSizeChartRoutes);
app.use('/api/men-size-chart', menSizeChartRoutes);


const dbURI = 'mongodb+srv://abhishree07:asadzoya11@cluster0.5fkumsj.mongodb.net/?retryWrites=true&w=majority';

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

