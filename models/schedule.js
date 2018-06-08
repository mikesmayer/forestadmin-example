const mongoose = require('mongoose');

const schema = mongoose.Schema({
  mode: {
    type: String,
    required: true,
    // default: SHIPMENT.MODE.OCEAN,
    // enum: [SHIPMENT.MODE.OCEAN, SHIPMENT.MODE.AIR, SHIPMENT.MODE.RAIL],
  },
  carrier: {
    type: mongoose.Schema.ObjectId,
    ref: 'Carrier',
    required: true,
    populate: true,
    sort: 'name',
  },
  vessel: {
    type: String,
    required: false,
    sort: 'vessel',
  },
  voyage: {
    type: String,
    required: false,
    sort: 'voyage',
  },
  is_tranship: {
    type: Boolean,
    required: true,
    default: true,
  },
  service_route: {
    type: mongoose.Schema.ObjectId,
    ref: 'ServiceRoute',
    required: false,
  },
  departure_port_facility: {
    type: mongoose.Schema.ObjectId,
    ref: 'Facility',
    required: false,
    populate: true,
  },
  departure_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: true,
    populate: true,
    index: true,
    sort: 'name',
  },
  arrival_port_facility: {
    type: mongoose.Schema.ObjectId,
    ref: 'Facility',
    required: false,
    populate: true,
  },
  arrival_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: true,
    populate: true,
    index: true,
    sort: 'name',
  },
  departure_at: {
    type: Date,
    required: true,
    index: true,
  },
  arrival_at: {
    type: Date,
    required: true,
    index: true,
  },
  cutoff_at: {
    type: Date,
    required: false,
  },
  discharge_at: {
    type: Date,
    required: false,
  },
  transit: {
    type: Number,
    required: false,
    index: true,
    min: 0,
  },
});

module.exports = mongoose.model('Schedule', schema, 'schedules');
