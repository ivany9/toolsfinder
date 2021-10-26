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
       return tool;
        },

     Rentoolt: async(parent,{toolId,username})=>{
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
          }
             

       



    

    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  }

}


  // addTool: async (parent, { userId, name, category,description,status,dayprice,hourprice }, context) => {
  //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
  //   if (context.user) {
    
  //     return User.findOneAndUpdate(
  //       { _id: userId },
  //       {
  //         $addToSet: { mytools: name, category,description,status,dayprice,hourprice  },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //   }
  //   // If user attempts to execute this mutation and isn't logged in, throw an error
  //   throw new AuthenticationError('You need to be logged in!');
  // }, 
    







module.exports = resolvers;
