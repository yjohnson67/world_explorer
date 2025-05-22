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

module.exports = router;