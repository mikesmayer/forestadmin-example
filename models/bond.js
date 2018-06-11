const mongoose = require('mongoose');

const schema = mongoose.Schema({
  number: {
    type: String,
    required: false,
  },
  amount: {
    type: Number,
    required: false,
    integer: true,
    min: 50000,
  },
  effective_at: {
    type: Date,
    required: false,
  },
  expire_at: {
    type: Date,
    required: false,
  },
  // file: {
  //   type: mongoose.Schema.Types.File,
  //   required: false,
  // },
}, { _id: false, id: false });

module.exports = mongoose.model('Bond', schema, 'bonds');
