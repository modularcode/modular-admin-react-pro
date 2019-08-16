import { createModel } from '@rematch/core' // RematchDispatch
import User from '_types/User'
import users from '_api/users'

export interface AppStateStatus {
  loading?: boolean
  error?: Error
}

export interface AppStateData {
  user?: User
}
export interface AppState extends AppStateStatus {
  data: AppStateData
}

const initialState: AppState = {
  loading: true,
  error: undefined,
  data: {},
}

const model = createModel({
  state: initialState,
  reducers: {
    setStatus: (
      state: AppState,
      payload: { loading?: boolean; error?: any },
    ): AppState => ({
      ...state,
      ...payload,
    }),
    setData: (state: AppState, payload: AppStateData): AppState => ({
      ...state,
      data: {
        ...state.data,
        ...payload,
      },
    }),
  },
  // dispatch: RematchDispatch
  effects: () => ({
    // payload, rootState
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
