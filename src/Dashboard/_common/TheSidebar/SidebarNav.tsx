import React, { forwardRef } from 'react'
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

import Tooltip from '@material-ui/core/Tooltip'

import { SvgIconProps } from '@material-ui/core/SvgIcon'
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
import SidebarNavListItem from './SidebarNavListItem'

interface SidebarNavProps {
  isCollapsed: boolean
}

interface SidebarNavListItem {
  name: string
  link?: string
  Icon?: React.ComponentType<SvgIconProps>
}

interface SidebarNavListProps {
  items: SidebarNavListItem[]
  isNested?: boolean
  isCollapsed?: boolean
}

const sidebarNavListItemsMain = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Orders',
    link: '/orders',
    Icon: IconShoppingCart,
  },
  {
    name: 'Customers',
    link: '/customers',
    Icon: IconPeople,
  },
  {
    name: 'Reports',
    link: '/reports',
    Icon: IconBarChart,
  },
  {
    name: 'Other Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Account',
        link: '/account',
      },
      {
        name: 'Profile',
        link: '/profile',
      },
      {
        name: 'Login',
        link: '/auth/login',
      },
      {
        name: 'Signup',
        link: '/auth/signup',
      },
      {
        name: 'Recover',
        link: '/auth/recover',
      },
      {
        name: 'Reset',
        link: '/auth/reset',
      },
      {
        name: 'Search',
        link: '/auth/search',
      },
    ],
  },
]

const sidebarNavListItemsUI = [
  {
    name: 'Dashboard',
    link: '/demo/components',
    Icon: IconPersonalVideo,
  },
]

const sidebarNavListItemsMisc = [
  {
    name: 'Why Modular?',
    link: '/demo/features',
    Icon: IconNewReleases,
  },
  {
    name: 'Docs',
    link: '/demo/docs',
    Icon: IconLibraryBooks,
  },
  {
    name: 'Supporters',
    link: '/demo/supporters',
    Icon: IconStars,
  },
  {
    name: 'Discuss',
    link: '/demo/discuss',
    Icon: IconQuestionAnswer,
  },
]

const SidebarNavListItems: React.FC<SidebarNavListProps> = (
  props: SidebarNavListProps,
) => {
  const { items = [], isCollapsed = false, isNested = false } = props
  // const classes = useStyles()

  return (
    <>
      {items.map(item => (
        <SidebarNavListItem
          {...item}
          isCollapsed={isCollapsed}
          isNested={isNested}
          key={item.name || item.link}
        />
      ))}
    </>
  )
}

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

        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsMain} />
      </List>
      <List className={classes.navList}>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true} className={classes.navItem}>
            UI & Utils
          </ListSubheader>
        )}
        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsUI} />
      </List>
      <List className={classes.navList}>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Misc
          </ListSubheader>
        )}
        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsMisc} />
      </List>

      {/* <List className={classes.navList}>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true} className={classes.navItem}>
            UI & Utils
          </ListSubheader>
        )}
        <ListItem
          component={ListItemLink}
          button
          to="/demo/components"
          className={classes.navItem}
        >
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
        <ListItem
          component={ListItemLink}
          to="/demo/features"
          button
          className={classes.navItem}
        >
          <ListItemIcon className={classes.iconFeatures}>
            <IconNewReleases />
          </ListItemIcon>
          <ListItemText primary="Why Modular?" />
        </ListItem>
        <ListItem
          component={ListItemLink}
          to="/demo/docs"
          button
          className={classes.navItem}
        >
          <ListItemIcon className={classes.iconDocs}>
            <IconLibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Docs" />
        </ListItem>

        <ListItem
          component={ListItemLink}
          to="/demo/supporters"
          button
          className={classes.navItem}
        >
          <ListItemIcon className={classes.iconSponsors}>
            <IconStars />
          </ListItemIcon>
          <ListItemText primary="Supporters" />
        </ListItem>

        <ListItem
          component={ListItemLink}
          to="/demo/discuss"
          button
          className={classes.navItem}
        >
          <ListItemIcon className={classes.iconDiscuss}>
            <IconQuestionAnswer />
          </ListItemIcon>
          <ListItemText primary="Discuss" />
        </ListItem>
      </List> */}
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
