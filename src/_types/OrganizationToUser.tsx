import Organization, { OrganizationId } from './Organization'
import User, { UserId } from './User'

export type OrganizationUserRole = 'member' | 'admin' | 'owner'

export default interface OrganizationToUser {
  id: number
  organizationId: OrganizationId
  userId: UserId
  role: OrganizationUserRole
  organization?: Organization
  user?: User
}
