const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  carrier: {
    type: mongoose.Schema.ObjectId,
    ref: 'Carrier',
    required: true,
    populate: true,
  },
});

module.exports = mongoose.model('ServiceRoute', schema, 'service_routes');
