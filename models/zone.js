const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  province: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  alias: [
    {
      type: String,
      required: false,
    },
  ],
  postal_codes: [
    {
      type: String,
      required: false,
    },
  ],
  coordinates: {
    type: [Number],
    required: true,
    // index: '2dsphere',
  },
});

module.exports = mongoose.model('Zone', schema, 'zones');
