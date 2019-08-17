import React from 'react'
import BlankLayout from './BlankLayout'
import DashboardLayout from './DashboardLayout'

const Wrapper = DashboardLayout

const withDashboardLayout = (WrappedComponent: React.ComponentType<any>) => {
  return () => (
    <Wrapper>
      <WrappedComponent />
    </Wrapper>
  )
}

export { withDashboardLayout }
