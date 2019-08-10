import React from 'react'
// import clsx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import PageContainer from '../../_common/BasePageContainer'
import PageToolbar from '../../_common/BasePageToolbar'

// Submodules
import MainActions from './MainActions'
import MainOrders from './MainOrders'
import MainHistory from './MainHistory'

export default function Overview() {
  // const classes = useStyles()

  const PageTitle = 'Sales Dashboard'

  return (
    <PageContainer>
      <PageToolbar title={PageTitle} actionsComponent={MainActions}></PageToolbar>

      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <MainHistory />
        </Grid>
        {/* Recent Deposits */}
        {/* <Grid item xs={12} md={4} lg={4}>
          <Paper>
            <Deposits />
          </Paper>
        </Grid> */}
        {/* Recent Orders */}
        <Grid item xs={12}>
          <MainOrders />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

// const useStyles = makeStyles((theme: Theme) => ({
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
// }))
