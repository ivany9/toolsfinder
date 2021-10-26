const { AuthenticationError } = require('apollo-server-express');
const { User, Tool } = require('../models');
const { Tools }= require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

  
    tools: async () => {
      return Tool.find();
    },

    tools:async()=>{
      return await Tool.find({}).populate('rent');        
     
   },
   

    users:async()=>{
       return await User.find({}).populate('mytools');        
      
    } ,

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
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
       //return tool;
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
    
       removeTool: async (parent, { toolId }) => {
        return Tool.findOneAndDelete({ _id: toolId });

       }, 

      //  updateStatus:async(parent,{toolId,description})=>{
 
      //   return Tool.findOneAndUpdate({_id:toolId},{description})
      //   },
  
             

       



    

    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  }

}







module.exports = resolvers;
