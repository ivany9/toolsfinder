const {gql,ApolloServer } = require('apollo-server-express');
const {GraphQLUpload}= require('graphql-upload');


const typeDefs = gql`

scalar FUpload 


  type User {
    _id: ID 
    email:String
    username:String
    password:String
    postcode:String
    phone:String
    mytools:[Tool]
    myrents:[Tool]
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
    image:String
    }
   
    type File {
     url: String!
    }

  
      type Auth {
        token: ID!
        user: User
      }

  type Query {
    users: [User]
    user(userId: ID!): User
    tools:[Tool]
    tool(toolId:ID!):Tool
    me: User
    mytools(userId:ID!):User
    myrent(userId:ID!):User
    location(postcode:String!):[User]
    category(category:String):[Tool]
    myrentt(userId:ID!):[Tool]
    toolessmy(userId:ID!):[Tool]
  }
        


     
  
     type Mutation{
      addUser(username:String!,email:String,password:String!,postcode:String!,phone:String!):Auth
      addUsert(username:String!,email:String,password:String!,postcode:String!,phone:String!):User
      login(email:String!,password:String!):Auth
      addToolt(userId:ID!,name:String!,category:String!,description:String!,dayprice:Int!,hourprice:Int!,image:String):Tool
      rentoolt(toolId:ID!,username:String):Tool
      removeTool(toolId:ID!):Tool
      updatedayprice(toolId:ID!,dayprice:Int):Tool
      updatehourprice(toolId:ID!,hourprice:Int):Tool
      updateStatus(toolId:ID!,status:Boolean):Tool
      adddueRent(toolId:ID!,duerent:String):Tool
      removeRent(toolId:ID!):Tool
      myrent(toolId:ID!,userId:ID!):User
      UploadFile(file: FUpload!): File!
      singleUpload(file: Upload!): File!
      rentoolp(toolId:ID!,userId:ID!):Tool
  
    }



`;
module.exports = typeDefs;




  

  








