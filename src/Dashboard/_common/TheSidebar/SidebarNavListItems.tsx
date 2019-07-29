import React from 'react'

import SidebarNavListItem, { SidebarNavListItemProps } from './SidebarNavListItem'

export interface SidebarNavListItemsProps {
  items: SidebarNavListItemProps[]
  isNested?: boolean
  isCollapsed?: boolean
}

const SidebarNavListItems: React.FC<SidebarNavListItemsProps> = (
  props: SidebarNavListItemsProps,
) => {
  const { items = [], isCollapsed = false, isNested = false } = props
  // const classes = useStyles()

  return (
    <>
      {items.map((item, index) => (
        <SidebarNavListItem
          {...item}
          isCollapsed={isCollapsed}
          isNested={isNested}
          key={index}
        />
      ))}
    </>
  )
}

export default SidebarNavListItems
