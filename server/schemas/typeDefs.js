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
    rent:User
    }

  
      type Auth {
        token: ID!
        user: User
      }

  type Query {
    users: [User]
    user(userId: ID!): User
    toolId(toolId:ID!):Tool
    tools:[Tool]
    tool(toolId:ID!):Tool
    me: User
   
  }
        


     
  
     type Mutation{
      addUser(username:String!,email:String,password:String!,postcode:String!,phone:String!):Auth
      addUsert(username:String!,email:String,password:String!,postcode:String!,phone:String!):User
      login(email:String!,password:String!):Auth
      addToolt(userId:ID!,name:String!,category:String!,description:String!,dayprice:Int!,hourprice:Int!):Tool
      rentoolt(toolId:ID!,username:String):Tool
      removeTool(toolId:ID!):Tool
      updatedayprice(toolId:ID!,dayprice:Int):Tool
      updatehourprice(toolId:ID!,hourprice:Int):Tool
      updateStatus(toolId:ID!,status:Boolean):Tool
      adddueRent(toolId:ID!,duerent:String):Tool
      removeRent(toolId:ID!):Tool
  
    }



`;
module.exports = typeDefs;




  

  








