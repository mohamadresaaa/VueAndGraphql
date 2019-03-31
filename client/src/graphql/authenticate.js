import {
  gql
} from "apollo-boost";

export const SIGN_UP = gql `
  mutation ($username: String!, $email: String!, $password: String!){
    signUp(username: $username, email: $email, password: $password){
      message
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

export const TWO_FACTOR_AUTHENTICATE = gql `
  mutation ($code: String!){
    twoFactorAuthenticate(code: $code){
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

export const RESET_PASSWORD = gql `
  mutation($newPassword: String!, $activeCode: String!) {
    resetPassword(newPassword: $newPassword, activeCode: $activeCode) {
      message
    }
  } 
`;