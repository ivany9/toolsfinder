const {gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email:String
    password:String
    postcode:String
    phone:String
    tools:
    toolsrented:
    skills: [String]!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
