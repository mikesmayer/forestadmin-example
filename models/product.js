const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    sort: 'name',
  },
  description: {
    type: String,
    required: false,
    sort: 'description',
  },
  suppliers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Contact',
      required: false,
    },
  ],
  sku: {
    type: String,
    required: false,
    sort: 'sku',
  },
  hts_code: {
    type: String,
    required: false,
    sort: 'hts_code',
  },
  shipments: [
    {
      shipment: {
        type: mongoose.Schema.ObjectId,
        ref: 'Shipment',
        required: true,
      },
      complete_at: {
        type: Date,
        required: false,
      },
      freight_cost: {
        type: Number,
        required: false,
      },
      tariff_cost: {
        type: Number,
        required: false,
      },
      base_cost: {
        type: Number,
        required: false,
      },
      weight: {
        type: Number,
        required: false,
        min: 0,
      },
      volume: {
        type: Number,
        required: false,
        min: 0,
      },
      quantity: {
        type: Number,
        required: false,
        min: 0,
      },
      unit: {
        type: String,
        required: false,
        // enum: MEASURE.ALL,
      },
    },
  ],
});

module.exports = mongoose.model('Product', schema, 'products');
