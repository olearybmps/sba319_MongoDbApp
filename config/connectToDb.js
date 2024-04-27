// Load DB_URL variable from .env
require('dotenv').config();

// Import mongoose framework
const mongoose = require('mongoose');

 // Connect to mongoose via connection string in env file
const connectToDb = async () => {
    await mongoose.connect(process.env.DB_URL);
    console.log(`Currently connected to MongoDB`);
};

module.exports = connectToDb;