const mongoose = require('mongoose');

const schema = mongoose.Schema({
  costs: [
      {
        mode: {
          type: String,
          required: true,
          // default: MODE.OCEAN,
        },
        type: {
          type: String,
          required: true,
          // default: TYPE.FCL,
        },
        markup_group: {
          type: String,
          required: true,
          // enum: ALL_MARKUP_GROUP,
        },
        rate: {
          type: Number,
          required: true,
        },
        min: {
          type: Number,
          required: false,
        },
      },
    ],
    fees: [
      {
        markup_group: {
          type: String,
          required: true,
          // enum: ALL_MARKUP_GROUP,
        },
        rate: {
          type: Number,
          required: true,
        },
        min: {
          type: Number,
          required: false,
        },
      },
    ],
  }, { _id: false, id: false });

module.exports = mongoose.model('Pricing', schema, 'Pricings');
