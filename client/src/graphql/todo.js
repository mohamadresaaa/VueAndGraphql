import { gql } from "apollo-boost";

export const GET_TODOS = gql `
    query {
        getTodos {
            _id
            text
            status
            createdAt
            user {
                _id
            }
        }
    }
`;

export const ADD_TODO = gql `
    mutation ($text: String!, $status: Boolean!, $user: ID!){
        addTodo(text: $text, status: $status, user: $user){
            text
            status
            user {
                _id
            }
        }
    }
`;