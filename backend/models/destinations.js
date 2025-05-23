// backend/models/destination.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  description: String,
  bestTimeToVisit: [String],
  topAttraction: [String],
  source: String,
});

module.exports = mongoose.model('destination', destinationSchema);