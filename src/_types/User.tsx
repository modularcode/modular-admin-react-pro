export type UserId = number | string

export default interface User {
  id: UserId
  name?: string
  surname?: string
  username?: string
  email?: string
  password?: string
}
