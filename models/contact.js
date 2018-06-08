const mongoose = require('mongoose');

const schema = mongoose.Schema({
  type: {
    type: String,
    required: false
    // enum: CONTACT.ALL_CATEGORY,
  },
  code: {
    type: String,
    required: false,
    sort: 'code',
  },
  email: {
    type: String,
    required: false,
    sort: 'email',
  },
  name: {
    type: String,
    required: false,
    sort: 'name',
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
  phone: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: true,
    sort: 'company',
  },
  tax_number: {
    type: String,
    sort: 'tax_number',
  },
  notes: {
    type: String,
    required: false,
  },
  appoint: {
    type: mongoose.Schema.ObjectId,
    required: false,
    ref: 'Company',
  },
});

module.exports = mongoose.model('Contact', schema, 'contacts');
