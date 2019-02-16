import { gql } from "apollo-boost";

export const SIGN_UP = gql `
  mutation ($username: String!, $email: String!, $password: String!){
    signUp(username: $username, email: $email, password: $password){
      username
      email
      joinDate
      avatar
    }
  }
`;

export const SIGN_IN = gql `
  mutation ($email: String!, $password: String!){
    signIn(email: $email, password: $password){
      token
    }
  }
`;

export const FORGOT_PASSWORD = gql `
  mutation ($email: String!){
    forgotPassword(email: $email){
      message
    }
  }
`;