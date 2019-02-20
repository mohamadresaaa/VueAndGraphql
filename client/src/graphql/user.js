import { gql } from "apollo-boost";

export const GET_CURRENT_USER = gql `
    query {
        getCurrentUser {
            _id
            name
            username
            email
            role
            avatar
            joinDate
        }
    }
`;

export const CHANGE_PASSWORD = gql `
    mutation ($oldPassword: String!, $newPassword: String!, $userId: ID!){
        changePassword(oldPassword: $oldPassword, newPassword: $newPassword, userId: $userId){
            message
        }
    }
`;