import React, { ReactNode } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { NavLink } from 'react-router-dom'
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
import IconQuestionAnswer from '@material-ui/icons/QuestionAnswer'
import IconBallot from '@material-ui/icons/Ballot'
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
        <ListItem component={props => <NavLink exact {...props} to="/" />} button className={classes.navItem}>
          <ListItemIcon>
            <IconDashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={props => <NavLink {...props} to="/orders" />} button className={classes.navItem}>
          <ListItemIcon>
            <IconShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem component={props => <NavLink {...props} to="/customers" />} button className={classes.navItem}>
          <ListItemIcon>
            <IconPeople />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem component={props => <NavLink {...props} to="/reports" />} button className={classes.navItem}>
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
            <ListItem
              component={props => <NavLink {...props} to="/account" />}
              button
              className={clsx(classes.navItem, classes.nested)}
            >
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem
              component={props => <NavLink {...props} to="/profile" />}
              button
              className={clsx(classes.navItem, classes.nested)}
            >
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem
              component={props => <NavLink {...props} to="/auth/login" />}
              button
              className={clsx(classes.navItem, classes.nested)}
            >
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem
              component={props => <NavLink {...props} to="/auth/signup" />}
              button
              className={clsx(classes.navItem, classes.nested)}
            >
              <ListItemText primary="Signup" />
            </ListItem>
            <ListItem
              component={props => <NavLink {...props} to="/auth/recover" />}
              button
              className={clsx(classes.navItem, classes.nested)}
            >
              <ListItemText primary="Recover" />
            </ListItem>
            <ListItem
              component={props => <NavLink {...props} to="/auth/reset" />}
              button
              className={clsx(classes.navItem, classes.nested)}
            >
              <ListItemText primary="Reset" />
            </ListItem>
            <ListItem
              component={props => <NavLink {...props} to="/auth/search" />}
              button
              className={clsx(classes.navItem, classes.nested)}
            >
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
        <ListItem component={props => <NavLink {...props} to="/demo/components" />} button className={classes.navItem}>
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
        <ListItem component={props => <NavLink {...props} to="/demo/features" />} button className={classes.navItem}>
          <ListItemIcon className={classes.iconFeatures}>
            <IconNewReleases />
          </ListItemIcon>
          <ListItemText primary="Why Modular?" />
        </ListItem>
        <ListItem component={props => <NavLink {...props} to="/demo/docs" />} button className={classes.navItem}>
          <ListItemIcon className={classes.iconDocs}>
            <IconLibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Docs" />
        </ListItem>

        <ListItem component={props => <NavLink {...props} to="/demo/supporters" />} button className={classes.navItem}>
          <ListItemIcon className={classes.iconSponsors}>
            <IconStars />
          </ListItemIcon>
          <ListItemText primary="Supporters" />
        </ListItem>

        <ListItem component={props => <NavLink {...props} to="/demo/roadmap" />} button className={classes.navItem}>
          <ListItemIcon className={classes.iconSupport}>
            <IconBallot />
          </ListItemIcon>
          <ListItemText primary="Project Roadmap" />
        </ListItem>

        {/* <ListItem button>
          <ListItemIcon className={classes.iconSupport}>
            <IconThumbUp />
          </ListItemIcon>
          <ListItemText primary="Support Me" />
        </ListItem> */}

        <ListItem component={props => <NavLink {...props} to="/demo/discuss" />} button className={classes.navItem}>
          <ListItemIcon className={classes.iconDiscuss}>
            <IconQuestionAnswer />
          </ListItemIcon>
          <ListItemText primary="Discuss" />
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
      '&.active': {
        // color: theme.palette.primary.main,
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          // display: 'none',
          color: '#fff',
          // color: theme.palette.primary.main,
        },
      },
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
    iconDiscuss: {
      color: '#ccc',
    },
  }),
)

export default SidebarNav
