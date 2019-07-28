import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { Theme } from '_theme'
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
  console.log('rerendered Sidebar')

  const { isDesktop, isMobile, isSidebarCollapsedDesktop } = props

  const classes = useStyles(props)

  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <Logo size={30} />
        <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.title}>
          <span className={classes.name}>Material Admin</span>
          <span className={classes.tagline}>ReactJS + MaterialUI</span>
        </Typography>
      </div>
      <SidebarNav isCollapsed={isDesktop && isSidebarCollapsedDesktop} />
    </aside>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    color: theme.sidebar.color,
    background: theme.sidebar.background,
    overflowX: 'hidden',
    overflowY: 'auto',
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
