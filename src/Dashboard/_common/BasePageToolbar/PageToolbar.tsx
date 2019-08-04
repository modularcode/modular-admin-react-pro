import React from 'react'
import clsx from 'clsx'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { Theme } from '_theme'

export interface PageToolbarProps {
  title?: React.ReactNode
  titleComponent?: React.ComponentType<any>
  actions?: React.ReactElement<any>
  actionsComponent?: React.ComponentType<any>
  classes?: {
    container?: string
    titleContainer?: string
    actionsContainer?: string
  }
}

const PageToolbar: React.FC<PageToolbarProps> = (props: PageToolbarProps) => {
  const classes = useStyles()
  const userClasses = props.classes || {}

  const Title = props.title ? (
    <Typography variant="h3" component="h1">
      {props.title}
    </Typography>
  ) : null
  const TitleComponent = props.titleComponent

  const Actions = props.actions
  const ActionsComponent = props.actionsComponent

  return (
    <Grid
      container
      spacing={3}
      className={clsx(classes.container, userClasses.container)}
    >
      <Grid
        item
        xs
        alignItems="center"
        container
        className={clsx(classes.titleContainer, userClasses.titleContainer)}
      >
        {Title && Title}
        {TitleComponent && <TitleComponent />}
      </Grid>
      <Grid
        item
        xs
        alignItems="center"
        container
        className={clsx(classes.actionsContainer, userClasses.titleContainer)}
      >
        {Actions && Actions}
        {ActionsComponent && <ActionsComponent />}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: '1.5rem',
    },
    titleContainer: {},
    actionsContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
)

export default PageToolbar
