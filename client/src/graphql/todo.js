import { gql } from "apollo-boost";

export const GET_TODOS = gql `
    query($userId: ID!) {
        getTodos(userId: $userId) {
            _id
            content
            status
            createdAt
            user {
                _id
            }
        }
    }
`;

export const ADD_TODO = gql `
    mutation ($content: String!, $status: Boolean!, $userId: ID!){
        addTodo(content: $content, status: $status, userId: $userId){
            _id
            content
            status
            createdAt
            user {
                _id
            }
        }
    }
`;