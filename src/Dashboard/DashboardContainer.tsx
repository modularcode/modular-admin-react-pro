import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import { useStore } from './_store'

import Dashboard from './Dashboard'

// Before showing the dashboard we need to be sure that the
// User data is propperly requested
const DashboardContainer: React.FC = props => {
  const { loading, error, data } = useStore()

  if (loading) return <LinearProgress />
  if (error) return <p>Error :(</p>

  return <Dashboard />
}

export default DashboardContainer
