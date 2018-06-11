const mongoose = require('mongoose');

const schema = mongoose.Schema({
  departure_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: true,
  },
  arrival_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: true,
  },
  schedule_count: {
    type: Number,
    required: false,
    default: 0,
  },
  sync_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Route', schema, 'routes');
