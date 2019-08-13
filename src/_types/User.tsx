import Organization from './Organization'
import OrganizationToUser from './OrganizationToUser'

export type UserId = number

// global user role across the system (useful for SAAS or if organizations arn't used)
// Each user can have only one global role
export type UserGlobalRole = 'admin' | 'support' | 'member'

export interface UserSubmissionData {
  firstName?: string
  lastName?: string
  displayName?: string
  username?: string | null
  email: string
  password?: string
  avatarUrl?: string
  globalRole?: UserGlobalRole
}

export default interface User extends UserSubmissionData {
  id: UserId
  organizations?: Organization[]
  userToOrganizations?: OrganizationToUser[]
}
