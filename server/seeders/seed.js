const db = require('../config/connection');
const { Tool,User}=require('../models');

const userData=require('./userData.json');
const toolData=require('./ToolData.json');


db.once('open',async()=>{

  await User.deleteMany({}); 
  await Tool.deleteMany({});
   



   const users=await User.insertMany(userData); 
   const users=await User.insertMany(userData);

})