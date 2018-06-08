const mongoose = require('mongoose');

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    sort: 'email',
  },
  source: {
    type: String,
    required: false
  },
  provider: {
    type: String,
    required: true,
    default: 'local',
    enum: ['local', 'google'],
  },
  is_verified: {
    type: Boolean,
    required: true,
    default: false,
    sort: 'is_verified',
  },
  auth: {
    required: true,
    default: {},
    type: {
      local: {
        type: String,
        required: false,
        select: false,
      },
      google: {
        type: String,
        required: false,
      },
    },
  },
  setting: {
    // notify: {
    //   type: NotifySchema,
    //   required: false,
    // },
    onboarding: [
      {
        type: String,
        required: false
      },
    ],
    // banner: {
    //   type: GuideSchema,
    //   required: false,
    // },
    last_notification_index: {
      type: Number,
      required: false,
      default: -1,
    },
    timezone: {
      type: String,
      required: false,
    },
  },
  profile: {
    // avatar: {
    //   type: mongoose.Schema.Types.File,
    //   required: false,
    // },
    firstname: {
      type: String,
      required: true,
      sort: 'profile.firstname',
    },
    lastname: {
      type: String,
      required: true,
      sort: 'profile.lastname',
    },
    phone: {
      type: String,
      required: false,
    },
  },
  sessions: [
    {
      active_at: {
        type: Date,
        default: Date.now,
        required: false,
      },
      ip_address: {
        type: String,
        required: false,
      },
    },
  ]
});

module.exports = mongoose.model('Account', schema, 'accounts');
