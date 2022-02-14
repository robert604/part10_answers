import {gql} from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          stargazersCount,
          forksCount,
          ownerAvatarUrl,
          fullName,
          description,
          language,
          reviewCount,
          ratingAverage,
          createdAt,
          id,
          name,
          ownerName,

        }
      }
    }
  }
`

export const ME = gql`
  query {
    me {
      id,
      username,
    }
  }
`

export const REPOSITORY = gql`
  query repository($repositoryId:ID!) {
    repository(id:$repositoryId) {
      stargazersCount,
      forksCount,
      ownerAvatarUrl,
      fullName,
      description,
      language,
      reviewCount,
      ratingAverage,
      createdAt,
      id,
      name,
      ownerName,
      url,
      reviews {
        edges {
          node {
            id,
            text,
            rating,
            createdAt,
            user {
              id,
              username
            }
          }
        }
      }
    }
  }
`

