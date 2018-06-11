const mongoose = require('mongoose');

const schema = mongoose.Schema({
  scac: {
    type: String,
    required: false,
    maxlength: 4,
  },
  number: {
    type: String,
    required: false,
    maxlength: 50,
  },
  quantity: {
    type: Number,
    required: false,
    min: 0,
  },
  unit: {
    type: String,
    required: false,
    maxlength: 5,
  },
  is_straight: {
    type: Boolean,
    required: false,
  },
  // file: {
  //   type: mongoose.Schema.Types.File,
  //   required: false,
  // },
}, { _id: false, id: false });

module.exports = mongoose.model('Bill', schema, 'bills');
