import './scss/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import history from './history'
import {Router} from 'react-router-dom'
import App from './App'

ReactDOM.render(
  (<Router history={history}>
    <App />
  </Router>),
  document.querySelector('#app')
)