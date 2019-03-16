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
    mutation ($title: String!, $content: String!, $userId: ID!){
        addNote(title: $title, content: $content, userId: $userId){
            _id
            title
            content
            createdAt
            user {
                _id
            }
        }
    }
`;

export const UPDATE_NOTE = gql`
    mutation ($noteId: ID!, $userId: ID!, $title: String!, $content: String!){
        updateNote(noteId: $noteId, userId: $userId, title: $title, content: $content){
            _id
            title
            content
            createdAt
            user {
                _id
            }
        }
    }
`;