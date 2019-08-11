import { createModel } from '@rematch/core' // RematchDispatch
import User from '_types/User'
import users from '_api/users'

export interface DashboardStateStatus {
  loading?: boolean
  error?: Error
}

export interface DashboardStateData {
  user?: User
}
export interface DashboardState extends DashboardStateStatus {
  data?: DashboardStateData
}

const model = createModel({
  state: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {
    setStatus: (
      state: DashboardState,
      payload: { loading?: boolean; error?: any },
    ): DashboardState => ({
      ...state,
      ...payload,
    }),
    setData: (state: DashboardState, payload: DashboardStateData): DashboardState => ({
      ...state,
      data: {
        ...state.data,
        ...payload,
      },
    }),
  },
  // dispatch: RematchDispatch
  effects: () => ({
    async request() {
      this.setStatus({
        loading: true,
        error: null,
      })

      try {
        const currentUser = await users.getProfile()

        this.setData({
          user: currentUser,
        })
      } catch (e) {
        this.setStatus({
          error: e,
        })
      }

      this.setStatus({
        loading: false,
      })
    },
  }),
})

export default model
