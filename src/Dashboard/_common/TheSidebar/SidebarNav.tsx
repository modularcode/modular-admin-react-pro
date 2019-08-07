import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import IconSales from '@material-ui/icons/AttachMoney'
import IconContent from '@material-ui/icons/Create'
import IconProfile from '@material-ui/icons/AccountBox'
import IconAccount from '@material-ui/icons/AccountBalance' //
import IconAuthorization from '@material-ui/icons/HowToReg'
import IconAdmin from '@material-ui/icons/DeviceHub'
import IconMisc from '@material-ui/icons/MoreHoriz'

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
import IconFace from '@material-ui/icons/TagFaces'
import IconSettings from '@material-ui/icons/Settings'
import IconGroup from '@material-ui/icons/Group'

import { Theme } from '_theme'
import SidebarNavListItems from './SidebarNavListItems'

export interface SidebarNavProps {
  isCollapsed: boolean
}

const SidebarNav = (props: SidebarNavProps) => {
  const { isCollapsed } = props
  const classes = useStyles()

  const sidebarNavListItemsSales = [
    {
      name: 'Dashboard',
      link: '/',
      Icon: IconDashboard,
    },
    {
      name: 'Products',
      Icon: IconProducts,
      items: [
        {
          name: 'All Products',
          link: '/products',
        },
        {
          name: 'Add New',
          link: '/products/new',
        },
        {
          name: 'Categories',
          link: '/products/categories',
        },
        {
          name: 'Tags',
          link: '/products/tags',
        },
      ],
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
  ]

  const sidebarNavListItemsContent = [
    {
      name: 'Items',
      link: '/content/items',
    },
    {
      name: 'Items Editor',
      link: '/content/items/new',
    },

    {
      name: 'Categories',
      link: '/content/categories',
    },
    {
      name: 'Categories Editor',
      link: '/content/categories/new',
    },
  ]

  const sidebarNavListItemsProfile = [
    {
      name: 'Profile',
      link: '/profile',
      Icon: IconProfile,
    },
    {
      name: 'Profile Settings',
      link: '/profile/settings',
      Icon: IconSettings,
    },
  ]

  const sidebarNavListItemsAccount = [
    {
      name: 'Account',
      link: '/account',
      Icon: IconAccount,
    },
    {
      name: 'Account Settings',
      link: '/account/settings',
      Icon: IconSettings,
    },
    {
      name: 'Account Users',
      link: '/account/settings',
      Icon: IconGroup,
    },
  ]

  const sidebarNavListItemsAuth = [
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
  ]

  const sidebarNavListItemsAdmin = [
    {
      name: 'Accounts',
      link: '/admin/accounts',
      Icon: IconAccount,
    },
    {
      name: 'Users',
      link: '/admin/users',
      Icon: IconGroup,
    },
  ]

  const sidebarNavListItemsMisc = [
    {
      name: 'Search',
      link: '/search',
      // Icon: IconPersonalVideo,
    },
    {
      name: 'Not Found',
      link: '/notfound',
      // Icon: IconPersonalVideo,
    },
  ]

  const sidebarNavListItemsModules = [
    {
      name: 'Sales & Ecommerce',
      items: sidebarNavListItemsSales,
      Icon: IconSales,
    },
    {
      name: 'Content management',
      items: sidebarNavListItemsContent,
      Icon: IconContent,
    },
    {
      name: 'Profile',
      items: sidebarNavListItemsProfile,
      Icon: IconProfile,
    },
    {
      name: 'Account',
      items: sidebarNavListItemsAccount,
      Icon: IconAccount,
    },
    {
      name: 'Authenitcation',
      items: sidebarNavListItemsAuth,
      Icon: IconAuthorization,
    },
    {
      name: 'Administration',
      items: sidebarNavListItemsAdmin,
      Icon: IconAdmin,
    },
    {
      name: 'Misc Pages',
      items: sidebarNavListItemsMisc,
      Icon: IconMisc,
    },
  ]

  const sidebarNavListItemsUI = [
    {
      name: 'UI Components',
      link: '/demo/components',
      Icon: IconPersonalVideo,
    },
  ]

  const sidebarNavListItemsTheme = [
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
            Core Modules
          </ListSubheader>
        )}
        <SidebarNavListItems
          isCollapsed={isCollapsed}
          items={sidebarNavListItemsModules}
        />
      </List>

      {/* <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Sales & Ecommerce
          </ListSubheader>
        )}

        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsSales} />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Content & Management
          </ListSubheader>
        )}

        <SidebarNavListItems
          isCollapsed={isCollapsed}
          items={sidebarNavListItemsContent}
        />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Profile
          </ListSubheader>
        )}

        <SidebarNavListItems
          isCollapsed={isCollapsed}
          items={sidebarNavListItemsProfile}
        />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Account
          </ListSubheader>
        )}

        <SidebarNavListItems
          isCollapsed={isCollapsed}
          items={sidebarNavListItemsAccount}
        />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Authentication
          </ListSubheader>
        )}

        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsAuth} />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Global Administration
          </ListSubheader>
        )}

        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsAdmin} />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Misc Pages
          </ListSubheader>
        )}

        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsMisc} />
      </List> */}

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
        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsTheme} />
      </List>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navList: {
      width: theme.sidebar.width,
      fontSize: '1.1em',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
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
