import ApolloClient, { createNetworkInterface } from 'apollo-client'
import gql from 'graphql-tag'

let apolloClient

export default {
  init () {
    apolloClient = new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/cj2br221j6otv010557yjufzx'
      })
    })
  },
  get apollo () {
    return apolloClient
  },
  get gql () {
    return gql
  }
}
