import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { ApolloProvider } from '@apollo/react-hooks'

import CssBaseline from '@material-ui/core/CssBaseline'

import config from './config'
import authService from './_services/authService'

import apiRest from './_api/rest'
import apiApollo from './_api/apollo'
import storeRedux from './_store/redux'
import theme from './_theme'

import AppRouter from './AppRouter'

// Init the authentication service
authService.init({
  useSampleData: config.useSampleData,
})

// Init rest API client
apiRest.init({
  useSampleData: config.useSampleData,
})

// Init apollo client
const apiApolloClient = apiApollo.init({
  useSampleData: config.useSampleData,
})

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AppRouter />
    </div>
  )
}

export default () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apiApolloClient}>
      <Provider store={storeRedux}>
        <App />
      </Provider>
    </ApolloProvider>
  </ThemeProvider>
)
