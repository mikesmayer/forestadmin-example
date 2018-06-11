const mongoose = require('mongoose');

const schema = mongoose.Schema({
  reference: {
    type: String,
    required: false,
    sort: 'reference',
  },
  status: {
    type: String,
    required: true,
    // enum: ENTRY.STATUS.ALL,
    // default: ENTRY.STATUS.PENDING,
    sort: 'status',
  },
  error: {
    type: String,
    required: false,
  },
  warning: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
    default: '01',
    // enum: ENTRY.TYPE.ALL,
  },
  entry_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    sort: 'name',
  },
  summary_at: {
    type: Date,
    required: false,
  },
  filing_at: {
    type: Date,
    required: false,
  },
  cargo_release_at: {
    type: Date,
    required: false,
  },
  bond_type: {
    type: String,
    required: false,
    // enum: ENTRY.BOND_TYPE.ALL,
  },
  // The Bond Producer Account Number must be alphanumeric
  // characters only. No spaces, hypens, slashes, etc.
  bond_producer_account: {
    type: Number,
    integer: true,
    required: false,
  },
  payment_type: {
    type: String,
    required: true,
    // enum: ENTRY.PAYMENT_TYPE.ALL,
    // default: ENTRY.PAYMENT_TYPE['7501_NOT_REQUIRED'],
  },
  transportation: {
    type: String,
    required: false,
    // enum: ENTRY.TRANSPORT.ALL,
  },
  cargo_location: {
    type: String,
    required: false,
    maxlength: 4,
  },
  destination_state: {
    type: String,
    required: false,
    // enum: LOCATION.US_STATE.ALL,
  },
  invoice: {
    type: String,
    required: false,
  },
  is_uploaded: {
    type: Boolean,
    required: true,
    default: false,
  },
  currency: {
    code: {
      type: String,
      required: true,
      default: 'USD',
    },
    rate: {
      type: Number,
      required: true,
      default: 1,
    },
    country: {
      type: String,
      required: true,
      default: 'US',
    },
  },
  is_duty_paid: {
    type: Boolean,
    required: true,
    default: false,
  },
  is_manual: {
    type: Boolean,
    required: true,
    default: false,
  },
  trgdirect: {
    3461: {
      status: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
    },
    manifest: {
      status: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
    },
    fda: {
      status: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
    },
    fda_proceed_at: {
      type: Date,
      required: false,
    },
    total_value: {
      type: String,
      required: false,
    },
    total_duty: {
      type: String,
      required: false,
    },
    total_tax: {
      type: String,
      required: false,
    },
    total_anti_dumping: {
      type: String,
      required: false,
    },
    total_countervailing: {
      type: String,
      required: false,
    },
    total_fees: [
      {
        code: {
          type: String,
          required: false,
        },
        amount: {
          type: String,
          required: false,
        },
      },
    ],
    invoice_fees: [
      {
        line: {
          type: String,
          required: false,
        },
        invoice_number: {
          type: String,
          required: false,
        },
        manufacturer_tax_number: {
          type: String,
          required: false,
        },
        hts_code: {
          type: String,
          required: false,
        },
        value: {
          type: Number,
          required: false,
        },
        duty: {
          type: Number,
          required: false,
        },
        quantities: [
          {
            value: {
              type: Number,
              required: false,
            },
            unit: {
              type: String,
              required: false,
            },
          },
        ],
        total_fees: {
          type: Number,
          required: false,
        },
        fees: [
          {
            code: {
              type: String,
              required: false,
            },
            amount: {
              type: String,
              required: false,
            },
          },
        ],
      },
    ],
  },
  job: {
    type: mongoose.Schema.ObjectId,
    ref: 'Job',
    required: false,
  },
}, { _id: false, id: false });

module.exports = mongoose.model('Entry', schema, 'entries');
