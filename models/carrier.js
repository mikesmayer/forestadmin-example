const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    sort: 'name',
  },
  short_name: {
    type: String,
    required: false,
    sort: 'short_name',
  },
  category: {
    type: String,
    // enum: CARRIER.ALL_CATEGORY,
    required: true,
    sort: 'category',
  },
  scac: {
    type: String,
    required: true,
    unique: true,
    sort: 'scac',
  },
  icao: {
    type: String,
    required: false,
    sort: 'icao',
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model('Carrier', schema, 'carriers');
