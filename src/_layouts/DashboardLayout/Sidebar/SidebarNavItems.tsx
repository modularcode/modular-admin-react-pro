import React from 'react'

import SidebarNavItem, { SidebarNavItemProps } from './SidebarNavItem'

export interface SidebarNavItemsProps {
  items: SidebarNavItemProps[]
  isNested?: boolean
  isCollapsed?: boolean
}

const SidebarNavItems: React.FC<SidebarNavItemsProps> = (props: SidebarNavItemsProps) => {
  const { items = [], isCollapsed = false, isNested = false } = props
  // const classes = useStyles()

  return (
    <>
      {items.map((item, index) => (
        <SidebarNavItem
          {...item}
          isCollapsed={isCollapsed}
          isNested={isNested}
          key={index}
        />
      ))}
    </>
  )
}

export default SidebarNavItems
