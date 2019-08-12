import { useDispatch, useSelector } from 'react-redux'
import { RootState, RootDispatch } from '_store'

import dashboard, { DashboardState, DashboardStateData } from './dashboard'

export function useDashboardState() {
  return useSelector((state: RootState) => state.dashboard)
}

export function useDashboardData(): DashboardStateData {
  const { data } = useDashboardState()

  return data
}

export function useDashboardEffects() {
  const dispatch = useDispatch<RootDispatch>()
  return dispatch.dashboard
}

export default dashboard
