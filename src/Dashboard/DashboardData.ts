import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState, RootDispatch } from '_store'

export function useDashboardData() {
  const state = useSelector((state: RootState) => state.dashboard)
  const dispatch = useDispatch<RootDispatch>()

  // Request user data
  useEffect(() => {
    dispatch.dashboard.request()
  }, [dispatch])

  return state
}

export default {}
