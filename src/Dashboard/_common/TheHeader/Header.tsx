import React from 'react'
import clsx from 'clsx'
import { Link, LinkProps } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
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
import IconArrowDropDown from '@material-ui/icons/ArrowDropDown'

import NotificationsIcon from '@material-ui/icons/Notifications'
import Button from '@material-ui/core/Button'

// import HeaderSearch from './HeaderSearch'

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
            <IconCode className={classes.leftIcon} />
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
            <IconFavorite className={classes.leftIcon} />
            Support Us
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            className={classes.button}
            href="https://github.com/modularcode/material-admin-react/stargazers"
          >
            <IconStar className={classes.leftIcon} />
            Rate Us
          </Button>
        </div>
        <div className={classes.actions}>
          <IconButton edge="start" color="inherit" aria-label="Search" className={classes.searchButton}>
            <IconSearch />
          </IconButton>
          {/* <HeaderSearch /> */}
          <IconButton edge="start" color="inherit" aria-label="Search" className={classes.notificationsButton}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="Search" className={classes.profileButton}>
            <Avatar
              className={classes.profileAvatar}
              alt="John Doe"
              src="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
            />
            <span className={classes.profileName}>John Doe</span>
            <IconArrowDropDown />
          </IconButton>
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
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  actions: {
    marginLeft: 'auto',
  },
  searchButton: {
    marginRight: 20,
  },
  notificationsButton: {
    marginRight: 23,
  },
  profileButton: {
    borderRadius: '30px',
    fontSize: '1.2rem',
    padding: '8px',
  },
  profileAvatar: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  profileName: {
    fontWeight: 'bold',
    marginRight: 5,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
}))

export default Header
