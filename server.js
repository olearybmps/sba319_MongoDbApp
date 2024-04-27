// Load variables from .env
require('dotenv').config();

// Import express 
const express = require('express');

// Create express instance
const app = express();

// Set port number
const port = process.env.PORT || 5000;

// Import function to connect to DB
const connectToDb = require('./config/connectToDb');

// Import CORS middleware
const cors = require('cors');

// Connect to DB
connectToDb();

// Start express server and listen on port
app.listen(port, () => {
    console.log(`Express Server Listening on port num: ${port}`);
});