import React from 'react'

import { SidebarNavListItemProps } from './SidebarNavListItem'

export interface SidebarNavListProps {
  name?: string
  isNested?: boolean
  isCollapsed?: boolean
  items: SidebarNavListItemProps[]
}

const SidebarNavList = (props: SidebarNavListProps) => {
  return <div></div>
}

export default SidebarNavList
