// backend/models/destination.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  country: Number,
  description: String,
  bestTimeToVisit: [String],
  topAttraction: [string],
  source: String,
});

module.exports = mongoose.model('destination', destinationSchema);