import { gql } from "apollo-boost";

export const GET_CATEGORIES = gql `
    query {
        getCategories {
            title
            url
        }
    }
`;