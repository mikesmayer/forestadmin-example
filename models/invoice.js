const mongoose = require('mongoose');

const schema = mongoose.Schema({
  container: {
    type: mongoose.Schema.ObjectId,
    ref: 'Container',
    required: true,
  },
  charge_type: {
    type: String,
    required: true,
    // enum: CHARGE.ALL,
    // default: CHARGE.CONTAINER,
  },
  amount: {
    type: Number,
    required: false,
  },
  charge: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  cost_category: {
    type: mongoose.Schema.ObjectId,
    populate: true,
    required: true,
    ref: 'CostCategory',
  },
}, { _id: false, id: false });

module.exports = mongoose.model('Invoice', schema, 'invoices');
