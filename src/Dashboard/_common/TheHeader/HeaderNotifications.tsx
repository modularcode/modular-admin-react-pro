import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import IconNotifications from '@material-ui/icons/Notifications'

const HeaderNotifications = () => {
  const classes = useStyles()

  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="Search"
      className={classes.button}
    >
      <Badge badgeContent={4} color="secondary" classes={{ badge: classes.badge }}>
        <IconNotifications />
      </Badge>
    </IconButton>
  )
}

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: 23,
  },
  badge: {
    color: '#fff',
  },
}))

export default HeaderNotifications
