const mongoose = require('mongoose');

const schema = mongoose.Schema({
  status: {
    type: String,
    // default: PICKUP.STATUS.PENDING,
    // enum: PICKUP.ALL_STATUS,
    required: true,
  },
  schedule_at: {
    type: Date,
    required: false,
  },
  container_return: {
    type: String,
    required: false,
  },
  loading_days: {
    type: Number,
    required: false,
  },
  job: {
    type: mongoose.Schema.ObjectId,
    ref: 'Job',
    required: false,
  },
}, { _id: false, id: false });

module.exports = mongoose.model('Pickup', schema, 'pickups');
