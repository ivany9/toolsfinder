const { AuthenticationError } = require('apollo-server-express');
const { User, Tool } = require('../models');
const { Tools }= require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
   
     tools:async()=>{
      return await Tool.find({}).populate('rent');        
     
   },
   

    users:async()=>{
       return await User.find({}).populate('mytools');        
      
    } ,

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('mytools');
    },

    tool: async (parent, { toolId }) => {
      return Tool.findOne({ _id: toolId }).populate('rent');
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password,postcode,phone}) => {
      const user = await User.create({ username, email, password,postcode,phone });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    }, 
    
    //addUser test
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    addUsert: async (parent, { username, email, password,postcode,phone})=>{
        return await User.create({username, email, password,postcode,phone})  
     
    },
     addToolt: async (parent,{userId,name,category,description,dayprice,hourprice})=>{
       const tool=await Tool.create({name,category,description,dayprice,hourprice})
       return User.findOneAndUpdate(
         {_id:userId},
         {
           $addToSet:{mytools:tool._id}
         },
         
       );

        },

     rentoolt: async(parent,{toolId,username})=>{
       const user=await User.findOne({username});
       console.log(username);
        return Tool.findOneAndUpdate(
           {_id:toolId},
           {
             $addToSet:{rent:user._id}
            },
            {
              new: true,
              runValidators: true,
              
            }
        )
          },
      updatedayprice:async(parent,{toolId,dayprice})=>{
 
         return Tool.findOneAndUpdate({_id:toolId},{dayprice})
         },
   
         updatehourprice:async(parent,{toolId,hourprice})=>{
 
          return Tool.findOneAndUpdate({_id:toolId},{hourprice})
          },

          updateStatus:async(parent,{toolId,status})=>{
  
          return Tool.findOneAndUpdate({_id:toolId},{status})
           },

           adddueRent:async(parent,{toolId,duerent})=>{
              console.log(duerent);
            return Tool.findOneAndUpdate({_id:toolId},{duerent})
             },

    
       removeTool: async (parent, { toolId }) => {
        return Tool.findOneAndDelete({ _id: toolId });

       }, 

       removeRent: async(parent,{toolId})=>{
        console.log(toolId); 
        return Tool.findOneAndUpdate({_id:toolId},{rent:null})
       }   
        

        
    
             

       



    

    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  }

}







module.exports = resolvers;
