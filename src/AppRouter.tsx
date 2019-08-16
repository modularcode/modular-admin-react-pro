import React, { useEffect } from 'react'
import {
  HashRouter,
  BrowserRouter,
  Route,
  RouteProps,
  Redirect,
  Switch,
} from 'react-router-dom' //
import LinearProgress from '@material-ui/core/LinearProgress'

import config from './_config'
import authService from './_services/authService'
import { useAppState, useAppStateMethods } from './_state/appState'

// Import application modules
import Sales from './Sales'
import Content from './Content'
import Admin from './Administration'

// Import core modules
import Auth from './Auth/Auth'
import Profile from './Profile'
import Organization from './Organization'
import NotFound from './Misc/NotFound'

// Theme demo module
import Demo from './Demo'

const LoggedInRouter = () => {
  const { loading, error } = useAppState()
  const appStateMethods = useAppStateMethods()

  useEffect(() => {
    appStateMethods.request()
  }, [appStateMethods])

  if (loading) return <LinearProgress />
  if (error) return <p>Error :(</p>

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/sales/dashboard" />} />
      <Route path={`/sales`} component={Sales} />
      <Route path={`/content`} component={Content} />
      <Route path={`/admin`} component={Admin} />
      <Route path={`/profile`} component={Profile} />
      <Route path={`/account`} component={Organization} />
      <Route path={`/demo`} component={Demo} />
      <Route component={NotFound} />
    </Switch>
  )
}

// Use different router type depending on configuration
const AppRouterComponent: React.ComponentType<any> =
  config.navigationType === 'history' ? BrowserRouter : HashRouter

const AppRouter: React.FC = () => (
  <AppRouterComponent>
    <Route path="/auth" component={Auth} />
    <PrivateRoute path="/" component={LoggedInRouter} />
  </AppRouterComponent>
)

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

export default AppRouter
