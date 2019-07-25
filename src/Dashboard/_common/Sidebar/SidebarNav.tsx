import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import LibraryBooks from '@material-ui/icons/LibraryBooks'

import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import PersonalVideo from '@material-ui/icons/PersonalVideo'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(11),
    },
  }),
)

const SidebarNav = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Other Pages" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Signup" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Recover" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Reset" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Search" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <PersonalVideo />
          </ListItemIcon>
          <ListItemText primary="UI Components" />
        </ListItem>
      </List>
    </div>
  )
}

export default SidebarNav
