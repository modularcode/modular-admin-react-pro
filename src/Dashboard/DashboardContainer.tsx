import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress'

import { RootState, RootDispatch } from '../_store'
import Dashboard from './Dashboard'

// Before showing the dashboard we need to be sure that the
// User data is propperly requested
const DashboardContainer: React.FC = props => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<RootDispatch>()

  // Request user data
  useEffect(() => {
    dispatch.user.request()
  })

  if (!user) {
    return <LinearProgress />
  } else {
    return <Dashboard />
  }
}

export default DashboardContainer
