import Entity, { EntityId } from '_types/Entity'
import { UserId } from '_types/User'
import { OrganizationId } from '_types/Organization'

export type EntitiyOwnedId = EntityId

// The entity may be owned by an organization or an individual user
export default interface EntityOwned extends Entity {
  id?: EntityId
  ownerUserId?: UserId
  owenrOrganizationId?: OrganizationId
}
