import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import AppRoute from 'AppRoute'
import DashboardLayout from '_layouts/DashboardLayout'

import Features from './Features'
import Docs from './Docs'
import Supporters from './Supporters'
import Discuss from './Discuss'

export interface DemoProps extends RouteComponentProps {}

const Demo: React.FC<DemoProps> = ({ match }) => {
  return (
    <Switch>
      <AppRoute path={`${match.url}/features`} component={Features} />
      <AppRoute path={`${match.url}/docs`} component={Docs} />
      <AppRoute path={`${match.url}/supporters`} component={Supporters} />
      <AppRoute path={`${match.url}/discuss`} component={Discuss} />
    </Switch>
  )
}

export default Demo
