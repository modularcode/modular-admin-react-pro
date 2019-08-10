import React from 'react'
import { Provider, connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { HashRouter, BrowserRouter, Route, RouteProps, Redirect } from 'react-router-dom' //
import CssBaseline from '@material-ui/core/CssBaseline'

import config from './config'
import store from './_store'
import api from './_api'
import authService from './_services/authService'
import theme from './_theme'

import Auth from './Auth/Auth'
import { DashboardContainer } from './Dashboard'

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
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter>
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/" component={DashboardContainer} />
          </AppRouter>
        </Provider>
      </ThemeProvider>
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

export default App
