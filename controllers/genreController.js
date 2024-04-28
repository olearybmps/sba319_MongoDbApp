const Genre = require('../models/genres.js');

// Get all genres
const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a genre
const getGenreById = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a genre(s)
const createGenre = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            const genres = await Genre.insertMany(req.body);
            res.status(201).json(genres);
        } else {
            const genre = await Genre.create(req.body);
            res.status(201).json(genre);
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a genre
const updateGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        res.json(genre);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a genre
const deleteGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndDelete(req.params.id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        res.json({ message: 'Genre deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre,
};