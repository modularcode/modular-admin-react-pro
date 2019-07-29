import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes, { any } from 'prop-types'
import clsx from 'clsx'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { NavLink, NavLinkProps } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconSpacer from '@material-ui/icons/FiberManualRecord'

import { Theme } from '_theme'

// Define recursive tree props
export const SidebarNavListItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  icon: PropTypes.node,
  isCollapsed: PropTypes.bool,
  isOpen: PropTypes.bool,
  isNested: PropTypes.bool,
  className: PropTypes.string,
  items: PropTypes.array,
}

// Infer properties from runtime prop types
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
// Add recursion support
export type SidebarNavListItemProps = PropTypes.InferProps<
  typeof SidebarNavListItemPropTypes
> & {
  items?: SidebarNavListItemProps[]
}

export interface ListItemLinkProps extends NavLinkProps {}

export interface ListItemComponentProps extends React.HTMLAttributes<HTMLElement> {
  link?: string | null
  children?: any
}

export interface ListItemElementProps {
  children?: any
}

export interface ListItemRootProps {
  children?: any
}

// ----------------------------------------------------------------------

export const ListItemLink: React.ExoticComponent<NavLinkProps> = forwardRef(
  (props: ListItemLinkProps, ref: React.Ref<HTMLAnchorElement>) => (
    <NavLink exact {...props} innerRef={ref} />
  ),
)

// Can be a link, or button
export const ListItemComponent: React.FC<ListItemComponentProps> = props => {
  if (typeof props.link === 'string') {
    return <ListItem {...props} button component={ListItemLink} to={props.link} />
  } else {
    return <ListItem {...props} button />
  }
}

const ListItemRoot: React.FC<SidebarNavListItemProps> = (
  props: SidebarNavListItemProps,
) => {
  const classes = useStyles()
  const {
    name,
    link,
    isCollapsed,
    isNested,
    className,
    items = [],
    isOpen = false,
  } = props
  const isExpandable = items && items.length > 0
  // Disable the tooltip if the item is not collapsed
  // <Tooltip
  //   disableFocusListener={!isTooltipEnabeld}
  //   disableHoverListener={!isTooltipEnabeld}
  //   disableTouchListener={!isTooltipEnabeld}
  //   title={name}
  //   placement="right"
  // >
  return (
    <ListItemComponent
      link={link}
      className={clsx(
        classes.navItem,
        isCollapsed && classes.navItemCollapsed,
        isNested && !isCollapsed && classes.nested,
        className,
      )}
    >
      <ListItemText primary={name} />

      {isExpandable && !isOpen && <IconExpandMore />}
      {isExpandable && isOpen && <IconExpandLess />}
    </ListItemComponent>
  )
  // </Tooltip>
}

// const ListItemRootWithTooltip = null

const SidebarNavListItem: React.FC<SidebarNavListItemProps> = (
  props: SidebarNavListItemProps,
) => {
  const { name, link, isCollapsed, isNested, className, items = [] } = props
  const isTooltipEnabeld = isCollapsed
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const ListItemRoot = (
    // <Tooltip
    //   disableFocusListener={!isTooltipEnabeld}
    //   disableHoverListener={!isTooltipEnabeld}
    //   disableTouchListener={!isTooltipEnabeld}
    //   title={name}
    //   placement="right"
    // >
    <ListItemComponent
      link={link}
      className={clsx(
        classes.navItem,
        isCollapsed && classes.navItemCollapsed,
        isNested && !isCollapsed && classes.nested,
        className,
      )}
      onClick={handleClick}
    >
      <ListItemText primary={name} />

      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </ListItemComponent>
    // </Tooltip>
  )

  const ListItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map(item => (
          <SidebarNavListItem
            {...item}
            isNested={true}
            isCollapsed={isCollapsed}
            key={item.name || item.link}
            isOpen={open}
          />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {ListItemRoot}
      {ListItemChildren}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(11),
    },
    navItem: {
      // padding: 0,
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
    // navItemLink: {
    //   width: '100%',
    //   padding: '8px, 12px',
    // },
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

export default SidebarNavListItem
