const mongoose = require('mongoose');

const schema = mongoose.Schema({
  tax_number: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    // maxlength: 35, // uncomment when all shipment before 2.0 done
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    street: {
      type: String,
      required: false,
    },
    street_secondary: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    postal_code: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    place_id: {
      type: String,
      required: false,
    },
    display: {
      type: String,
      required: false,
    },
  },
  notes: {
    type: String,
    required: false,
  },
  contact: {
    type: mongoose.Schema.ObjectId,
    ref: 'Contact',
    required: false,
  },
  appoint: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
    required: false,
  },
}, { _id: false, id: false });

module.exports = mongoose.model('Entity', schema, 'entities');
