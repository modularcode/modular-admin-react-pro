import instance from './client'
import organizations from './organizations'
import users from './users'

const init = () => {
  return instance
}

export default { instance, organizations, users, init }
export { init, instance, organizations, users }
