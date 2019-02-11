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