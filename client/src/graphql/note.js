import { gql } from "apollo-boost";

export const GET_NOTES = gql `
    query($userId: ID!) {
        getNotes(userId: $userId) {
            _id
            title
            content
            createdAt
        }
    }
`;