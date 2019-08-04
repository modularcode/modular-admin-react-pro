import React from 'react'
// import clsx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import PageContainer from '../_common/BasePageContainer'
import PageToolbar from '../_common/BasePageToolbar'

// Submodules
import MainActions from './MainActions'
import Deposits from './Deposits'
import Orders from './Orders'

export default function Overview() {
  // const classes = useStyles()

  const PageTitle = 'Dashboard'

  return (
    <PageContainer>
      <PageToolbar title={PageTitle} actionsComponent={MainActions}></PageToolbar>

      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Card>
            <CardContent>
              Im the mtf card
              {/* <p className={classes.cardCategory}>Revenue</p> */}
              {/* <h3 className={classes.cardTitle}>$34,245</h3> */}
            </CardContent>
          </Card>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper>
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper>
            <Orders />
          </Paper>
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
