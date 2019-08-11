import React from 'react'
import { HashRouter, BrowserRouter, Route, RouteProps, Redirect } from 'react-router-dom' //

import config from './config'
import authService from './_services/authService'

import Auth from './Auth/Auth'
import { DashboardContainer } from './Dashboard'

// Use different router type depending on configuration
const AppRouterComponent: React.ComponentType<any> =
  config.navigationType === 'history' ? BrowserRouter : HashRouter

const AppRouter: React.FC = () => (
  <AppRouterComponent>
    <Route path="/auth" component={Auth} />
    <PrivateRoute path="/" component={DashboardContainer} />
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
