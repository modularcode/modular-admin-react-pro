import React, { useEffect } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import { useDashboardState, useDashboardEffects } from './_state'

import Dashboard from './Dashboard'

// Before showing the dashboard we need to be sure that the
// User data is propperly requested
const DashboardContainer: React.FC = props => {
  const { loading, error } = useDashboardState()
  const effects = useDashboardEffects()

  useEffect(() => {
    effects.request()
  }, [effects])

  if (loading) return <LinearProgress />
  if (error) return <p>Error :(</p>

  return <Dashboard />
}

export default DashboardContainer
