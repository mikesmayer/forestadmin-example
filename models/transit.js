const mongoose = require('mongoose');

const schema = mongoose.Schema({
  service_route: {
    type: mongoose.Schema.ObjectId,
    ref: 'ServiceRoute',
    required: false,
  },
  arrival_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: true,
    sort: 'name',
  },
  departure_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: true,
    sort: 'name',
  },
  cutoff_at: {
    type: Date,
    required: false,
  },
  departure_port_at: {
    type: Date,
    required: true,
  },
  arrival_port_at: {
    type: Date,
    required: true,
  },
  vessel: {
    type: String,
    required: false,
  },
  voyage: {
    type: String,
    required: false,
  },
  transit: {
    type: Number,
    required: true,
    index: true,
    min: 0,
  },
  type: {
    type: String,
    required: true,
    enum: ['feeder', 'ocean', 'rail', 'truck', 'unknown'],
  },
}, { _id: false, id: false });

module.exports = mongoose.model('Transit', schema, 'transits');
