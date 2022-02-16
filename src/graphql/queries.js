import {gql} from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query repositories($orderBy: AllRepositoriesOrderBy
    ,$orderDirection: OrderDirection
    ,$searchKeyword:String,$after:String,$first:Int) {
    repositories(orderBy:$orderBy,orderDirection:$orderDirection
      ,searchKeyword:$searchKeyword,after:$after,first:$first) {
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
      pageInfo {
        hasNextPage,
        startCursor,
        endCursor
      }
    }
  }
`
/*
export const ME = gql`
  query me($includeReviews:Boolean = false){
    me {
      id,
      username,
      reviews @include(if:$includeReviews) {
        edges {
          node {
            id
            repository {
              fullName
            }
            text
            rating
            createdAt
          }
        }
      }
    }
  }
`
*/

export const ME = gql`
  query me($includeReviews:Boolean = false,$first:Int,$after:String){
    me {
      id,
      username,
      reviews(first:$first,after:$after) @include(if:$includeReviews){
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
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
            repository {
              fullName
            }
          }
        }
      }
    }
  }
`

export const REPOSITORY = gql`
  query repository($repositoryId:ID!,$first:Int,$after:String) {
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
      reviews(first:$first,after:$after) {
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
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

