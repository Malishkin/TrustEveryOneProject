const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'person'
    },

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
},
    
  firstName: {
      type: String
      
    
},

middleName: {
    type: String,
    
},

lastName: {
    type: String
    
},

aliasName: {
    type: String
    
},

date_of_birth: {
    type: Date
    
},



street: {
    type: String
},


city: {
    type: String
},
country: {
    type: String
},

occupation: {
    type: String,
    

},
communicativeness: {
    type: Number
    
},

professionalism: {
    type: Number
    
},

execution_of_obligations: {
    type: Number,
    
},

trust_degree: {
    type: Number
    
},

additional_info: {
    type: String

}

});

module.exports = mongoose.model('contact', ContactSchema);