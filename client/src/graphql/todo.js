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

export const UPDATE_TODO = gql`
    mutation ($todoId: ID!, $userId: ID!, $content: String!, $status: Boolean!) {
        updateTodo (todoId: $todoId, userId: $userId, content: $content, status: $status) {
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