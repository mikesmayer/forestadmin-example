const mongoose = require('mongoose');

const schema = mongoose.Schema({
  status: {
    type: String,
    // default: BOOKING.STATUS.PENDING,
    // enum: BOOKING.ALL_STATUS,
    required: true,
  },
  schedule: {
    type: mongoose.Schema.ObjectId,
    ref: 'Schedule',
    required: false,
  },
  carrier: {
    type: mongoose.Schema.ObjectId,
    ref: 'Carrier',
    required: false,
    populate: true,
    sort: 'name',
  },
  vessel: {
    type: String,
    required: false,
  },
  voyage: {
    type: String,
    required: false,
  },
  departure_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: false,
    sort: 'name',
  },
  arrival_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: false,
    sort: 'name',
  },
  departure_address: {
    display: {
      type: String,
      required: false,
    },
    place_id: {
      type: String,
      required: false,
    },
    longitude: {
      type: String,
      required: false,
    },
    latitude: {
      type: String,
      required: false,
    },
    street: {
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
  },
  arrival_address: {
    display: {
      type: String,
      required: false,
    },
    place_id: {
      type: String,
      required: false,
    },
    longitude: {
      type: String,
      required: false,
    },
    latitude: {
      type: String,
      required: false,
    },
    street: {
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
  },
  inland_port: {
    type: mongoose.Schema.ObjectId,
    ref: 'Port',
    required: false,
    sort: 'name',
  },
  order_confirmation: {
    type: String,
    required: false,
  },
  order_confirmation_at: {
    type: Date,
    required: false,
  },
  service_contract_number: {
    type: String,
    required: false,
  },
  freight_payment: {
    type: String,
    required: false,
    enum: ['Prepaid', 'Collect'],
  },
  ship_term: {
    type: String,
    required: false,
    enum: ['FOB', 'EXWORK', 'DDU', 'DDP'],
  },
  payment_term: {
    type: String,
    required: false,
    enum: ['T/T', 'LC', 'D/P', 'OTHER'],
  },
  local_customs_declaration: {
    type: String,
    required: false,
    enum: ['Please Provide', 'Shipper'],
  },
  local_haulage: {
    type: String,
    required: false,
    enum: ['Please Provide', 'Shipper'],
  },
  job: {
    type: mongoose.Schema.ObjectId,
    ref: 'Job',
    required: false,
  },
}, { _id: false, id: false });

module.exports = mongoose.model('Booking', schema, 'bookings');
