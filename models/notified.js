const mongoose = require('mongoose');

const schema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  send_at: {
    type: Date,
    required: true,
  },
  account: {
    type: mongoose.Schema.ObjectId,
    ref: 'Account',
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Notified', schema, 'notifieds');
