const { AuthenticationError } = require('apollo-server-express');
const { User, Tool } = require('../models');
const { Tools }= require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

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
    
    addTool: async (parent, { userId, name, category,description,status,dayprice,hourprice }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
      
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { mytools: name, category,description,status,dayprice,hourprice  },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    }, 

    // removeSkill: async (parent, { skill }, context) => {
    //   if (context.user) {
    //     return Profile.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { skills: skill } },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },

 
  }}



    

//     user: async (parent, { userId }) => {
//       return User.findOne({ _id: userId });
//     },
//   },

//   Mutation: {
//     addProfile: async (parent, { name }) => {
//       return Profile.create({ name });
//     },
//     addSkill: async (parent, { profileId, skill }) => {
//       return Profile.findOneAndUpdate(
//         { _id: profileId },
//         {
//           $addToSet: { skills: skill },
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//     },
//     removeProfile: async (parent, { profileId }) => {
//       return Profile.findOneAndDelete({ _id: profileId });
//     },
//     removeSkill: async (parent, { profileId, skill }) => {
//       return Profile.findOneAndUpdate(
//         { _id: profileId },
//         { $pull: { skills: skill } },
//         { new: true }
//       );
//     },
//   },
// };

module.exports = resolvers;
