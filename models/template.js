const mongoose = require('mongoose');

const schema = mongoose.Schema({
  shipment: {
    // entity: _.fromPairs(_.map(ALL_CATEGORY, (CATEGORY) => [
    //   CATEGORY, {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'Contact',
    //   },
    // ])),
  },
});

module.exports = mongoose.model('Template', schema, 'templates');
