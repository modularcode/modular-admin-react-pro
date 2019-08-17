import React from 'react'
// import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

// import DashboardLayout from '_layouts/DashboardLayout'
// import { withDashboardLayout } from '_layouts'
import PageContainer from '../../_common/PageContainer'
import Paper from '@material-ui/core/Paper'

import { Theme } from '_theme'

const Customers = () => {
  const classes = useStyles()

  return (
    <PageContainer>
      <Paper>Customers</Paper>
    </PageContainer>
  )
}

const useStyles = makeStyles((theme: Theme) => ({}))

export default Customers
