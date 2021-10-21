const { Schema, model } = require('mongoose');


const toolSchema = new Schema(
  {
  name: {
    type: String,
    trim: true,
    required: "name is Required"
  },

  category: { 
    type: String,
     
     
    
    },
 
    
   description:{
    type:String, 
    required: true,
  
  },
  
  date: {
    type: Date,
    default: Date.now
  },

  status: {
    type: Boolean,
    default: false
  },
 

    returndate:{
      type:Date,
      default:Date.now
   },
   

    dayprice:{
       type:Number,
       required: true,
   },


   hourprice:{
    type:Number,
    required: true,
   },

   rentedby:[

    {
      type: String,
      trim: true,
    }
   
  
   ]
    

   

 
  })



const Tool = model('Tool',toolSchema);

module.exports = Tool;
