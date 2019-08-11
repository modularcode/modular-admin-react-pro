import config from '../../config'

import instance from './apiService'
import accounts from './accountsService'
import users from './usersService'

const init = () => {
  // Respond with a sample data
  if (config.api.useSampleData) {
    console.log('should mock rest api!')

    // apiSampleData.init(instance)
  }
}

export default { instance, accounts, users, init }
export { init, instance, accounts, users }
