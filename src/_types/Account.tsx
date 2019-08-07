import { UserId } from './User'

export type AccountId = number | string

export default interface Account {
  id: AccountId
  name: string
  username: string
  plan: 'trial' | 'starter' | 'silver' | 'gold'
  ownerId: UserId
}
