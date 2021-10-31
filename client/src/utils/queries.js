import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      postcode
      mytools{
        _id
        name
        rent{
           username  
            }

      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      phone
      mytools{
        _id
        name
        category
        description
        status
        dayprice
        hourprice
      }
      
    }
  }
`;

export const QUERY_TOOLS = gql`
  query allTools{
     tools {
      _id
      name
      category
      description
      status
      dayprice
      hourprice


    }
  }
`;

export const QUERY_SINGLE_TOOL = gql`
  query singleTool($tooId: ID!) {
    tool(toolId: $toolId) 
    {
      
      _id
      name
      rent{
        name
        _id

      }
      duerent
      
    }
  }
`;


export const QUERY_MYTOOLS = gql`
  query mytools($userId: ID!) {
    mytools(userId: $userId) {
      
      username
      
      mytools{
        _id
        name
        status
        rent{
         username
          phone
        
             }
        }
    }
  }

`;







export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      
    }
  }
`;
