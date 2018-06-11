const mongoose = require('mongoose');

const schema = mongoose.Schema({
  reference: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    // enum: [STATUS.CERTIFIED, STATUS.ADMISSIBLE, STATUS.ACCEPTED],
  },
  payload: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

module.exports = mongoose.model('StrixEntry', schema, 'strix_entries');
