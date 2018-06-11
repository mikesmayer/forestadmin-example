const mongoose = require('mongoose');

const schema = mongoose.Schema({
  ams_status: {
    type: String,
    // default: CARGO_MANIFEST.STATUS.GREY,
    // enum: CARGO_MANIFEST.ALL_STATUS,
    required: true,
  },
  inbond_status: {
    type: String,
    // default: CARGO_MANIFEST.STATUS.GREY,
    // enum: CARGO_MANIFEST.ALL_STATUS,
    required: true,
  },
  isf_status: {
    type: String,
    // default: CARGO_MANIFEST.STATUS.GREY,
    // enum: CARGO_MANIFEST.ALL_STATUS,
    required: true,
  },
  entry_status: {
    type: String,
    // default: CARGO_MANIFEST.STATUS.GREY,
    // enum: CARGO_MANIFEST.ALL_STATUS,
    required: true,
  },
  updated_at: {
    type: Date,
    required: false,
  },
  data: {
    raw: {
      type: String,
      required: false,
    },
    carrier: {
      type: mongoose.Schema.ObjectId,
      ref: 'Carrier',
      required: false,
    },
    arrival_port_at: {
      type: Date,
      required: false,
    },
    vessel: {
      type: String,
      required: false,
    },
    voyage: {
      type: String,
      required: false,
    },
    isf_on_file: {
      type: Boolean,
      required: false,
    },
    in_bond_number: {
      type: String,
      required: false,
    },
    in_bond_status: {
      type: String,
      required: false,
    },
    master: {
      type: mongoose.Schema.Types.Mixed,
      required: false,
      default: {},
    },
    ams: {
      type: mongoose.Schema.Types.Mixed,
      required: false,
      default: {},
    },
    splits: [
      {
        part_indicator: {
          type: String,
          required: false,
        },
        boarded_quantity: {
          type: Number,
          required: false,
        },
        bill_type: {
          type: String,
          // enum: CARGO_MANIFEST.ALL_BILL_TYPE,
          required: false,
        },
      },
    ],
  },
  events: [{
    date: {
      type: Date,
      required: true, // not require when dont ignore error event (WSA)
    },
    action: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    sequence: {
      type: String,
      required: false,
    },
    bill_type: {
      type: String,
      // enum: CARGO_MANIFEST.ALL_BILL_TYPE,
      required: false,
    },
    category: {
      type: String,
      // enum: CARGO_MANIFEST.ALL_CATEGORY,
      required: false, // not required because some events are not handle
    },
  }],
}, { _id: false, id: false });

module.exports = mongoose.model('CargoManifest', schema, 'cargo_manifests');
