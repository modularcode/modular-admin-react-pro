import React, { ReactNode } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles, createStyles, styled } from '@material-ui/core/styles'
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
import IconThumbUp from '@material-ui/icons/ThumbUp'
import IconStars from '@material-ui/icons/Stars'
import IconNewReleases from '@material-ui/icons/NewReleases'

import { Theme } from '_theme'

// const ListItemStyled = ({ children }: { children: ReactNode }) => {
//   const classes = useStyles()

//   return (
//     <ListItem button className={classes.listItem}>
//       {children}
//     </ListItem>
//   )
// }

// ListItemStyled.propTypes = { children: PropTypes.node.isRequired }

const SidebarNav = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div>
      <List className={classes.navList}>
        <ListSubheader inset disableSticky={true} className={classes.navItem}>
          Main Modules
        </ListSubheader>
        <ListItem button className={classes.navItem}>
          <ListItemIcon>
            <IconDashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button className={classes.navItem}>
          <ListItemIcon>
            <IconShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button className={classes.navItem}>
          <ListItemIcon>
            <IconPeople />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button className={classes.navItem}>
          <ListItemIcon>
            <IconBarChart />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button onClick={handleClick} className={classes.navItem}>
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Other Pages" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <ListItem button className={clsx(classes.navItem, classes.nested)}>
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem button className={clsx(classes.navItem, classes.nested)}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button className={clsx(classes.navItem, classes.nested)}>
              <ListItemText primary="Signup" />
            </ListItem>
            <ListItem button className={clsx(classes.navItem, classes.nested)}>
              <ListItemText primary="Recover" />
            </ListItem>
            <ListItem button className={clsx(classes.navItem, classes.nested)}>
              <ListItemText primary="Reset" />
            </ListItem>
            <ListItem button className={clsx(classes.navItem, classes.nested)}>
              <ListItemText primary="Search" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      {/* <Divider /> */}
      <List className={classes.navList}>
        <ListSubheader inset disableSticky={true} className={classes.navItem}>
          UI & Utils
        </ListSubheader>
        <ListItem button className={classes.navItem}>
          <ListItemIcon>
            <IconPersonalVideo />
          </ListItemIcon>
          <ListItemText primary="UI Components" />
        </ListItem>
      </List>

      <List className={classes.navList}>
        <ListSubheader inset disableSticky={true}>
          Misc
        </ListSubheader>
        <ListItem button>
          <ListItemIcon className={classes.iconFeatures}>
            <IconNewReleases />
          </ListItemIcon>
          <ListItemText primary="Why Modular?" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.iconDocs}>
            <IconLibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Docs" />
        </ListItem>

        <ListItem button>
          <ListItemIcon className={classes.iconSupport}>
            <IconThumbUp />
          </ListItemIcon>
          <ListItemText primary="Project Roadmap" />
        </ListItem>

        {/* <ListItem button>
          <ListItemIcon className={classes.iconSupport}>
            <IconThumbUp />
          </ListItemIcon>
          <ListItemText primary="Support Me" />
        </ListItem> */}
        <ListItem button>
          <ListItemIcon className={classes.iconSponsors}>
            <IconStars />
          </ListItemIcon>
          <ListItemText primary="Supporters" />
        </ListItem>
      </List>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(11),
    },
    navList: {
      width: theme.sidebar.width,
    },
    navItem: {
      width: theme.sidebar.width,
    },
    iconFeatures: {
      color: '#95de3c',
    },
    iconDocs: {
      color: '#f8cda9',
    },
    iconSupport: {
      color: '#45d0ff',
    },
    iconSponsors: {
      color: '#e3b546',
    },
  }),
)

export default SidebarNav
