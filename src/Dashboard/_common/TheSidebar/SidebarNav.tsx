import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconProducts from '@material-ui/icons/LocalMall'
import IconOrders from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconPersonalVideo from '@material-ui/icons/PersonalVideo'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconQuestionAnswer from '@material-ui/icons/QuestionAnswer'
import IconStars from '@material-ui/icons/Stars'
import IconNewReleases from '@material-ui/icons/NewReleases'

import { Theme } from '_theme'
import SidebarNavListItems from './SidebarNavListItems'

export interface SidebarNavProps {
  isCollapsed: boolean
}

const SidebarNav = (props: SidebarNavProps) => {
  const { isCollapsed } = props
  const classes = useStyles()

  const sidebarNavListItemsMain = [
    {
      name: 'Dashboard',
      link: '/',
      Icon: IconDashboard,
    },
    {
      name: 'Products',
      link: '/products',
      Icon: IconProducts,
    },
    {
      name: 'Orders',
      link: '/orders',
      Icon: IconOrders,
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
          name: 'Profile',
          link: '/profile',
        },
        {
          name: 'Settings',
          link: '/settings',
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
      name: 'UI Components',
      link: '/demo/components',
      Icon: IconPersonalVideo,
    },
  ]

  const sidebarNavListItemsMisc = [
    {
      name: 'Why Modular?',
      link: '/demo/features',
      Icon: IconNewReleases,
      IconClassName: classes.iconFeatures,
    },
    {
      name: 'Docs',
      link: '/demo/docs',
      Icon: IconLibraryBooks,
      IconClassName: classes.iconDocs,
    },
    {
      name: 'Supporters',
      link: '/demo/supporters',
      Icon: IconStars,
      IconClassName: classes.iconSupporters,
    },
    {
      name: 'Discuss',
      link: '/demo/discuss',
      Icon: IconQuestionAnswer,
      IconClassName: classes.iconDiscuss,
    },
  ]

  return (
    <div>
      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Main Modules
          </ListSubheader>
        )}

        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsMain} />
      </List>
      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            UI & Utils
          </ListSubheader>
        )}
        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsUI} />
      </List>
      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Misc
          </ListSubheader>
        )}
        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsMisc} />
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
    iconFeatures: {
      color: '#95de3c',
    },
    iconDocs: {
      color: '#f8cda9',
    },
    iconSupporters: {
      color: '#e3b546',
    },
    iconDiscuss: {
      color: '#ccc',
    },
  }),
)

export default SidebarNav
