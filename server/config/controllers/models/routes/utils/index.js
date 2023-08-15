const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const dbURI = 'mongodb+srv://abhishree07:asadzoya11@cluster0.5fkumsj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('Could not connect to MongoDB Atlas:', error));

// Rest of your server code...

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
