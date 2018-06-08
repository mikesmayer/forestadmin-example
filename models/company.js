const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    sort: 'name',
  },
  network: {
    type: mongoose.Schema.ObjectId,
    ref: 'Network',
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
  phone: {
    type: String,
    required: false,
    sort: 'phone',
  },
  shipments: {
    type: Number,
    required: false,
    min: 0,
  },
  tax_number: {
    type: String,
    required: false,
    sort: 'tax_number',
  },
  // attorney_letter: {
  //   type: mongoose.Schema.Types.File,
  //   required: false,
  // },
  // avatar: {
  //   type: mongoose.Schema.Types.File,
  //   required: false,
  // },
  role: {
    type: String,
    required: true
    // enum: USER.ALL_ROLE,
    // default: ROLE.CLIENT,
    // sort: 'role',
  },
  // bond: {
  //   type: BondSchema,
  //   required: false,
  // },
  credit: {
    amount: {
      type: Number,
      required: false,
      integer: true,
    },
    terms: {
      type: String,
      required: false,
      // enum: COMPANY.ALL_TERMS,
      // default: COMPANY.CREDIT_TERMS.DUE_ON_RECEIPT,
    },
    review_at: {
      type: Date,
      required: false,
    },
    // application: {
    //   type: mongoose.Schema.Types.File,
    //   required: false,
    // },
  },
  stripe_customer: {
    type: String,
    required: false,
  },
  payments: [
    {
      type: {
        type: String,
        required: true
        // enum: INVOICE.ALL_PAYMENT_TYPE,
      },
      reference: {
        type: String,
        required: true,
      },
      merchant: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true
        // enum: INVOICE.ALL_PAYMENT_TYPE_STATUS,
        // default: INVOICE.PAYMENT_TYPE_STATUS.PENDING,
      },
    },
  ],
  types: [
    {
      type: String,
      required: false
      // enum: COMPANY.ALL_TYPE,
    },
  ],
  members: [
    {
      account: {
        type: mongoose.Schema.ObjectId,
        ref: 'Account',
        required: true,
      },
      // role: {
      //   type: String,
      //   required: true,
      //   enum: COMPANY.ALL_MEMBER,
      //   default: MEMBER.MEMBER,
      // },
    },
  ],
  last_notification_at: {
    type: Date,
    required: false,
  },
  guide: {
    poa: {
      type: Boolean,
      required: true,
      default: false,
    },
    setup: {
      type: Boolean,
      required: true,
      default: false,
    },
    team: {
      type: Boolean,
      required: true,
      default: false,
    },
    shipper: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});

module.exports = mongoose.model('Company', schema, 'companies');
