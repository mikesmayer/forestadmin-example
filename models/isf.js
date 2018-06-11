const mongoose = require('mongoose');

const schema = mongoose.Schema({
  reference: {
    type: String,
    required: false,
    sort: 'reference',
  },
  has_bill_on_file: {
    type: Boolean,
    required: false,
  },
  customs_response: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
    // enum: ISF.STATUS.ALL,
    // default: ISF.STATUS.PENDING,
    sort: 'status',
  },
  error: {
    type: String,
    required: false,
  },
  shipment: {
    type: String,
    required: true,
    // enum: ISF.SHIPMENT.ALL,
    // default: ISF.SHIPMENT.STD,
    sort: 'shipment',
  },
  transaction: {
    type: String,
    required: true,
    // enum: ISF.TRANSACTION.ALL,
    // default: ISF.TRANSACTION.CT,
    sort: 'transaction',
  },
  transport: {
    type: String,
    required: true,
    // enum: ISF.TRANSPORT.ALL,
    // default: ISF.TRANSPORT.CONTAINERIZED,
    sort: 'transport',
  },
  is_uploaded: {
    type: Boolean,
    required: true,
    default: false,
  },
  bond: {
    holder: {
      type: String,
      required: true,
      // enum: ISF.BOND.HOLDER.ALL,
      // default: ISF.BOND.HOLDER.IMPORTER,
      sort: 'bond.holder',
    },
    holder_tax_id: {
      type: String,
      required: false,
      sort: 'bond.holder_tax_id',
    },
    type: {
      type: String,
      required: true,
      // enum: ISF.BOND.TYPE.ALL,
      // default: ISF.BOND.TYPE.CONTINUOUS,
      sort: 'bond.type',
    },
    surety_code: {
      type: String,
      required: false,
      sort: 'bond.surety_code',
      maxlength: 3,
    },
    reference_number: {
      type: String,
      required: false,
      sort: 'bond.reference_number',
      default: null,
      maxlength: 50,
    },
  },
  is_manual: {
    type: Boolean,
    required: true,
    default: false,
  },
  job: {
    type: mongoose.Schema.ObjectId,
    ref: 'Job',
    required: false,
  },
}, { _id: false, id: false });

module.exports = mongoose.model('Isf', schema, 'isfs');
