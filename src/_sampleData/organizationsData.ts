import Organization from '_types/Organization'
import organizationsToUsersData from './organizationsToUsersData'

const organizationsDataById: { [key: number]: Organization } = {
  1: {
    id: 1,
    name: 'ModularCode',
    plan: {
      id: 'silver',
      name: 'Silver',
    },
    organizationToUsers: organizationsToUsersData.byOrganizationId[1],
  },
  2: {
    id: 2,
    name: 'Cool LLC',
    plan: {
      id: 'gold',
      name: 'Gold',
    },
    organizationToUsers: organizationsToUsersData.byOrganizationId[2],
  },
  3: {
    id: 3,
    name: 'Other LLC',
    plan: {
      id: 'trial',
      name: 'Trial',
    },
    organizationToUsers: organizationsToUsersData.byOrganizationId[3],
  },
}

const organizationsData = {
  byId: organizationsDataById,
}

export default organizationsData
