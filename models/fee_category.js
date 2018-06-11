const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  service: {
    type: String,
    required: true,
    // enum: [
    //   SHIPMENT.SERVICE.PICKUP,
    //   SHIPMENT.SERVICE.BOOKING,
    //   SHIPMENT.SERVICE.DELIVERY,
    //   SHIPMENT.SERVICE.ISF,
    //   SHIPMENT.SERVICE.ENTRY,
    // ],
  },
  charge_type: {
    type: String,
    required: false,
  },
  markup_group: {
    type: String,
    required: false,
    // enum: ALL_MARKUP_GROUP,
  },
  invoice_group: {
    type: String,
    required: false,
    // enum: ALL_INVOICE_GROUP,
  },
  alias: {
    type: [String],
    required: false,
  },
  suggestions: [
    {
      criteria: [
        {
          type: String,
          required: true,
        },
      ],
      amount: {
        type: Number,
        required: false,
      },
    },
  ],
});

module.exports = mongoose.model('FeeCategory', schema, 'fee_categories');
