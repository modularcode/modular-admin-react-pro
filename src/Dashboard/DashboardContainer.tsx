import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { RootState, RootDispatch } from '../_storeRedux'
import Dashboard from './Dashboard'

function useDashboardData() {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `)

  return { loading, error, data }
}

// Before showing the dashboard we need to be sure that the
// User data is propperly requested
const DashboardContainer: React.FC = props => {
  const { loading, error, data } = useDashboardData()

  // const user = useSelector((state: RootState) => state.user)
  // const dispatch = useDispatch<RootDispatch>()

  // // Request user data
  // useEffect(() => {
  //   dispatch.user.request()
  // })

  if (loading) return <LinearProgress />
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }: { currency: any; rate: any }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))

  // if (!user) {
  //   return <LinearProgress />
  // } else {
  //   return <Dashboard />
  // }
}

export default DashboardContainer
