const mongoose = require('mongoose');

const schema = mongoose.Schema({
  client_reference: {
    type: String,
    required: false,
    sort: 'client_reference',
  },
  agent_reference: {
    type: String,
    required: false,
    sort: 'agent_reference',
  },
  po_number: {
    type: String,
    required: false,
    sort: 'po_number',
  },
  notes: [
    {
      creator: {
        type: mongoose.Schema.ObjectId,
        ref: 'Account',
        required: true,
      },
      created_at: {
        type: Date,
        required: true,
        default: Date.now,
      },
      activity: {
        type: mongoose.Schema.ObjectId,
        ref: 'Activity',
        required: false,
      },
      note: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
        enum: ['proposal', 'quote', 'cancel'],
      },
    },
  ],
  mode: {
    type: String,
    required: true,
    // default: SHIPMENT.MODE.OCEAN,
    // enum: SHIPMENT.ALL_MODE,
  },
  type: {
    type: String,
    required: true,
    // default: Container.TYPE.FCL,
    // enum: _.values(Container.TYPE),
  },
  service_type: {
    type: String,
    required: true,
    // default: SHIPMENT.INCOTERM.PORT_TO_PORT,
    // enum: SHIPMENT.ALL_INCOTERM,
  },
  transport_type: {
    type: String,
    required: false,
    // enum: SHIPMENT.ALL_TRANSPORT_TYPE,
  },
  status: {
    type: String,
    required: true,
    // default: STATUS.REQUEST,
    // enum: SHIPMENT.ALL_STATUS,
    sort: 'status',
  },
  submission: {
    role: {
      type: String,
      enum: ['shipper', 'consignee', 'other'],
      default: 'consignee',
    },
    consignee: Boolean,
    shipper: Boolean,
  },
  invoice: {
    type: mongoose.Schema.ObjectId,
    ref: 'Invoice',
    required: false,
    nested: true,
  },
  rate: {
    type: mongoose.Schema.ObjectId,
    ref: 'Rate',
    required: false,
  },
  inland_transit: {
    file_at: {
      type: Date,
      required: false,
    },
    number: {
      type: String,
      required: false,
    },
  },
  timeline: {
    production_complete_at: {
      type: Date,
      required: false,
    },
    shipment_ready_at: {
      type: Date,
      required: false,
    },
    in_distribution_at: {
      type: Date,
      required: false,
    },
    pickup_at: {
      type: Date,
      required: false,
    },
    ams_update_at: {
      type: Date,
      required: false,
    },
    ams_approve_at: {
      type: Date,
      required: false,
    },
    inbond_update_at: {
      type: Date,
      required: false,
    },
    isf_update_at: {
      type: Date,
      required: false,
    },
    isf_approve_at: {
      type: Date,
      required: false,
    },
    cut_off_at: {
      type: Date,
      required: false,
    },
    departure_gate_at: {
      type: Date,
      required: false,
    },
    departure_port_at: {
      type: Date,
      required: false,
    },
    arrival_port_at: {
      type: Date,
      required: false,
    },
    inland_port_at: {
      type: Date,
      required: false,
    },
    entry_update_at: {
      type: Date,
      required: false,
    },
    entry_approve_at: {
      type: Date,
      required: false,
    },
    telex_release_at: {
      type: Date,
      required: false,
    },
    freight_release_at: {
      type: Date,
      required: false,
    },
    available_at: {
      type: Date,
      required: false,
    },
    deliver_at: {
      type: Date,
      required: false,
    },
  },
  services: [
    {
      type: String,
      required: true,
      // enum: SHIPMENT.ALL_SERVICE,
    },
  ],
  // quote: {
  //   type: QuoteSchema,
  //   required: false,
  // },
  // booking: {
  //   type: BookingSchema,
  //   required: false,
  // },
  // pickup: {
  //   type: PickupSchema,
  //   required: false,
  // },
  // isf: {
  //   type: ISFSchema,
  //   required: false,
  // },
  // entry: {
  //   type: EntrySchema,
  //   required: false,
  // },
  // delivery: {
  //   type: DeliverySchema,
  //   required: false,
  // },
  instruction: {
    has_insurance: {
      type: Boolean,
      required: false,
    },
    has_customs_bond: {
      type: Boolean,
      required: false,
    },
    customs_bond_number: {
      type: String,
      required: false,
    },
  },
  document: {
    commercial_invoices: [
      {
        // type: mongoose.Schema.Types.File,
        // required: false,
      },
    ],
    purchase_orders: [
      {
        // type: mongoose.Schema.Types.File,
        // required: false,
      },
    ],
    packing_lists: [
      {
        // type: mongoose.Schema.Types.File,
        // required: false,
      },
    ],
    invoice: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    arrival_notice: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    delivery_order: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    atme: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    proof_of_deliveries: [
      {
        // type: mongoose.Schema.Types.File,
        // required: false,
      },
    ],
    quote: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    entry_summary: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    entry_release: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    trucking_bill: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    booking_form: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    isf_form: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    lacey_act: {
      // type: mongoose.Schema.Types.File,
      // required: false,
    },
    miscellaneous: [
      {
        // type: mongoose.Schema.Types.File,
        // required: false,
      },
    ],
  },
  // cargo: CargoSchema,
  // cargo_manifest: CargoManifestSchema,
  // entity: {
  //   [CATEGORY.SHIPPER]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.CONSIGNEE]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.MANUFACTURER]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.CONSOLIDATOR]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.STUFFER]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.ISF]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.CUSTOMS]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.DEPARTURE_FREIGHT]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.DEPARTURE_TRUCKING]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.ARRIVAL_FREIGHT_LOCATION]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.ARRIVAL_FREIGHT]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.ARRIVAL_TRUCKING]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.PICKUP]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.DELIVERY]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.INLAND_FREIGHT_LOCATION]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   [CATEGORY.BILLING]: {
  //     type: EntitySchema,
  //     required: false,
  //   },
  //   notifies: [EntitySchema],
  // },
  bill: {
    // master: {
    //   type: BillSchema,
    //   required: false,
    // },
    // ams: {
    //   type: BillSchema,
    //   required: false,
    // },
    // house: {
    //   type: BillSchema,
    //   required: false,
    // },
  },
  invitation: {
    type: mongoose.Schema.ObjectId,
    ref: 'Invitation',
    required: false,
  },
});

module.exports = mongoose.model('Shipment', schema, 'shipments');
