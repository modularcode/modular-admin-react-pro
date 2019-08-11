import instance from './apiService'
import accounts from './accountsService'
import users from './usersService'

export interface ApiRestInitOptions {
  useSampleData?: boolean
}

const init = ({ useSampleData }: ApiRestInitOptions) => {
  // Respond with a sample data
  if (useSampleData) {
    console.log('should mock rest api!')
  }

  return instance
}

export default { instance, accounts, users, init }
export { init, instance, accounts, users }
