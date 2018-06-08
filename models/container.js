const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    sort: 'name',
  },
  description: {
    type: String,
    required: false,
    sort: 'description',
  },
  code: {
    type: String,
    required: true,
    unique: true,
    sort: 'code',
  },
  maximum_weight: {
    type: Number,
    required: true,
    min: 0,
  },
  maximum_volume: {
    type: Number,
    required: true,
    min: 0,
  },
  type: {
    type: String,
    // enum: SHIPMENT.ALL_TYPE,
    // default: SHIPMENT.TYPE.FCL,
  },
  mode: [{
    type: String,
    required: true,
    // default: SHIPMENT.MODE.OCEAN,
    // enum: SHIPMENT.ALL_MODE,
  }],
}, { id: false });

module.exports = mongoose.model('Container', schema, 'containers');
