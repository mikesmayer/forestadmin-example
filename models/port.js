const mongoose = require('mongoose');

const schema = mongoose.Schema({
  mode: {
    type: String,
    required: true,
    // default: SHIPMENT.MODE.OCEAN,
    // enum: [SHIPMENT.MODE.OCEAN, SHIPMENT.MODE.AIR],
  },
  name: {
    type: String,
    required: true,
    sort: 'name',
  },
  city: {
    type: String,
    required: false,
    sort: 'city',
  },
  province: {
    type: String,
    required: false,
    sort: 'province',
  },
  country: {
    type: String,
    required: false,
    sort: 'country',
  },
  code: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 5,
    sort: 'code',
  },
  timezone: {
    type: String,
    required: false,
  },
  unlocs: {
    type: [String],
    required: true,
  },
  regions: {
    type: [String],
    required: false,
  },
  alias: {
    type: [String],
    required: false,
  },
  coordinates: {
    type: [Number],
    required: true,
    index: '2dsphere',
  },
});

module.exports = mongoose.model('Port', schema, 'ports');
