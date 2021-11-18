const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  agent: {
    type: String,
  },

  phone: {
    type: String
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

module.exports  =  mongoose.model('company', CompanySchema);