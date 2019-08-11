import ApolloClient from 'apollo-boost'
// import config from './config'

export interface ApiApolloInitOptions {
  useSampleData?: boolean
}

export default {
  init({ useSampleData }: ApiApolloInitOptions) {
    const client = new ApolloClient({
      uri: 'https://48p1r2roz4.sse.codesandbox.io',
    })

    return client
  },
}
