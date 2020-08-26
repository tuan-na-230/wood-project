import React, { Component } from 'react'
import {Redirect, Switch, Route, withRouter } from 'react-router-dom'
import HomeAdmin from './pages/HomeAdmin'
import AdminRequest from './pages/AdminRequest'
import AdminProduct from './pages/AdminProduct'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/Contact'
import test from './pages/Test'
import Category from './pages/Category'
import Search from './pages/Search'
import history from './history'


class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route history={history} path="/search" component={Search} />
        <Route path="/category/:id" component={Category} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin/product" component={AdminProduct} />
        <Route path="/admin/request" component={AdminRequest} />
        <Route path="/admin" component={HomeAdmin} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} exact />
      </Switch>
    )
  }
}

export default withRouter(Routes)