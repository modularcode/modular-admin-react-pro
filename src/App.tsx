import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { HashRouter, Route, RouteProps, Redirect } from 'react-router-dom' // HashRouter
import CssBaseline from '@material-ui/core/CssBaseline'

import authService from './_services/authService'
import theme from './_theme/index'

import Auth from './Auth/Auth'
import Dashboard from './Dashboard/Dashboard'

authService.init({
  useDemoToken: true,
})

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/" component={Dashboard} />
        </HashRouter>
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
