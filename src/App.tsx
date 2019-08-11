import React from 'react'
import { Provider } from 'react-redux'
import { gql } from 'apollo-boost'
import { ThemeProvider } from '@material-ui/styles'
import { HashRouter, BrowserRouter, Route, RouteProps, Redirect } from 'react-router-dom' //
import { ApolloProvider } from '@apollo/react-hooks'

import ApolloClient from 'apollo-boost'
import CssBaseline from '@material-ui/core/CssBaseline'

import config from './config'
import store from './_storeRedux'
import api from './_apiREST'
import authService from './_services/authService'
import theme from './_theme'

import Auth from './Auth/Auth'
import { DashboardContainer } from './Dashboard'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
})

api.init()

// Init the authentication service
authService.init({
  useDemoToken: true,
})

// Use different router type depending on configuration
const AppRouter: React.ComponentType<any> =
  config.navigationType === 'history' ? BrowserRouter : HashRouter

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AppRouter>
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/" component={DashboardContainer} />
      </AppRouter>
    </div>
  )
}

// See https://reacttraining.com/react-router/web/example/auth-workflow
const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: RouteProps) => {
  if (!Component) {
    return <Route {...rest} />
  }

  return (
    <Route
      {...rest}
      render={props =>
        authService.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
            }}
          />
        )
      }
    />
  )
}

export default () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </ThemeProvider>
)
