import React, { forwardRef } from 'react'
import PropTypes, { any } from 'prop-types'
import clsx from 'clsx'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { NavLink, NavLinkProps } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import IconSpacer from '@material-ui/icons/FiberManualRecord'

import { Theme } from '_theme'

// // We need this in order to use MaterialUI list items with links
// // See. https://material-ui.com/components/buttons/#third-party-routing-library
// interface ListItemLinkProps extends NavLinkProps {}

// const ListItemLink = forwardRef((props: ListItemLinkProps, ref: React.Ref<HTMLAnchorElement>) => (
//   <NavLink exact {...props} innerRef={ref} />
// ))

// ListItemLink.displayName = 'ListItemLink'

interface ListItemLinkProps extends NavLinkProps {}

const ListItemLink = forwardRef((props: ListItemLinkProps, ref: React.Ref<HTMLAnchorElement>) => (
  <NavLink exact {...props} innerRef={ref} />
))

ListItemLink.displayName = 'ListItemLink'

// Define recursive tree props
const SidebarNavListItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  icon: PropTypes.node,
  isCollapsed: PropTypes.bool,
  isNested: PropTypes.bool,
  className: PropTypes.string,
  items: PropTypes.array,
}

// Infer properties from runtime prop types
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
// Add recursion support
export type SidebarNavListItemProps = PropTypes.InferProps<typeof SidebarNavListItemPropTypes> & {
  items: SidebarNavListItemProps[]
}

const SidebarNavListItem = (props: SidebarNavListItemProps) => {
  const { name, link, isCollapsed, isNested, className } = props
  const hasTooltip = isCollapsed
  const classes = useStyles()

  const listElementClassName = clsx(
    classes.navItem,
    isCollapsed && classes.navItemCollapsed,
    isNested && !isCollapsed && classes.nested,
    className,
  )

  // Can be a link, or text
  const ListItemElement = (props: any) => {
    if (typeof link === 'string') {
      return <ListItem {...props} component={<ListItemLink to={link} />} className={listElementClassName} />
    } else {
      return <ListItem {...props} button className={listElementClassName} />
    }
  }

  const ListItemNode = (
    <ListItemElement>
      {isNested && isCollapsed && (
        <ListItemIcon>
          <IconSpacer className={classes.iconSpacer} />
        </ListItemIcon>
      )}
      {/* {icon && <ListItemIcon>{icon}</ListItemIcon>} */}
      <ListItemText primary={name} />
    </ListItemElement>
  )

  if (hasTooltip) {
    return (
      <Tooltip title={name} placement="right">
        {ListItemNode}
      </Tooltip>
    )
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(11),
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
  }),
)

export { SidebarNavListItemPropTypes }

export default SidebarNavListItem
