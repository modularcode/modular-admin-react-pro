/*
  This is the hard-coded sidebar navigation layout example,
  which is more simple then the dinamic one,
  you may use this implementation, if you find
  the dynamic implementation too complicated

  Also you need manually wrap the elements with tooltips
  if the sidebar is collapsed
*/

import React, { forwardRef } from 'react'
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

import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconPersonalVideo from '@material-ui/icons/PersonalVideo'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconQuestionAnswer from '@material-ui/icons/QuestionAnswer'
import IconStars from '@material-ui/icons/Stars'
import IconNewReleases from '@material-ui/icons/NewReleases'
import IconSpacer from '@material-ui/icons/FiberManualRecord'

import { Theme } from '_theme'

interface SidebarNavProps {
  isCollapsed: boolean
}

interface SidebarNavListItem {
  name: string
  link: string
  icon?: React.ElementType<any>
}

interface SidebarNavListProps {
  items: SidebarNavListItem[]
  isNested?: boolean
  isCollapsed?: boolean
}

interface ListItemLinkProps extends NavLinkProps {}

const ListItemLink: React.ExoticComponent<ListItemLinkProps> = forwardRef(
  (props: ListItemLinkProps, ref: React.Ref<HTMLAnchorElement>) => <NavLink exact {...props} innerRef={ref} />,
)

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

        <ListItem component={ListItemLink} button to="/" className={classes.navItem}>
          <ListItemIcon>
            <IconDashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem component={ListItemLink} button to="/orders" className={classes.navItem}>
          <ListItemIcon>
            <IconShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>

        <ListItem component={ListItemLink} button to="/customers" className={classes.navItem}>
          <ListItemIcon>
            <IconPeople />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>

        <ListItem component={ListItemLink} button to="/reports" className={classes.navItem}>
          <ListItemIcon>
            <IconBarChart />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>

        <ListItem button onClick={handleClick} className={classes.navItem}>
          <ListItemIcon>
            <IconLibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Other Pages" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <ListItem component={ListItemLink} button to="/account" className={classes.navItem}>
              {!isCollapsed && (
                <ListItemIcon>
                  <IconSpacer />
                </ListItemIcon>
              )}
              <ListItemText primary="Account" />
            </ListItem>

            <ListItem component={ListItemLink} button to="/profile" className={classes.navItem}>
              {!isCollapsed && (
                <ListItemIcon>
                  <IconSpacer />
                </ListItemIcon>
              )}
              <ListItemText primary="Profile" />
            </ListItem>

            <ListItem component={ListItemLink} button to="/auth/login" className={classes.navItem}>
              {!isCollapsed && (
                <ListItemIcon>
                  <IconSpacer />
                </ListItemIcon>
              )}
              <ListItemText primary="Login" />
            </ListItem>

            <ListItem component={ListItemLink} button to="/auth/signup" className={classes.navItem}>
              {!isCollapsed && (
                <ListItemIcon>
                  <IconSpacer />
                </ListItemIcon>
              )}
              <ListItemText primary="Signup" />
            </ListItem>

            <ListItem component={ListItemLink} button to="/auth/recover" className={classes.navItem}>
              {!isCollapsed && (
                <ListItemIcon>
                  <IconSpacer />
                </ListItemIcon>
              )}
              <ListItemText primary="Recover" />
            </ListItem>

            <ListItem component={ListItemLink} button to="/auth/reset" className={classes.navItem}>
              {!isCollapsed && (
                <ListItemIcon>
                  <IconSpacer />
                </ListItemIcon>
              )}
              <ListItemText primary="Reset" />
            </ListItem>

            <ListItem component={ListItemLink} button to="/search" className={classes.navItem}>
              {!isCollapsed && (
                <ListItemIcon>
                  <IconSpacer />
                </ListItemIcon>
              )}
              <ListItemText primary="Search" />
            </ListItem>

            <ListItem component={ListItemLink} button to="/not-found" className={classes.navItem}>
              {!isCollapsed && (
                <ListItemIcon>
                  <IconSpacer />
                </ListItemIcon>
              )}
              <ListItemText primary="Not Found" />
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
    navItemCollapsed: {
      whiteSpace: 'nowrap',
      flexWrap: 'nowrap',
      width: theme.sidebar.widthCollapsed,
    },
    iconSpacer: {
      fontSize: 13,
      marginLeft: 6,
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
