import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'

import SidebarNav from './SidebarNav'

interface SidebarProps {
  onToggleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const open = true
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
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
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}))

const Sidebar = (props: SidebarProps) => {
  const classes = useStyles()

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.sidebarHeader}>
        <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.title}>
          Modular Material
        </Typography>
      </div>
      <Divider />

      <SidebarNav />
    </Drawer>
  )
}

export default Sidebar
