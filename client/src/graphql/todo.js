import { gql } from "apollo-boost";

export const GET_TODOS = gql `
    query($userId: ID!) {
        getTodos(userId: $userId) {
            _id
            content
            status
            createdAt
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
        }
    }
`;

export const DONE_TODO = gql`
    mutation ($todoId: ID!, $userId: ID!) {
        doneTodo (todoId: $todoId, userId: $userId) {
            _id
            content
            status
            createdAt
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
        }
    }
`;

export const DELETE_TODO = gql`
    mutation ($todoId: ID!, $userId: ID!){
        deleteTodo(todoId: $todoId, userId: $userId){
            _id
        }
    }
`;