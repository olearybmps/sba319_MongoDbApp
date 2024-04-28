const Movie = require('../models/movies.js');

// Get all movies
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
            .populate('genre')
            .populate('director');
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a movie by ID
const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
            .populate('genre')
            .populate('director');
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get movies by title
const getMoviesByTitle = async (req, res) => {
    try {
        const movies = await Movie.find({ title: req.params.title })
            .populate('genre')
            .populate('director');
        if (movies.length === 0) {
            return res
                .status(404)
                .json({ error: 'No movies found with the given title' });
        }
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get movies by genre
const getMoviesByGenre = async (req, res) => {
    try {
        const movies = await Movie.find({ genre: req.params.genreId })
            .populate('genre')
            .populate('director');
        if (movies.length === 0) {
            return res
                .status(404)
                .json({ error: 'No movies found with the given genre' });
        }
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get movies by director
const getMoviesByDirector = async (req, res) => {
    try {
        const movies = await Movie.find({ director: req.params.directorId })
            .populate('genre')
            .populate('director');
        if (movies.length === 0) {
            return res
                .status(404)
                .json({ error: 'No movies found with the given director' });
        }
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a movie
const createMovie = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            const movies = await Movie.insertMany(req.body);
            res.status(201).json(movies);
        } else {
            const movie = await Movie.create(req.body);
            res.status(201).json(movie);
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a movie
const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a movie
const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
    getMoviesByTitle,
    getMoviesByGenre,
    getMoviesByDirector,
    createMovie,
    updateMovie,
    deleteMovie,
};
