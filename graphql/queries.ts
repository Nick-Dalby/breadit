import { gql } from '@apollo/client'

export const GET_SUBBREAD_BY_FILLING = gql`
  query MyQuery($filling: String!) {
    getSubbreadByFilling(filling: $filling) {
      created_at
      filling
      id
    }
  }
`

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      body
      created_at
      id
      image
      title
      subbread_id
      username
      comments {
        created_at
        id
        post_id
        text
        username
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      subbread {
        created_at
        filling
        id
      }
    }
  }
`

export const GET_ALL_POSTS_BY_FILLING = gql`
  query MyQuery($filling: String!) {
    getPostListByFilling(filling: $filling) {
      body
      created_at
      id
      image
      title
      subbread_id
      username
      comments {
        created_at
        id
        post_id
        text
        username
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      subbread {
        created_at
        filling
        id
      }
    }
  }
`
