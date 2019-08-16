import React from 'react'
export interface BlankLayoutProps {
  children?: any
}

const BlankLayout: React.FC<BlankLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Im the blank layout!</h1>
      <div>{children}</div>
    </div>
  )
}

export default BlankLayout
