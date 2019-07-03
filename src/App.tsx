import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.scss'
import Auth from './Auth/Auth'
import Dashboard from './Dashboard/Dashboard'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Dashboard} />
        <Route path="/auth" component={Auth} />
      </BrowserRouter>
    </div>
  )
}

export default App
