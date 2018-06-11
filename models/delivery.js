const mongoose = require('mongoose');

const schema = mongoose.Schema({
  status: {
    type: String,
    // default: DELIVERY.STATUS.PENDING,
    // enum: DELIVERY.ALL_STATUS,
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
  unloading_days: {
    type: Number,
    required: false,
  },
  last_free_at: {
    type: Date,
    required: false,
  },
  general_order_at: {
    type: Date,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  job: {
    type: mongoose.Schema.ObjectId,
    ref: 'Job',
    required: false,
  },
}, { _id: false, id: false });

module.exports = mongoose.model('Delivery', schema, 'Deliveries');
