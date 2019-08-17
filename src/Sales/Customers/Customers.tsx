import React from 'react'
// import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import PageContainer from '../../_common/PageContainer'

// import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { Theme } from '_theme'

export default function Customers() {
  const classes = useStyles()

  return (
    <PageContainer>
      <Paper>Customers</Paper>
    </PageContainer>
  )
}

const useStyles = makeStyles((theme: Theme) => ({}))
