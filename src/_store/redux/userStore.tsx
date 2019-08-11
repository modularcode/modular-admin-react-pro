import { createModel, RematchDispatch } from '@rematch/core'
import User from '_types/User'
import usersService from '_api/rest/usersService'

export interface UserState extends User {}

const model = createModel({
  state: null,
  reducers: {
    set: (state: UserState, payload: User): UserState => payload,
  },
  effects: (dispatch: RematchDispatch) => ({
    async request() {
      const currentUser = await usersService.getProfile()

      // dispatch.user.set(currentUser)
      // this.set(currentUser)
      dispatch.user.set(currentUser)
    },
    // TODO: Optional args breaks TypeScript autocomplete (e.g. payload: number = 1)
    // async incrementAsync(payload: number) {
    //   await delay(500);
    //   this.increment(payload || 1);
    // },
  }),
})

export default model
