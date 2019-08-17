import { EntityId } from '_types/Entity'

export type CustomerId = EntityId

export default interface Customer {
  id?: CustomerId
  name?: string
  email?: string
  details?: object
}
