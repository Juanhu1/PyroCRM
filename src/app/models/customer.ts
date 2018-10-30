import {Joi} from "joi" ;
import {mongoose} from "mongoose" ;


enum PAYMENTMETHODS {
   CASH=1,
   TRANSFER
}

enum FREQUENCY {
   MONTHLY=1, 
   QUARTERLY,
   HALFYEARLY,
   YEARLY,
   OTHER
}

const Customer = mongoose.model('Customer', new mongoose.Schema({ 
  companyname: {
    type: String,   
    required: true,
    minlength: 5,
    maxlength: 50
  },
  address: {
     type: String,
     required: true,
     minlength: 5,
     maxlength: 255
  },
  taxnumber: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20
  },
  postaddress: {
    type: String,
    required: false
  },
  contact: {
    type: new mongoose.Schema( {
        name: {
          type: String,
          required: true,
          minlength: 5,
          maxlength:50
        },
        phone: {
          type: String,
          required:true,
          minlength:5,
          maxlength:30
        }, 
        email: {
          type: String,
          required: false
        }
    }),
    required: true
  },
  paymentmethod: {
     type: PAYMENTMETHODS,
     required: true
  },
  bankaccount: {
    type:String,
    required:false
  },
  frequency: {
    type: FREQUENCY,
    required: true
  }
}));

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(customer, schema);
}

 
