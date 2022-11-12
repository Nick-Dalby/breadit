import { gql } from '@apollo/client';

export const GET_SUBBREAD_BY_FILLING = gql`
  query MyQuery($filling: String!)   {
    getSubbreadByFilling(filling: $filling) {
      created_at
      filling
      id
    }
  }
`



