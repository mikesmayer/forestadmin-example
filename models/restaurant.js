const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  cuisine: String,
  borough: String,
  grades: [{
    date: Date,
    grade: String,
    score: Number
  }],
  address: {
    building: String,
    street: String,
    zipcode: String,
    coord: [Number]
  }
}, {
  timestamps: false
});

module.exports = mongoose.model('Restaurant', schema, 'restaurants');


