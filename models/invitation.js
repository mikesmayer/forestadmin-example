const mongoose = require('mongoose');

const schema = mongoose.Schema({
});

module.exports = mongoose.model('Invitation', schema, 'invitations');
