import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import { useDashboardData } from './DashboardData'

import Dashboard from './Dashboard'

// Before showing the dashboard we need to be sure that the
// User data is propperly requested
const DashboardContainer: React.FC = props => {
  const state = useDashboardData()

  // if (loading) return <LinearProgress />
  // if (error) {
  //   console.log(error)
  //   return <p>Error :(</p>
  // }
  return <Dashboard />
}

export default DashboardContainer
