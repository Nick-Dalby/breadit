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
