const db = require('../config/connection');
const { Tool,User}=require('../models');

const userData=require('./userData.json');
const toolData=require('./ToolData.json');


db.once('open',async()=>{


    
  await User.deleteMany({}); 
  await Tool.deleteMany({});
   

  // await User.create(userData);

  //  for(let i=0;i<toolData.length;i++)
  //  {
  //     const {_id,name}=await Tool.create(toolData[i])
  //     const user=await User.findOneAndUpdate(
  //      {




  //      }
      


  //     )


  //  }

   const users=await User.insertMany(userData); 
   const tools=await Tool.insertMany(toolData);

  
  



  console.log('all done!');
  process.exit(0);
 



  




  });