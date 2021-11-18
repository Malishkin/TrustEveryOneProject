const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  brand: {
      type: String,
      required: true
  },

  model: {
    type: String,
    
},

  manufacturer: {
      type: String,
      required: true
    
    },
  
  country: {
      type: String,
      
  },

  functionality: {
    type: String,
    required: true,
    },
  
  efficiency: {
    type: Number,
    required: true,
  },

  reliability: {
    type: Number,
    required: true,
  },

  convenience: {
    type: Number,
    required: true,
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

module.exports  =  mongoose.model('product', ProductSchema);