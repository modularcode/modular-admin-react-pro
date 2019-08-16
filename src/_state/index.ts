import { init, RematchRootState, RematchDispatch } from '@rematch/core'
import immerPlugin from '@rematch/immer'

import dashboard from '_state/appState'

const immer = immerPlugin()

const models = {
  dashboard,
}

export const store = init({
  models,
  plugins: [immer],
})

export type Store = typeof store
export type RootState = RematchRootState<typeof models>
export type RootDispatch = RematchDispatch<typeof models>

export default store
