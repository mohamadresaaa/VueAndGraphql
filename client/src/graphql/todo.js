import { gql } from "apollo-boost";

export const GET_TODOS = gql `
    query {
        getTodos {
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
    mutation ($content: String!, $status: Boolean!, $user: ID!){
        addTodo(content: $content, status: $status, user: $user){
            content
            status
            createdAt
            user {
                _id
            }
        }
    }
`;