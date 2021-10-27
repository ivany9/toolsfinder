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

      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      mytools{
        name
        _id
      }
      phone
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
    tool(toolId: $toolId) {
      
      _id
      rent{
        name
        _id

      }
      duerent
      
    }
  }
`;








export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      
    }
  }
`;
