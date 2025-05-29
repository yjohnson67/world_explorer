// backend/routes/destinations.js
const express = require('express');
const router = express.Router();
const destination = require('../models/destinations');

// GET all destinations from the database
router.get('/', async (req, res) => {
  try {
    const destinations = await destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch destinations', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const newdestination = new destination(req.body);
    await newdestination.save();
    res.status(201).json({ message: 'destination created', newdestination });
  } catch (error) {
    res.status(400).json({ message: 'Error adding destinations', error });
  }
});

// PUT to update a destination by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDestination = await destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json({ message: 'Destination updated', updatedDestination });
  } catch (error) {
    res.status(400).json({ message: 'Error updating destination', error });
  }
});

// DELETE a destination by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDestination = await destination.findByIdAndDelete(req.params.id);
    if (!deletedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json({ message: 'Destination deleted', deletedDestination });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting destination', error });
  }
});


module.exports = router;