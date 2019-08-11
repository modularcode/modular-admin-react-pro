import { init, RematchRootState, RematchDispatch } from '@rematch/core'

import dashboard from 'Dashboard/_store/redux/dashboardStore'

const models = {
  dashboard,
}

export const store = init({
  models,
})

export type Store = typeof store
export type RootState = RematchRootState<typeof models>
export type RootDispatch = RematchDispatch<typeof models>

export default store
