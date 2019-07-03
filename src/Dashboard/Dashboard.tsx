import React from 'react'
// import PropTypes from 'prop-types'
import { Route, RouteComponentProps } from 'react-router-dom'

import styles from './Dashboard.module.scss'

import Main from './Main/Main'

interface DashboardProps extends RouteComponentProps {}

const Dashboard = ({ match }: DashboardProps) => {
  return (
    <div className={styles.Dashboard}>
      <Route path={`${match.url}/`} component={Main} />
    </div>
  )
}

export default Dashboard
