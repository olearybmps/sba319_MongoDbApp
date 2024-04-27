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
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a director by first name, last name, or both
const getDirectorByName = async (req, res) => {
  try {
    const { firstName, lastName } = req.params;
    const query = {};

    if (firstName) {
      query.firstName = firstName;
    }

    if (lastName) {
      query.lastName = lastName;
    }

    const directors = await Director.find(query);

    if (directors.length === 0) {
      return res.status(404).json({ error: 'No directors found' });
    }

    res.json(directors);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a director
const createDirector = async (req, res) => {
    try {
        const director = await Director.create(req.body);
        res.status(201).json(director);
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
    getDirectorByName,
    createDirector,
    updateDirector,
    deleteDirector,
};
