const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  supplier: {
    type: String,
    },
  
    type_of_service: {
        type: String,
        required: true

    },

    communicativeness: {
        type: Number,
        required: true
    },

    professionalism: {
        type: Number,
        required: true
    },

    execution_of_obligations: {
        type: Number,
        required: true
    },


  trust_degree: {
    type: Number,
    required: true,
  },
  expected_value: {
    type: Number,
    required: true,
  },

  additional_info: {
    type: String,
  },
});

module.exports = mongoose.model('service', ServiceSchema);
