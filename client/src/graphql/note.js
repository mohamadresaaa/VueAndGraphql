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

export const ADD_NOTE = gql `
    mutation ($title: String!, $content: String!, $user: ID!){
        addNote(title: $title, content: $content, user: $user){
            _id
            title
            content
            createdAt
            user {
                _id
            }
        }
    }
`