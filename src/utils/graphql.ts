import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import gql from 'graphql-tag'
import {
  uniswapEthDpiLpTokenAddress,
  uniswapEthMviLpTokenAddress,
} from 'constants/ethContractAddresses'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
  }),
  cache: new InMemoryCache(),
})

export const DPI_ETH_UNISWAP_QUERY = gql`
  {
    pairs(where: { id: "${uniswapEthDpiLpTokenAddress}" }) {
      id
      reserveUSD
      totalSupply
    }
  }
`

export default client
