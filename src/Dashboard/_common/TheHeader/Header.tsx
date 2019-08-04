import React from 'react'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import IconMenu from '@material-ui/icons/Menu'

import IconNotifications from '@material-ui/icons/Notifications'

import HeaderSearch from './HeaderSearch'
import HeaderDemo from './HeaderDemo'
import HeaderProfile from './HeaderProfile'

interface HeaderProps {
  onToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Header = ({ onToggle }: HeaderProps) => {
  const classes = useStyles()

  return (
    <AppBar position="absolute" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Toggle sidebar"
          onClick={onToggle}
          className={clsx(classes.menuButton)}
        >
          <IconMenu />
        </IconButton>
        <HeaderDemo />
        <div className={classes.actions}>
          <HeaderSearch />
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Search"
            className={classes.notificationsButton}
          >
            <Badge badgeContent={4} color="secondary">
              <IconNotifications />
            </Badge>
          </IconButton>
          <HeaderProfile />
        </div>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(theme => ({
  header: {
    background: '#fff',
    color: theme.palette.primary.main,
    boxShadow: 'none',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    marginRight: 15,
  },
  actions: {
    marginLeft: 'auto',
    alignItems: 'center',
    display: 'flex',
  },
  notificationsButton: {
    marginRight: 23,
  },
  title: {
    flexGrow: 1,
  },
}))

export default Header
