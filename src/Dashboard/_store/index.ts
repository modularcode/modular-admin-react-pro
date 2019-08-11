import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState, RootDispatch } from '_store/redux'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export function useStore() {
  return useStoreApollo()
}

function useStoreApollo() {
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

function useStoreRedux() {
  const data = useSelector((state: RootState) => state.dashboard)
  const dispatch = useDispatch<RootDispatch>()

  // Request user data
  useEffect(() => {
    dispatch.dashboard.request()
  })

  return { data }
}

export default {}
