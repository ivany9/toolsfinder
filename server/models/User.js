const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  
  postcode:{
    type:String, 
    required: true,
  
  },

  phone: {
    type: String,
    required: true
  },

  mytools:[
   

    
    {
      type: String,
      trim: true,

    }
  ]

   


    
  });



const User = model('User',userSchema);

module.exports = User;
