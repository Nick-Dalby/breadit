import { gql } from '@apollo/client'

export const ADD_POST = gql`
  mutation MyMutation(
    $body: String!
    $title: String!
    $username: String!
    $image: String!
    $subbread_id: ID!
  ) {
    insertPost(
      body: $body
      title: $title
      username: $username
      image: $image
      subbread_id: $subbread_id
    ) {
      body
      created_at
      id
      image
      subbread_id
      title
      username
    }
  }
`

export const ADD_SUBBREAD = gql`
  mutation MyMutation($filling: String!) {
    insertSubbread(filling: $filling) {
      id
      filling
      created_at
    }
  }
`
export const ADD_COMMENT = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComment(post_id: $post_id, username: $username, text: $text) {
      created_at
      id
      post_id
      text
      username
    }
  }
`
