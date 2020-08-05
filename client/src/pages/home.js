import React, { Component } from 'react'
import CHeader from '../components/parts/Header'
// import CFooter from '../components/parts/Footer'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CHeader></CHeader>
        {/* <CFooter></CFooter> */}
      </div>
    )
  }
}

export default Home