import { gql } from "apollo-boost";

export const getAll = gql `
    query {
        getCategories {
            title
            url
        }
    }
`;