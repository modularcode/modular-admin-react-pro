import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { HashRouter, Route } from 'react-router-dom' // HashRouter
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './_theme/index'
import Auth from './Auth/Auth'
import Dashboard from './Dashboard/Dashboard'

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Route path="/" component={Dashboard} />
          <Route path="/auth" component={Auth} />
        </HashRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
