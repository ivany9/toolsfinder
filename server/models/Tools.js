const { Schema, model } = require('mongoose');

const toolsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "name is Required"
  },

  category: {
    type: String,
    required: true,
    unique: true,
    
  },
    
   description:{
    type:String, 
    required: true,
  
  },
  
  date: {
    type: Date,
    default: Date.now
  },

  status:{
    type:Boolean
   
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

 
  })



const Tools = model('Tools',toolsSchema);

module.exports = Tools;
