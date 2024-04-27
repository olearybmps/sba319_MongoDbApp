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

// Import the controller modules
const movieController = require('./controllers/movieController.js');
const directorController = require('./controllers/directorController.js');
const genreController = require('./controllers/genreController.js');

// Connect to DB
connectToDb();

// Define routes for movies
app.get('/movies', movieController.getAllMovies);
app.get('/movies/:id', movieController.getMovieById);
app.get('/movies/title/:title', movieController.getMoviesByTitle);
app.get('/movies/genre/:genreId', movieController.getMoviesByGenre);
app.get('/movies/director/:directorId', movieController.getMoviesByDirector);
app.post('/movies', movieController.createMovie);
app.put('/movies/:id', movieController.updateMovie);
app.delete('/movies/:id', movieController.deleteMovie);

// Define routes for directors
app.get('/directors', directorController.getAllDirectors);
app.get('/directors/:id', directorController.getDirectorById);
app.get(
    '/directors/:firstName?/:lastName?',
    directorController.getDirectorByName
);
app.post('/directors', directorController.createDirector);
app.put('/directors/:id', directorController.updateDirector);
app.delete('/directors/:id', directorController.deleteDirector);

// Define routes for genres
app.get('/genres', genreController.getAllGenres);
app.get('/genres/:id', genreController.getGenreById);
app.post('/genres', genreController.createGenre);
app.put('/genres/:id', genreController.updateGenre);
app.delete('/genres/:id', genreController.deleteGenre);

// Start express server and listen on port
app.listen(port, () => {
    console.log(`Express Server Listening on port num: ${port}`);
});