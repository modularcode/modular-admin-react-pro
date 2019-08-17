import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import Features from './Features'
import Docs from './Docs'
import Supporters from './Supporters'
import Discuss from './Discuss'

export interface DemoProps extends RouteComponentProps {}

const Demo: React.FC<DemoProps> = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/features`} component={Features} />
      <Route path={`${match.url}/docs`} component={Docs} />
      <Route path={`${match.url}/supporters`} component={Supporters} />
      <Route path={`${match.url}/discuss`} component={Discuss} />
    </Switch>
  )
}

export default Demo
