import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import DashboardLayout from '_layouts/DashboardLayout'
import Overview from './Overview'

export interface SalesProps extends RouteComponentProps {}

const Sales = ({ match }: SalesProps) => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${match.url}/dashboard`} component={Overview} />
      </Switch>
    </DashboardLayout>
  )
}

export default Sales
