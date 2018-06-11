const mongoose = require('mongoose');

const schema = mongoose.Schema({
  mode: {
    type: String,
    required: true,
    // default: SHIPMENT.MODE.OCEAN,
    // enum: [SHIPMENT.MODE.OCEAN, SHIPMENT.MODE.AIR, SHIPMENT.MODE.RAIL],
  },
  type: {
    type: String,
    required: true,
    // enum: [SHIPMENT.TYPE.LCL, SHIPMENT.TYPE.FCL],
  },
  services: [
    {
      type: String,
      required: true,
      // enum: QUOTE_SERVICES,
    },
  ],
  rate: {
    type: mongoose.Schema.ObjectId,
    ref: 'Rate',
    required: false,
  },
  schedule: {
    type: mongoose.Schema.ObjectId,
    ref: 'Schedule',
    required: false,
  },
  departure_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: false,
  },
  arrival_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: false,
  },
  departure_postal_codes: [{
    type: String,
    required: true,
  }],
  arrival_postal_codes: [{
    type: String,
    required: true,
  }],
  departure_at: {
    type: Date,
    required: false,
  },
  arrival_at: {
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
  transit: {
    type: Number,
    required: false,
  },
  // transits: [TransitSchema],
  carrier: {
    type: mongoose.Schema.ObjectId,
    ref: 'Carrier',
    required: false,
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  effective_start_at: {
    type: Date,
    required: false,
  },
  effective_end_at: {
    type: Date,
    required: true,
  },
  provider: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
  },
  network: {
    type: mongoose.Schema.ObjectId,
    ref: 'Network',
    required: false,
    sort: 'name',
  },
  contract_number: {
    type: String,
    required: false,
    // default: DEFAULT_CONTRACT_NUMBER,
  },
  cutoff_at: {
    type: Date,
    required: false,
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
      suggestions: [
        {
          criteria: [
            {
              type: String,
              required: true,
            },
          ],
        },
      ],
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
      suggestions: [
        {
          criteria: [
            {
              type: String,
              required: true,
            },
          ],
        },
      ],
    },
  ],
  audience: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Company',
      required: true,
    },
  ],
});

module.exports = mongoose.model('Quote', schema, 'quotes');
