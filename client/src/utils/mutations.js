import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!,$postcode:String!,$phone:String!) {
    addUser(username: $username, email: $email, password: $password,postcode:$postcode,phone:$phone) {
      token
      user{
      _id
      username
       }
      }
    }
  
`;

export const ADD_TOOL = gql`
  mutation addToolt($userId: ID!,$name:String!,$category:String!,$description:String!,$dayprice:Int!,$hourprice:Int!,$image:String!)  {
    addToolt(userId: $userId,name:$name,category:$category,description:$description,dayprice:$dayprice,hourprice:$hourprice,image:$image) {
      _id
      name
      
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_TOOL = gql`
  mutation removeTool($toolId: ID!) {
    removeTool(toolId: $toolId) {
      _id
      name
      
    }
  }
`;

export const RENT_TOOL = gql`
  mutation rentoolt($toolId: ID!,$username:String!) {
    rentoolt(toolId: $toolId,username:$username) {
      _id
      name
      rent{
       username

      }
      
    }
  }
`;

export const UPDATE_DAYPRICE = gql`
  mutation updatedayprice($toolId: ID!,$dayprice:Int!) {
    updatedayprice(toolId: $toolId,dayprice:$dayprice) {
      
      dayprice
      name
      
    }
  }
`;


export const UPDATE_HOURPRICE = gql`
  mutation updatehourprice($toolId: ID!,$hourprice:Int!) {
    updatehourprice(toolId: $toolId,hourprice:$hourprice) {
      
      hourprice
      name
      
    }
  }
`;

export const UPDATE_STATUS = gql`
  mutation updateStatus($toolId: ID!,$status:Boolean!) {
    updateStatus(toolId: $toolId,status:$status) {
      
      _id
      name
      status
      
    }
  }
`;

export const UPDATE_DUERENT = gql`
  mutation adddueRent($toolId: ID!,$duerent:String!) {
    adddueRent(toolId: $toolId,duerent:$duerent) {
      
      duerent
      _id
      
    }
  }
`;

export const UPLOAD_FILE = gql`
mutation UploadFile($file: Upload!) {
  UploadFile(file:$file){
      
      url
    }
  }
`;

