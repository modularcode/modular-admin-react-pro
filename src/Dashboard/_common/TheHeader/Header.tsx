import React from 'react'
import clsx from 'clsx'
import { Link, LinkProps } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
// import Menu from '@material-ui/core/Menu'
// import MenuItem from '@material-ui/core/MenuItem'
import IconMenu from '@material-ui/icons/Menu'
import IconCode from '@material-ui/icons/Code'
import IconSearch from '@material-ui/icons/Search'
import IconFavorite from '@material-ui/icons/Favorite'
import IconStar from '@material-ui/icons/Star'

import IconNotifications from '@material-ui/icons/Notifications'
import Button from '@material-ui/core/Button'

// import HeaderSearch from './HeaderSearch'
import HeaderProfile from './HeaderProfile'

interface HeaderProps {
  onToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SupportLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
))

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
        <div className={classes.demo}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            className={classes.button}
            href="https://github.com/modularcode/material-admin-react"
          >
            <IconCode className={classes.demoIcon} />
            View on GitHub
          </Button>
          <Button
            component={SupportLink}
            size="small"
            variant="outlined"
            color="primary"
            className={classes.button}
            to="/demo/supporters"
          >
            <IconFavorite className={classes.demoIcon} />
            Support Us
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            className={classes.button}
            href="https://github.com/modularcode/material-admin-react/stargazers"
          >
            <IconStar className={classes.demoIcon} />
            Rate Us
          </Button>
        </div>
        <div className={classes.actions}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Search"
            className={classes.searchButton}
          >
            <IconSearch />
          </IconButton>
          {/* <HeaderSearch /> */}
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
  demo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  demoIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  actions: {
    marginLeft: 'auto',
    alignItems: 'center',
    display: 'flex',
  },
  searchButton: {
    marginRight: 20,
  },
  notificationsButton: {
    marginRight: 23,
  },
  title: {
    flexGrow: 1,
  },
}))

export default Header
