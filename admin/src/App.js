import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          { <Routes />}
        </div>
      </BrowserRouter>
    )
  }
}

export default App