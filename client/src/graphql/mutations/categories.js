import { gql } from "apollo-boost";

export const GET_CATEGORIES = gql `
    query {
        getCategories {
            title
            url
        }
    }
`;

export const ADD_CATEGORY = gql `
    mutation ($title: String!, $url: String!){
        addCategory(title: $title, url: $url){
            title
            url
        }
    }
`;