const {gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID 
    email:String
    username:String
    password:String
    postcode:String
    phone:String
    mytools:[Tool]
   }

   type Tool{
    _id: ID
    name:String
    category:String
    description:String
    status:Boolean
    dayprice:Int
    hourprice:Int
    duerent:String
    rent:[User]
    }

  
      type Auth {
        token: ID!
        user: User
      }

  type Query {
    users: [User]
    user(userId: ID!): User
    tool(toolId:ID!):Tool
    me: User
  }
        


     
  
     type Mutation{
      addUser(username:String!,email:String,password:String!,postcode:String!,phone:String!):Auth
      login(email:String!,password:String!):Auth
      addTool(name:String,category:String!,description:String!,dayprice:Int!,hourprice:Int!):User
      removeTool(toolId:ID!):User
      
     
    }


`;
module.exports = typeDefs;




  

  








