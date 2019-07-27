import React from 'react'
// import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { Theme } from '_theme'

export default function Customers() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Paper>Customers</Paper>
    </Container>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))
