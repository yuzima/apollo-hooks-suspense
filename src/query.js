import gql from "graphql-tag"
import { ApolloClient } from "apollo-client"
import { useQuery, useLazyQuery } from "@apollo/react-hooks"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: "http://localhost:9000/.netlify/functions/graphql"
})

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: "react-web-client",
  version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    }
  }
})

const GET_USER = gql`
  query randomUser {
    randomUser {
      name {
        title
        first
        last
      }
      gender
      email
    }
  }
`

export const useGetUser = () => {
  return useQuery(GET_USER, { client })
}

export const useLazyGetUser = () => {
  return useLazyQuery(GET_USER, { client })
}
