import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Dashboard from './Dashboard'

// Before showing the dashboard we need to be sure that the
// User data is propperly requested
const DashboardContainer: React.FC = props => {
  return <Dashboard />

  // return <LinearProgress />
}

export default DashboardContainer
