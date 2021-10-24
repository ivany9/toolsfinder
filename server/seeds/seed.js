const db = require('../config/connection');
const { Tool,User}=require('../models');

const userData=require('./userData.json');
const toolData=require('./ToolData.json');


db.once('open',async()=>{


    
  await User.deleteMany({}); 
  await Tool.deleteMany({});
   
  const tools= await Tool.insertMany(toolData);
  const users= await User.insertMany(userData);


  for(newUser of users){


    const tempTool = tools[Math.floor(Math.random() * tools.length)];
    tempTool.users.push(newUser._id);
    await tempTool.save();




  }



    

});

  console.log('all done!');
  process.exit(0);
 



  



