import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import LibraryBooks from '@material-ui/icons/LibraryBooks'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconPersonalVideo from '@material-ui/icons/PersonalVideo'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconPoll from '@material-ui/icons/Poll'
import IconThumbUp from '@material-ui/icons/ThumbUp'
import IconStars from '@material-ui/icons/Stars'
import IconMood from '@material-ui/icons/Mood'

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
        <ListSubheader inset>Main Modules</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <IconDashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IconShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IconPeople />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IconBarChart />
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
        <ListSubheader inset>Misc</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <IconLibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Docs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IconPersonalVideo />
          </ListItemIcon>
          <ListItemText primary="UI Components" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IconThumbUp />
          </ListItemIcon>
          <ListItemText primary="Support Us" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IconStars />
          </ListItemIcon>
          <ListItemText primary="Sponsors" />
        </ListItem>
      </List>
    </div>
  )
}

export default SidebarNav
