import { createModel, RematchDispatch } from '@rematch/core'
import User from '_types/User'
import usersService from '_api/rest/usersService'

export interface DashboardState {
  loading: boolean
  error: any
  user: User
}

const model = createModel({
  state: null,
  reducers: {
    setUser: (state: DashboardState, payload: User): DashboardState => ({
      ...state,
      user: payload,
    }),
  },
  effects: (dispatch: RematchDispatch) => ({
    async request() {
      const currentUser = await usersService.getProfile()
      dispatch.user.set(currentUser)
    },
  }),
})

export default model
