const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthYear: {
        type: Number,
        required: true,
    },
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;
