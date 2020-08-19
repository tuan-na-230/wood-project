import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeAdmin from './pages/HomeAdmin'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/Contact'

class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={HomeAdmin} />
        <Route path="/about" component={About} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    )
  }
}

export default Routes