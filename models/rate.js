const mongoose = require('mongoose');

const schema = mongoose.Schema({
  mode: {
    type: String,
    required: true,
    // enum: [MODE.OCEAN, MODE.AIR, MODE.RAIL],
    // default: MODE.OCEAN,
  },
  type: {
    type: String,
    required: true,
    // enum: [TYPE.LCL, TYPE.FCL],
    // default: TYPE.FCL,
  },
  match_by: {
    type: String,
    required: false,
    // enum: ALL_MATCH_BY,
    // default: MATCH_BY.TRANSIT,
  },
  carrier: {
    type: mongoose.Schema.ObjectId,
    ref: 'Carrier',
    required: true,
    sort: 'name',
  },
  services: [
    {
      type: String,
      required: true,
      // default: RATE_SERVICES,
      // enum: RATE_SERVICES,
    },
  ],
  loading_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: false,
    sort: 'name',
  },
  discharge_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: false,
    sort: 'name',
  },
  departure_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: true,
    sort: 'name',
  },
  arrival_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: true,
    sort: 'name',
  },
  departure_postal_codes: [
    {
      type: String,
      required: true,
    },
  ],
  arrival_postal_codes: [
    {
      type: String,
      required: true,
    },
  ],
  service_route: {
    type: mongoose.Schema.ObjectId,
    ref: 'ServiceRoute',
    required: false,
  },
  transit: {
    type: Number,
    required: false,
    default: 0,
    min: 0,
  },
  effective_start_at: {
    type: Date,
    required: true,
  },
  effective_end_at: {
    type: Date,
    required: true,
  },
  provider: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
    required: false,
    sort: 'name',
  },
  contract_number: {
    type: String,
    required: false,
    // default: DEFAULT_CONTRACT_NUMBER,
  },
  costs: [
    {
      container: {
        type: mongoose.Schema.ObjectId,
        ref: 'Container',
        required: true,
      },
      cost_category: {
        type: mongoose.Schema.ObjectId,
        ref: 'CostCategory',
        required: true,
      },
      charge_type: {
        type: String,
        // enum: ALL_CHARGE,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
  fees: [
    {
      fee_category: {
        type: mongoose.Schema.ObjectId,
        ref: 'FeeCategory',
        required: true,
      },
      charge_type: {
        type: String,
        required: false,
      },
      amount: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
  audience: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Company',
      required: false,
    },
  ],
});

module.exports = mongoose.model('Rate', schema, 'rates');
