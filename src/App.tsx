import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './_theme/index'
import Auth from './Auth/Auth'
import Dashboard from './Dashboard/Dashboard'

const App = () => {
  console.log('rerendered app')

  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/" component={Dashboard} />
          <Route path="/auth" component={Auth} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
