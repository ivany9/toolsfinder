const {gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email:String
    password:String
    postcode:String
    phone:String
    mytools:
  
  }

  type Query {
    users: [User]
    
  }
`
module.exports = typeDefs;






// type Mutation {
//   addProfile(name: String!): Profile
//   addSkill(profileId: ID!, skill: String!): Profile
//   removeProfile(profileId: ID!): Profile
//   removeSkill(profileId: ID!, skill: String!): Profile
// }

