import { useDispatch, useSelector } from 'react-redux'
import { RootState, RootDispatch } from '_state'

import dashboard, { AppStateData } from './appModel' //AppState

export function useAppState() {
  return useSelector((state: RootState) => state.dashboard)
}

export function useAppStateData(): AppStateData {
  const { data } = useAppState()

  return data
}

export function useAppStateMethods() {
  const dispatch = useDispatch<RootDispatch>()
  return dispatch.dashboard
}

export default dashboard
