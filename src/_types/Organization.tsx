import User from './User'
import OrganizationToUser from './OrganizationToUser'

export type OrganizationId = number | string
export interface OrganizationPlan {
  id: number | string
  name: string
  features?: {}
}

export interface OrganizationSubmissionData {
  name: string
  username?: string
}

export default interface Organization extends OrganizationSubmissionData {
  id: OrganizationId
  plan: OrganizationPlan
  users?: User[]
  organizationToUsers?: OrganizationToUser[]
}
