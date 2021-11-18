const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  middleName: {
    type: String,
  },

  lastName: {
    type: String,
    required: true,
  },

  aliasName: {
    type: String,
  },

  date_of_birth: {
    type: Date,
  },

  street: {
    type: String,
  },

  city: {
    type: String,
  },
  country: {
    type: String,
  },

  occupation: {
    type: String,
    required: true,
  },
  communicativeness: {
    type: Number,
    required: true,
  },

  professionalism: {
    type: Number,
    required: true,
  },

  execution_of_obligations: {
    type: Number,
    required: true,
  },

  trust_degree: {
    type: Number,
    required: true,
  },

  additional_info: {
    type: String,
  },
});

module.exports = mongoose.model('person', PersonSchema);
