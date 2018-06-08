const mongoose = require('mongoose');

const schema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    // enum: MAPPING.ALL_TYPES,
  },
  description: {
    type: String,
    required: false,
  },
  aggregator: {
    type: String,
    required: true,
  },
  on_duplicate: {
    type: String,
    required: true,
    // enum: MAPPING.ALL_ON_DUPLICATES,
  },
  mapping: [
    {
      label: {
        type: String,
        required: true,
      },
      field: {
        type: String,
        required: true,
      },
      required: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
  extras: [
    {
      field: {
        type: String,
        required: true,
      },
      value: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Mapping', schema, 'mappings');
