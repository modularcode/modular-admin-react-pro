import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

// import { Theme } from '_theme'

import PageContainer from '../../_common/PageContainer'
import PageToolbar from '../../_common/PageToolbar'

const Orders = () => {
  const PageTitle = 'Orders'

  const PageActions = (
    <Button variant="contained" href="#contained-buttons">
      Link
    </Button>
  )

  return (
    <PageContainer>
      <PageToolbar title={PageTitle} actions={PageActions}></PageToolbar>
    </PageContainer>
  )
}

export default Orders
