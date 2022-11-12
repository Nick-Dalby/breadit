import { gql } from '@apollo/client';

export const GET_SUBBREAD_BT_FILLING = gql`
  query MyQuery($filling: String!)   {
    getSubbreadByFilling(filling: $filling) {
      created_at
      filling
      id
    }
  }
`



