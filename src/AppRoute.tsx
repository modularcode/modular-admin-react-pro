import React from 'react'
import { Route } from 'react-router-dom'

const AppRoute = ({ component: Component, layout: Layout, ...rest }: any) => (
  <Route
    {...rest}
    render={props => {
      if (Layout) {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      } else {
        return <Component {...props} />
      }
    }}
  />
)

export default AppRoute
