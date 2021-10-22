//const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
//const { Tools }= require('../models');
//const { signToken } = require('../seeds/utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },











    

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
  }
};
module.exports = resolvers;
