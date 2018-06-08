const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    sort: 'name',
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
    required: false,
  },
  use_default_network_quote: {
    type: Boolean,
    required: true,
    default: true,
  },
  definitions: [
    {
      company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
        required: true,
      },
      entity: {
        type: String,
        // enum: ENTITY.ALL_CATEGORY,
      },
    },
  ],
  // grant: {
  //   role_module: _.reduce(ROLES, (scheme, type) => _.assign(scheme, {
  //     [type]: {
  //       type: [
  //         {
  //           type: String,
  //           required: true,
  //           enum: NETWORK.ALL_ROLE_MODULE,
  //         },
  //       ],
  //       default: NETWORK.ALL_ROLE_MODULE,
  //     },
  //   }), {}),
    // entity_service: _.reduce(ENTITY_TYPES, (scheme, type) => _.assign(scheme, {
    //   [type]: {
    //     type: [
    //       {
    //         type: String,
    //         required: true,
    //         enum: NETWORK.ALL_ENTITY_SERVICE,
    //       },
    //     ],
    //     default: NETWORK.ALL_ENTITY_SERVICE,
    //   },
    // }), {}),
  // },
  // pricing: {
  //   type: PricingSchema,
  //   required: true,
  // },
  // contracts: [ContractSchema],
});

module.exports = mongoose.model('Network', schema, 'networks');
