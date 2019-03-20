import { gql } from "apollo-boost";

export const GET_CATEGORIES = gql `
    query {
        getCategories {
            _id
            title
            url
        }
    }
`;

export const ADD_CATEGORY = gql `
    mutation ($title: String!, $url: String!){
        addCategory(title: $title, url: $url){
            _id
            title
            url
        }
    }
`;

export const UPDATE_CATEGORY = gql`
    mutation ($categoryId: ID!, $title: String!, $url: String!){
        updateCategory(categoryId: $categoryId, title: $title, url: $url){
            _id
            title
            url
        }
    }
`;

export const DELETE_CATEGORY = gql`
    mutation ($categoryId: ID!){
        deleteCategory(categoryId: $categoryId){
            _id
            title
            url
        }
    }
`;