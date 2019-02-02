import { gql } from "apollo-boost";

export const signIn = gql `
    mutation ($email: String!, $password: String!){
      signIn(email: $email, password: $password){
        token
      }
  }
`;