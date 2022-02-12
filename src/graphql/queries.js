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

