// backend/models/destination.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Destination name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name must be less than 100 characters']
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true,
    minlength: [2, 'Country must be at least 2 characters'],
    maxlength: [100, 'Country must be less than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters'],
    maxlength: [1000, 'Description must be less than 1000 characters']
  },
  bestTimeToVisit: {
    type: [String],
    required: [true, 'Best time to visit is required'],
    validate: {
      validator: function(arr) {
        return arr.length > 0;
      },
      message: 'Please specify at least one best time to visit'
    }
  },
  topAttraction: {
    type: [String],
    required: [true, 'Top attractions are required'],
    validate: {
      validator: function(arr) {
        return arr.length > 0;
      },
      message: 'Please include at least one top attraction'
    }
  },
  source: {
    type: String,
    required: [true, 'Source is required'],
    trim: true,
    minlength: [2, 'Source must be at least 2 characters'],
    maxlength: [200, 'Source must be less than 200 characters']
  }
});

module.exports = mongoose.model('destination', destinationSchema);
