import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import { SvgIconProps } from '@material-ui/core/SvgIcon'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconPersonalVideo from '@material-ui/icons/PersonalVideo'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconQuestionAnswer from '@material-ui/icons/QuestionAnswer'
import IconStars from '@material-ui/icons/Stars'
import IconNewReleases from '@material-ui/icons/NewReleases'

import { Theme } from '_theme'
import SidebarNavListItem from './SidebarNavListItem'

interface SidebarNavProps {
  isCollapsed: boolean
}

interface SidebarNavListItem {
  name: string
  link?: string
  Icon?: React.ComponentType<SvgIconProps>
  IconStyle?: object
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
    IconStyle: {
      color: '#95de3c',
    },
  },
  {
    name: 'Docs',
    link: '/demo/docs',
    Icon: IconLibraryBooks,
    IconStyle: {
      color: '#f8cda9',
    },
  },
  {
    name: 'Supporters',
    link: '/demo/supporters',
    Icon: IconStars,
    IconStyle: {
      color: '#e3b546',
    },
  },
  {
    name: 'Discuss',
    link: '/demo/discuss',
    Icon: IconQuestionAnswer,
    IconStyle: {
      color: '#ccc',
    },
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
  const { isCollapsed } = props
  const classes = useStyles()

  return (
    <div>
      <List className={classes.navList}>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
            Main Modules
          </ListSubheader>
        )}

        <SidebarNavListItems isCollapsed={isCollapsed} items={sidebarNavListItemsMain} />
      </List>
      <List className={classes.navList}>
        {!isCollapsed && (
          <ListSubheader inset disableSticky={true}>
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
  }),
)

export default SidebarNav
