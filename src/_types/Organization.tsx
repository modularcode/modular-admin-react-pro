import User from './User'
import OrganizationToUser from './OrganizationToUser'

export type OrganizationId = number | string
export interface OrganizationPlan {
  id: number | string
  name: string
  features?: {}
}

export default interface Organization {
  id: OrganizationId
  name: string
  username?: string | null
  plan: OrganizationPlan
  users?: User[]
  organizationToUsers?: OrganizationToUser[]
}
