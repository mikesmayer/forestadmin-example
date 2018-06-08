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
  type: {
    type: String,
    required: false,
  },
  ports: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Port',
      required: true,
    },
  ],
});

module.exports = mongoose.model('Facility', schema, 'facilities');
