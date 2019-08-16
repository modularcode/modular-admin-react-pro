import React, { useState } from 'react'
import moment from 'moment'
// import clsx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import PageContainer from '../../_common/PageContainer'
import PageToolbar from '../../_common/PageToolbar'

import { SalesDashboardProvider } from './overviewContext'

import SalesDashboardActions from './OverviewActions'
import OrdersHistory from './OrdersHistory'
import OrdersLatest from './OrdersLatest'

export default function SalesDashboard() {
  const [filter, setFilter] = useState({
    dateFrom: moment()
      .subtract(14, 'day')
      .startOf('day'),
    dateTo: moment().startOf('day'),
  })

  const PageTitle = 'Sales Dashboard'

  return (
    <SalesDashboardProvider value={{ filter, setFilter }}>
      <PageContainer>
        <PageToolbar
          title={PageTitle}
          actionsComponent={SalesDashboardActions}
        ></PageToolbar>

        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={12} lg={12}>
            <OrdersHistory />
          </Grid>
          {/* Recent Deposits */}
          {/* <Grid item xs={12} md={4} lg={4}>
          <Paper>
            <Deposits />
          </Paper>
        </Grid> */}
          {/* Recent Orders */}
          <Grid item xs={12}>
            <OrdersLatest />
          </Grid>
        </Grid>
      </PageContainer>
    </SalesDashboardProvider>
  )
}

// const useStyles = makeStyles((theme: Theme) => ({
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
// }))
