import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'

import CssBaseline from '@material-ui/core/CssBaseline'

import config from './config'
import authService from './_services/authService'

import api from './_api'
import apiMocks from './_api/_mocks'

import store from './_store'
import theme from './_theme'

import AppRouter from './AppRouter'

// Init the API service
authService.init({
  useSampleData: config.useSampleData,
})

// Init rest API client
const apiClient = api.init()

if (config.useSampleData) {
  apiMocks.init(apiClient)
}

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
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
