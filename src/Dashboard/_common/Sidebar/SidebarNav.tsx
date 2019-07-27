import React, { forwardRef, ReactNode, Component, Fragment } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { NavLink, NavLinkProps } from 'react-router-dom'
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
import IconSpacer from '@material-ui/icons/FiberManualRecord'

import { Theme } from '_theme'

interface SidebarNavProps {
  isCollapsed: boolean
}

interface SidebarNavItem {
  name: string
  link: string
  icon?: Component
}

interface SidebarNavListCreatorParams {
  items: SidebarNavItem[]
  withTooltips: boolean
}

// interface SidebarNavListCreator {
//   (options: SidebarNavListCreatorParams): Fragment
// }

interface ListItemLinkProps extends NavLinkProps {}

const ListItemLink = forwardRef((props: ListItemLinkProps, ref: React.Ref<HTMLAnchorElement>) => (
  <NavLink exact {...props} innerRef={ref} />
))

ListItemLink.displayName = 'ForwardNavLink'

// const sidebarNavLinksMain = [
//   {
//     name: 'Dashboard',
//     link: '/',
//     icon: IconDashboard,
//   },
//   {
//     name: 'Orders',
//     link: '/orders',
//     icon: IconShoppingCart,
//   },
//   {
//     name: 'Customers',
//     link: '/customers',
//     icon: IconPeople,
//   },
//   {
//     name: 'Reports',
//     link: '/reports',
//     icon: IconBarChart,
//   },
// ]
// const sidebarNavLinksUI = []
// const sidebarNavLinksMisc = []

// const createSidebarNavList: SidebarNavListCreator = ({ items, withTooltips }) => {
//   return (
//     <>
//       {items.map(item => (
//         <ListItem button component={ListItemLink} className={classes.navItem} to="/">
//           <ListItemIcon>
//             <IconDashboard />
//           </ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//       ))}
//     </>
//   )
// }

const SidebarNav = (props: SidebarNavProps) => {
  console.log('rerendered SidebarNav')

  const { isCollapsed } = props

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div>
      <List className={classes.navList}>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true} className={classes.navItem}>
            Main Modules
          </ListSubheader>
        )}
        <ListItem button component={ListItemLink} className={classes.navItem} to="/">
          <ListItemIcon>
            <IconDashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={ListItemLink} className={classes.navItem} to="/orders">
          <ListItemIcon>
            <IconShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={ListItemLink} className={classes.navItem} to="/customers">
          <ListItemIcon>
            <IconPeople />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button component={ListItemLink} className={classes.navItem} to="/reports">
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
              to="/account"
              component={ListItemLink}
              button
              className={clsx(classes.navItem, !isCollapsed && classes.nested)}
            >
              {isCollapsed && (
                <ListItemIcon>
                  <IconSpacer className={classes.iconSpacer} />
                </ListItemIcon>
              )}
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem
              to="/profile"
              component={ListItemLink}
              button
              className={clsx(classes.navItem, !isCollapsed && classes.nested)}
            >
              {isCollapsed && (
                <ListItemIcon>
                  <IconSpacer fontSize="small" />
                </ListItemIcon>
              )}
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem
              to="/auth/login"
              component={ListItemLink}
              button
              className={clsx(classes.navItem, !isCollapsed && classes.nested)}
            >
              {isCollapsed && (
                <ListItemIcon>
                  <IconSpacer fontSize="small" />
                </ListItemIcon>
              )}
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem
              to="/auth/signup"
              component={ListItemLink}
              button
              className={clsx(classes.navItem, !isCollapsed && classes.nested)}
            >
              {isCollapsed && (
                <ListItemIcon>
                  <IconSpacer fontSize="small" />
                </ListItemIcon>
              )}
              <ListItemText primary="Signup" />
            </ListItem>
            <ListItem
              to="/auth/recover"
              component={ListItemLink}
              button
              className={clsx(classes.navItem, !isCollapsed && classes.nested)}
            >
              {isCollapsed && (
                <ListItemIcon>
                  <IconSpacer fontSize="small" />
                </ListItemIcon>
              )}
              <ListItemText primary="Recover" />
            </ListItem>
            <ListItem
              to="/auth/reset"
              component={ListItemLink}
              button
              className={clsx(classes.navItem, !isCollapsed && classes.nested)}
            >
              {isCollapsed && (
                <ListItemIcon>
                  <IconSpacer fontSize="small" />
                </ListItemIcon>
              )}
              <ListItemText primary="Reset" />
            </ListItem>
            <ListItem
              to="/auth/search"
              component={ListItemLink}
              button
              className={clsx(classes.navItem, !isCollapsed && classes.nested)}
            >
              {isCollapsed && (
                <ListItemIcon>
                  <IconSpacer fontSize="small" />
                </ListItemIcon>
              )}
              <ListItemText primary="Search" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <List className={classes.navList}>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true} className={classes.navItem}>
            UI & Utils
          </ListSubheader>
        )}
        <ListItem component={ListItemLink} button to="/demo/components" className={classes.navItem}>
          <ListItemIcon>
            <IconPersonalVideo />
          </ListItemIcon>
          <ListItemText primary="UI Components" />
        </ListItem>
      </List>
      <List className={classes.navList}>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Misc
          </ListSubheader>
        )}
        <ListItem component={ListItemLink} to="/demo/features" button className={classes.navItem}>
          <ListItemIcon className={classes.iconFeatures}>
            <IconNewReleases />
          </ListItemIcon>
          <ListItemText primary="Why Modular?" />
        </ListItem>
        <ListItem component={ListItemLink} to="/demo/docs" button className={classes.navItem}>
          <ListItemIcon className={classes.iconDocs}>
            <IconLibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Docs" />
        </ListItem>

        <ListItem component={ListItemLink} to="/demo/supporters" button className={classes.navItem}>
          <ListItemIcon className={classes.iconSponsors}>
            <IconStars />
          </ListItemIcon>
          <ListItemText primary="Supporters" />
        </ListItem>

        {/* <ListItem component={ListItemLink} to="/demo/roadmap" button className={classes.navItem}>
          <ListItemIcon className={classes.iconSupport}>
            <IconBallot />
          </ListItemIcon>
          <ListItemText primary="Project Roadmap" />
        </ListItem> */}

        <ListItem component={ListItemLink} to="/demo/discuss" button className={classes.navItem}>
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
    iconSpacer: {
      fontSize: 15,
      marginLeft: 5,
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
