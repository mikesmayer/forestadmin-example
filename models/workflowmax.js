const mongoose = require('mongoose');

const schema = mongoose.Schema({
  job: {
    type: String,
    required: false,
  },
  client: {
    type: String,
    required: false,
  },
  carrier: {
    type: String,
    required: false,
  },
  arrival_trucking: {
    type: String,
    required: false,
  },
  costs: {
    carrier: {
      type: mongoose.Schema.Types.Mixed,
      required: false,
    },
    customs: [{
      type: String,
      required: true,
    }],
    arrival_trucking: [{
      type: String,
      required: true,
    }],
    other: [{
      type: String,
      required: true,
    }],
  },
});

module.exports = mongoose.model('Workflowmax', schema, 'workflowmaxs');
