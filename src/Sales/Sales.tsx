import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import SalesDashboard from './SalesDashboard'

export interface SalesProps extends RouteComponentProps {}

const Sales = ({ match }: SalesProps) => {
  return (
    <div>
      <Switch>
        <Route path={`${match.url}/dashboard`} component={SalesDashboard} />
      </Switch>
    </div>
  )
}

export default Sales
