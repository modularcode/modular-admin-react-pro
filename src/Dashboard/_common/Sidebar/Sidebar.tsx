import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import Divider from '@material-ui/core/Divider'

import SidebarNav from './SidebarNav'

interface SidebarProps {
  onToggleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  isDesktop: boolean
  isMobile: boolean
  isSidebarCollapsedDesktop: boolean
  isSidebarOpenMobile: boolean
}

const useStyles = makeStyles(theme => ({
  sidebar: {},
  title: {
    fontSize: '20px',
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}))

const Sidebar = (props: SidebarProps) => {
  const classes = useStyles()

  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.title}>
          Modular Material
        </Typography>
      </div>
      <Divider />

      <SidebarNav />
    </aside>
  )
}

export default Sidebar
