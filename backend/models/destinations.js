const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Destination name is required']
  },
  country: {
    type: String,
    required: [true, 'Country is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  bestTimeToVisit: {
    type: [String],
    required: true,
    validate: {
      validator: (arr) => arr.length > 0,
      message: 'Please specify at least one best time to visit'
    }
  },
  topAttraction: {
    type: [String],
    required: true,
    validate: {
      validator: (arr) => arr.length > 0,
      message: 'Please include at least one top attraction'
    }
  },
  source: {
    type: String,
    required: [true, 'Source is required']
  }
});

module.exports = mongoose.model('destination', destinationSchema);