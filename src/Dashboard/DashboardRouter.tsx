import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Import application modules
import Sales from './Sales'
import Content from './Content'
import Admin from './Admin'

// Import core modules
import Profile from './Profile'
import Organization from './Organization'
import NotFound from './NotFound'

// Theme demo module
import Demo from './Demo'

const DashboardRouter = () => {
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

export default DashboardRouter
