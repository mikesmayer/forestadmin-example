const mongoose = require('mongoose');

const schema = mongoose.Schema({
  service: {
    type: String,
    required: true,
    sort: 'service',
  },
  state: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
    // default: JOB.STATUS.PENDING,
    // enum: JOB.ALL_STATUS,
    sort: 'status',
  },
  shipment: {
    type: mongoose.Schema.ObjectId,
    ref: 'Shipment',
    required: false,
  },
});

module.exports = mongoose.model('Job', schema, 'jobs');
