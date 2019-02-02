import { gql } from "apollo-boost";

export const getCategories = gql `
    query {
        getCategories {
            title
            url
        }
    }
`;