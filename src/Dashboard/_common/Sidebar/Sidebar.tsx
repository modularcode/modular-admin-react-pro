import React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import Divider from '@material-ui/core/Divider'

import Logo from '_common/Logo/Logo'
import SidebarNav from './SidebarNav'

interface SidebarProps {
  onToggleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  isDesktop: boolean
  isMobile: boolean
  isSidebarCollapsedDesktop: boolean
  isSidebarOpenMobile: boolean
}

const Sidebar = (props: SidebarProps) => {
  const classes = useStyles(props)

  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <Logo size={30} />
        <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.title}>
          <span className={classes.name}>ModularAdmin</span>
          <span className={classes.tagline}>ReactJS + MaterialUI</span>
        </Typography>
      </div>
      <Divider />

      <SidebarNav />
    </aside>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  sidebar: {
    backgroundSize: 'cover',
    backgroundPosition: 'fixed',
    backgroundImage: 'url(https://modular-admin-html.modularcode.io/sidebar-bg-1.jpg)',
    color: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  logo: {},
  title: (props: SidebarProps) => ({
    fontSize: '20px',
    position: 'relative',
    overflow: 'visible',
    marginLeft: '5px',
    display: props.isDesktop && props.isSidebarCollapsedDesktop ? 'none' : 'block',
  }),
  name: {},
  tagline: {
    opacity: 0.7,
    fontSize: 8,
    fontWeight: 'bold',
    position: 'absolute',
    top: '100%',
    marginTop: -5,
    background: theme.palette.primary.main,
    color: '#fff',
    borderRadius: 2,
    padding: '1px 3px',
    right: 0,
  },
}))

export default Sidebar
