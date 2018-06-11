const mongoose = require('mongoose');

const schema = mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  sku: {
    type: String,
    required: false,
  },
  volume: {
    type: Number,
    required: false,
    min: 0,
  },
  weight: {
    type: Number,
    required: false,
    min: 0,
  },
  gross_weight: {
    type: Number,
    required: false,
    min: 0,
  },
  origin_country: {
    type: String,
    required: false,
  },
  export_country: {
    type: String,
    required: false,
  },
  hts_code: {
    type: String,
    required: false,
  },
  tariff_value: {
    type: Number,
    required: false,
  },
  invoice: {
    type: String,
    required: false,
  },
  invoice_line: {
    type: Number,
    integer: true,
    required: false,
  },
  quantity: {
    unit: {
      type: String,
      required: false,
      // enum: UNIT_MEASURE.ALL,
    },
    value: {
      type: Number,
      required: false,
      min: 0,
      max: 9999999999,
    },
  },
}, { _id: false, id: false });

module.exports = mongoose.model('Cargo', schema, 'cargos');
