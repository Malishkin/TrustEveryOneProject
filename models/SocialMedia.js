const mongoose = require('mongoose');

const SocialmediaSchema = new mongoose.Schema({
  facebook: {
    type: String,
  },

  instagram: {
    type: String,
  },

  twitter: {
    type: String,
  },

  website: {},

  phone: {
    type: String,
  },

 
  trust_degree: {
    type: Number,
  },

  additional_info: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('socialmedia', SocialmediaSchema);
