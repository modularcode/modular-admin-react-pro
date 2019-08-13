import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

import usersMocks from './usersMocks'
import organizationsMocks from './organizationsMocks'

const init = (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance, { delayResponse: 200 })

  usersMocks.init(mock)
  organizationsMocks.init(mock)
}

export default {
  init,
}
