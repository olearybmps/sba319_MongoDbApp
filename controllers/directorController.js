const Director = require('../models/directors.js');

// Get all directors
const getAllDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.json(directors);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a director by Id
const getDirectorById = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        if (!director) {
            return res.status(404).json({ error: 'Director not found' });
        }
        res.json(director); // Send the director as the response
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get director by lastName
const getDirectorByLastName = async (req, res) => {
    try {
        const { lastName } = req.params;
        console.log('Last Name:', lastName);

        const directors = await Director.find({ lastName });
        console.log('Directors:', directors);

        if (directors.length === 0) {
            return res.status(404).json({ error: 'No directors found' });
        }

        res.json(directors);
    } catch (error) {
        console.error('Error retrieving directors:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a director(s)
const createDirector = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            const directors = await Director.insertMany(req.body);
            res.status(201).json(directors);
        } else {
            const director = await Director.create(req.body);
            res.status(201).json(director);
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a director
const updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (!director) {
            return res.status(404).json({ error: 'Director not found' });
        }
        res.json(director);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a director
const deleteDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndDelete(req.params.id);
        if (!director) {
            return res.status(404).json({ error: 'Director not found' });
        }
        res.json({ message: 'Director deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getAllDirectors,
    getDirectorById,
    getDirectorByLastName,
    createDirector,
    updateDirector,
    deleteDirector,
};
