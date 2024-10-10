const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  eventType: { type: String, required: true },
  channels: {
    email: { type: Boolean, default: false },
    sms: { type: Boolean, default: false },
    whatsapp: { type: Boolean, default: false }
  }
});

module.exports = mongoose.model('UserPreference', userPreferenceSchema);
